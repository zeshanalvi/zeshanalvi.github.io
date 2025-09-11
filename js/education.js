// Make sure researchPapers is already loaded from research-papers.js
const educationcontainer = document.getElementById("education-container");

educationlist.forEach(edu => {
  const educationDiv = document.createElement("div");
  educationDiv.classList.add("education-item");

  educationDiv.innerHTML = `
  <h3>${edu.degree}</h3>
  <p class="info">${edu.university}  <em class="date"> ${edu.date} </em> </p>
  <p>${edu.details}</p>
    <hr/>
  `;

  educationcontainer.appendChild(educationDiv);
});
