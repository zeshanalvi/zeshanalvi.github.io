import requests
from bs4 import BeautifulSoup
import networkx as nx
import plotly.graph_objects as go
from collections import defaultdict

class Scholarnet:
    def __init__(self,dblp_url="https://dblp.org/pid/232/1606.html"):
        self.dblp_url=dblp_url

    def extract_graph(self):
        response = requests.get(self.dblp_url)
        soup = BeautifulSoup(response.text, "html.parser")
        papers = soup.find_all("li", class_="entry")
        edge_weights = defaultdict(int)
        author_papers = defaultdict(int)
        main_author = soup.find("title").text.split("::")[0].strip()

        for paper in papers:
            authors = [a.text for a in paper.find_all("span", itemprop="author")]
            for author in authors:
                author_papers[author] += 1
            # Count co-author pair frequencies
            for i in range(len(authors)):
                for j in range(i+1, len(authors)):
                    pair = tuple(sorted([authors[i], authors[j]]))
                    edge_weights[pair] += 1
        G = nx.Graph()
        for author, count in author_papers.items():
            if(author in main_author):
                G.add_node(author, size=count*10, color="red")
            else:
                G.add_node(author, size=count*10, color="#1f78b4")
        for (a, b), w in edge_weights.items():
            G.add_edge(a, b, weight=w*3, color="#B1C3EB2C")
        return G


net=Scholarnet(dblp_url="https://dblp.org/pid/290/7993.html")
G=net.extract_graph()



# pip install pyvis
import networkx as nx
from pyvis.network import Network

# Create Pyvis network
net = Network(notebook=True, height="600px", width="100%", bgcolor="#222222", font_color="white")
net.from_nx(G)

net.set_options("""
var options = {
  "physics": {
    "enabled": true,
    "stabilization": {
      "enabled": true,
      "iterations": 500
    },
    "barnesHut": {      
      "springLength": 200,
      "springConstant": 0.02,
      "damping": 0.3
    }
  }
}
""")



# Save and show
net.show("research_network.html")