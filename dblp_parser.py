import requests
from bs4 import BeautifulSoup
import argparse
import re
import json

def fetch_papers(author_name):
    # Encode author name for dblp URL
    query = author_name.replace(" ", "+")
    url = f"https://dblp.org/search?q={query}"
    
    # Get author page
    r = requests.get(url)
    if r.status_code != 200:
        raise Exception(f"Failed to fetch DBLP search page: {url}")

    soup = BeautifulSoup(r.text, "html.parser")
    
    # Find first author profile link
    author_link = soup.find("a", href=re.compile(r"^https://dblp\.org/pid/"))
    if not author_link:
        raise Exception(f"No author page found for {author_name}")
    
    author_url = author_link["href"] + ".html"
    r = requests.get(author_url)
    if r.status_code != 200:
        raise Exception(f"Failed to fetch author page: {author_url}")
    
    soup = BeautifulSoup(r.text, "html.parser")

    papers = []

    for entry in soup.select("li.entry"):
        authors = []
        for a in entry.select("span.author"):
            name = a.get_text(strip=True)
            if name == author_name:
                # highlight this author
                name = f"<span style='font-weight:bold'>{name}</span>"
            authors.append(name)
        
        year_tag = entry.select_one("span.year")
        title_tag = entry.select_one("span.title")
        venue_tag = entry.select_one("span.publ")
        
        year = year_tag.get_text(strip=True) if year_tag else "N/A"
        title = title_tag.get_text(strip=True) if title_tag else "N/A"
        venue = venue_tag.get_text(strip=True) if venue_tag else "N/A"

        papers.append({
            "authors": ", ".join(authors),
            "year": year,
            "title": title,
            "venue": venue
        })
    
    return papers

def write_js(papers, output_file):
    js_content = "const researchPapers = " + json.dumps(papers, indent=2, ensure_ascii=False) + ";"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(js_content)

def main():
    parser = argparse.ArgumentParser(description="Fetch research papers from DBLP")
    parser.add_argument("build", help="Command (use 'build')")  
    parser.add_argument("author", help="Author name")  
    parser.add_argument("--output", default="research-papers.js", help="Output JS file")

    args = parser.parse_args()

    if args.build != "build":
        print("Only 'build' command is supported")
        return
    
    papers = fetch_papers(args.author)
    write_js(papers, args.output)
    print(f"✔ Research papers saved to {args.output}")

if __name__ == "__main__":
    main()
