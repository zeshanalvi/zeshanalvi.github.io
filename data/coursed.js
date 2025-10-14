const coursed = [
  {
    "title":"Web Technologies",
    "url":"CS4070"
  },
  {
    "title":"Quantum Computing for Machine Learning",
    "url":"CS4080"
  }
];

const coursedcontainer = document.getElementById("coursed-list");

coursed.forEach(elem => {
  const subdiv = document.createElement("li");
  subdiv.classList.add("coursed-item");

  subdiv.innerHTML = `<a href="courses/${elem.url}.html" target="_blank">${elem.title}</a>`;
  coursedcontainer.appendChild(subdiv);
});