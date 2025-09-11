// data/researcher.js

const researcherlist = [
  {
    "title": "Member Technical Program Committee (TPC)",
    "conference": "27th International Multitopic Conference (INMIC) 2025",
    "details": "I am responsible for peer-reviewing submitted research papers and contributing to the selection of high-quality content for the conference program."
  },
  {
    "title": "Member Organizing Committee",
    "conference": "International Conference on Emerging Technologies (ICET 2013)",
    "details": "Coordinated logistics, registrations, and team communication for an international conference, contributing to program development and on-site management to support collaboration among researchers and industry professionals."
  },
  {
    "title": "Member Organizing Committee",
    "conference": "International Conference on Emerging Technologies (ICET 2023)",
    "details": "Managed technical sessions, keynote speakers, and team coordination, facilitating participation from international and local attendees. Played a key role in ensuring the event’s success, focusing on cutting-edge technological innovations and knowledge-sharing."
  },
  {
    "title": "PC Member",
    "conference": "International Conference on Advances in Machine Intelligence, and Cybersecurity Technologies (AMICT2025)",
    "details": "I am responsible for peer-reviewing submitted research papers and contributing to the selection of high-quality content for the conference program."
  },
  {
    "title": "PC Member",
    "conference": "22nd International Conference on Frontiers of Information Technology (FIT2025)",
    "details": "I am responsible for peer-reviewing submitted research papers and contributing to the selection of high-quality content for the conference program."
  }
];

const researchercontainer = document.getElementById("researcher-container");
researcherlist.forEach(elem => {
  const subdiv = document.createElement("div");
  subdiv.classList.add("education-item");

  subdiv.innerHTML = `
  <h3>${elem.degree}</h3>
  <p class="info">${elem.university}  <em class="date"> ${elem.date} </em> </p>
  <p>${elem.details}</p>
    <hr/>
  `;

  researchercontainer.appendChild(subdiv);
});
