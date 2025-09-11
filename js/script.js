// js/script.js

// Make sure researchPapers is already loaded from research-papers.js
const paperscontainer = document.getElementById("papers-container");

researchPapers.forEach(paper => {
  const paperDiv = document.createElement("div");
  paperDiv.classList.add("paper-item");

  paperDiv.innerHTML = `
    <p>${paper.authors} (${paper.year})
    <strong>${paper.title}</strong>
    <em>${paper.venue}</em></p>
    <hr/>
  `;

  paperscontainer.appendChild(paperDiv);
});
