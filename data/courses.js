const courses = [
  {
    "title":"Design and Analysis of Algorithms",
    "url":"CS2009"
  },
  {
    "title":"Computer Programming",
    "url":"CS2009"
  },
  {
    "title":"Object Oriented Programming",
    "url":"CS2009"
  },
  {
    "title":"Computer Organization and Assembly Language",
    "url":"CS2009"
  },
  {
    "title":"Applied Human Computer Interaction",
    "url":"CS2009"
  },
  {
    "title":"Digital Image Processing",
    "url":"CS2009"
  },
  {
    "title":"Medical Image Analysis",
    "url":"CS2009"
  },
  {
    "title":"Information Retrival",
    "url":"CS2009"
  },
  {
    "title":"Machine Learning",
    "url":"CS2009"
  },
  {
    "title":"Design and Analysis of Algorithms",
    "url":"CS2009"
  },
  {
    "title":"Design and Analysis of Algorithms",
    "url":"CS2009"
  },
  {
    "title":"Design and Analysis of Algorithms",
    "url":"CS2009"
  }
];

const coursecontainer = document.getElementById("course-list");

courses.forEach(elem => {
  const subdiv = document.createElement("li");
  subdiv.classList.add("course-item");

  subdiv.innerHTML = `<a href="courses/${elem.url}.html" target="_blank">${elem.title}</a>`;
  coursecontainer.appendChild(subdiv);
});