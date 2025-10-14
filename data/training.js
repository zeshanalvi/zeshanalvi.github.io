// data/education-data.json

const traininglist = [
  {
    "title":"Unity 3D-based Game Development",
    "date":"May 2016",
    "institute":"CODE: Center of Game Development and Excellence",
    "details": "{In early 2016, I immersed myself in a two-month Unity 3D Game Development bootcamp at CODE, where I went from game enthusiast to confident developer. Daily hands-on projects had me building 3D worlds from scratch—rigging character controllers, coding interactive mechanics, and troubleshooting physics quirks."
  },
  {
    "title":"PPRS Autumn School for Deep Learning",
    "date":"October 2018",
    "institute":"Pakistani Pattern Recognition Society",
    "details": "At the 2018 PPRS Autumn School on Deep Learning, I dove into the fascinating world of AI-powered drones—where cutting-edge computer vision meets real-world flight. For three intensive days, I worked alongside experts implementing neural networks that could 'see' and interpret aerial footage in real-time. Getting hands-on with object detection algorithms that could track movement from UAV cameras, then testing our models in simulated flight scenarios. I understood how to adapt deep learning for the unique challenges of aerial systems, from dealing with changing altitudes to processing visual data mid-flight."
  },
  {
    "title":"Data Analytics and Big Data",
    "date":"August 9, 2018",
    "institute":"HEC, NCEAC and PASHA",
    "details": "I had the privilege of attending a dynamic seminar on Data Analytics and Big Data, a collaborative initiative by HEC, NCEAC, and PASHA. The event delved into the transformative power of big data across industries, blending cutting-edge trends—like machine learning and cloud-based analytics—with real-world applications. One key takeaway was the critical role of scalable solutions in managing vast datasets, as well as how data-driven strategies are reshaping business intelligence and public-sector decision-making."
  },
  {
    "title":"",
    "date":"",
    "institute":"",
    "details": ""
  },
  {
    "title":"",
    "date":"",
    "institute":"",
    "details": ""
  },
  {
    "title":"",
    "date":"",
    "institute":"",
    "details": ""
  }
];

const trainingcontainer = document.getElementById("training-container");
traininglist.forEach(elem => {
  const subDiv = document.createElement("div");
  subDiv.classList.add("training-item");

  subDiv.innerHTML = `
  <h3>${elem.title}</h3>
  <p class="info">${elem.institute}  <em class="date"> ${elem.date} </em> </p>
  <p>${elem.details}</p>
    <hr/>
  `;
  trainingcontainer.appendChild(subDiv);
});
