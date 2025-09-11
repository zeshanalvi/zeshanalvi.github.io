const experiencelist = [
  {
    "title":"Assistant Professor",
    "datest":"July. 2024",
    "dateend":"Current",
    "organization":"National University of Computer and Emerging Sciences, Pakistan",
    "responsabilities":[
        "Taught Object-Oriented Programming in C++ and Computer Organization and Assembly Language, ensuring students gained practical coding skills and understanding of low-level hardware interactions.",
        "Developed and introduced a new course on Quantum Machine Learning, teaching machine learning in a quantum environment, such as IBM Quantum Computer.",
        "Supervised final year project on Deforestation Trends Prediction using satellite image data, helping students develop a model for environmental monitoring and analysis.",
        "Guided a project on Tourism Encouragement using 3D Visualization Techniques, enabling students to create immersive virtual tourism experiences.",
        "Mentored a project on Safe Path Guidance for Tourism, resulting in a system providing real-time safety recommendations for travelers.",
        "Supervised an MS thesis on Brain Tumor Segmentation, leading to advancements in medical image processing and segmentation techniques.",
        "Provided mentorship for students' extracurricular activities, fostering personal growth and skills beyond the classroom.",
        "Coached students in ICPC programming competitions, developing their competitive coding abilities and improving problem-solving skills.",
        "Contributed to campus and department committees, including roles in the anti-tobacco/drugs committee and the exam retake committee.",
        "Served as a reviewer for the ICIT 2024 and ICET 2024, evaluating research papers for quality and relevance, and provided valuable feedback to authors."
    ]
  },
  {
    "title":"Lecturer",
    "datest":"August 2017",
    "dateend":"June 2024",
    "organization":"National University of Computer and Emerging Sciences, Pakistan",
    "responsabilities":[
        "Taught a diverse range of courses with a focus on software engineering topics such as Software Re-Engineering, Formal Methods in Software Engineering, and Design and Analysis of Algorithms. Other courses include Data Structures, Machine Learning, Web Technologies, Web Programming, Database Systems, Computer Networks, Programming Fundamentals, Human-Computer Interaction, Data Science, Information Retrieval, Theory of Automata, and Digital Image Processing.",
        "Developed a new course on Web Technologies, covering the MERN stack and other modern web development frameworks.",
        "Supervised numerous final year projects, guiding students to apply theoretical knowledge to practical problems. Some examples include medical applications like ECG Interpretation and AI Doc, a medical assistant, as well as innovative systems like a Cricket Player Ranking System using Google’s PageRank Algorithm, an emotion-based music player (Ignite Funded), and a meta-verse multiplayer chess game. Other projects explored fields like traffic vehicle recognition, VR tourism, and facial health monitoring.",
        "Supervised MS Theses focused on real-world applications of AI and computer vision, such as generating synthetic scenes for military and urban training, analyzing vendor spending, and using computer vision for social distancing and facemask detection to monitor COVID-19 SOPs.",
        "Member of the Organizing Committee for the International Conference on Emerging Technologies (ICET) 2023.",
        "Played a key role in organizing the International Conference on Emerging Technologies (ICET) 2023 at NUCES Peshawar Campus, contributing to the planning and execution of the event.",
        "Served as a reviewer for the ICET 2023, evaluating research papers for quality and relevance, and provided valuable feedback to authors. Additionally, participated as a reviewer for AAAI 2020, one of the leading AI conferences globally.",
        "Acted as the Faculty Advisor for multiple student societies, including the Webmasters Student Society and the Dramatics and Extracurricular Activities Society (DECS), overseeing student-led initiatives and encouraging active participation in academic and extracurricular events.",
        "Provided mentorship as the Faculty Co-Head of the Core Committee for Student Societies at NUCES Karachi, guiding various student groups in organizing campus-wide activities and fostering leadership skills.",
        "Led as the Faculty Advisor for the ACM Student Chapter and Microsoft Student Partner programs at NUCES Peshawar, supporting students in advancing their technical expertise and community outreach.",
        "Coordinated Final Year Projects (FYPs) at both Karachi and Peshawar Campuses, ensuring the successful completion of innovative student projects across multiple domains, from machine learning to software development.",
        "Acted as Faculty Coordinator for COLAB at Peshawar Campus, facilitating collaboration between students and faculty on creative and research-driven projects.",
        "Served as the focal person for NGIRI Ignite at both Karachi and Peshawar Campuses, assisting students in securing funding for innovative ideas and projects under the national-level NGIRI program.",
        "Coached and mentored students for prestigious programming competitions such as the FPSC and IEEE Xtreme 17, where my teams achieved top 5 rankings in Pakistan and secured positions among the top 100 globally."
    ]
  },
  {
    "title":"Jr. Lecturer",
    "datest":"November 2015",
    "dateend":"July 2017",
    "organization":"Riphah International University, Islamabad Campus, Pakistan",
    "responsabilities":[
        "Delivered lectures and supervised labs for key computer science courses such as Design and Analysis of Algorithms, Data Structures, and Database Systems, focusing on building a strong theoretical foundation and practical problem-solving skills in students.",
        "Supervised various final year projects in the domains of software engineering and artificial intelligence, guiding students through innovative projects like an Augmented Reality-based Surgery Simulator and a Code Plagiarism Detection System using the Longest Common Subsequence (LCS) algorithm for structural similarity.",
        "Organized programming competitions within the campus to encourage students' participation in problem-solving challenges, enhancing their coding and analytical abilities.",
        "Arranged industry visits to provide students with real-world exposure and mentorship opportunities, helping them bridge the gap between academic learning and industry practices."
    ]
  },
  {
    "title":"Jr. Lecturer",
    "datest":"September 2013",
    "dateend":"November 2015",
    "organization":"Muhammad Ali Jinnah University",
    "responsabilities":[
        "Taught labs for Data Structures, Programming Fundamentals, and Object-Oriented Programming, ensuring students grasped key concepts through practical sessions.",
        "Played a pivotal role in the committee for designing lab manuals, contributing to the creation of structured and effective lab exercises.",
        "Served as a member of the organizing committee for the International Conference on Emerging Technologies (ICET 2013) at Muhammad Ali Jinnah University, Islamabad, enhancing the conference’s success through careful planning and coordination.",
        "Actively organized and judged in the EXCEL IN IT CUP (EXCITECUP2013), fostering a competitive spirit and critical thinking among students in technology and programming competitions."
    ]
  },
  {
    "title":"Web Developer",
    "datest":"January 2013",
    "dateend":"September 2013",
    "organization":"NEO GlobalAB",
    "responsabilities":[
        "Developed various web applications using PHP and frameworks like CodeIgniter, delivering robust, user-friendly solutions tailored to client needs.",
        "Designed and implemented custom web solutions, focusing on scalability, security, and performance optimization.",
        "Integrated front-end and back-end technologies to build dynamic, interactive websites and applications.",
        "Collaborated with cross-functional teams to ensure seamless project development, from conceptualization to deployment.",
        "Managed databases and optimized SQL queries to enhance application efficiency and data handling capabilities.",
        "Created a flipbook feature, enabling seamless digital publication with interactive flipping effects for improved user engagement."
    ]
  },
  {
    "title":"Jr. Software Engineer",
    "datest":"June 2012",
    "dateend":"December 2012",
    "organization":"AXPROZ",
    "responsabilities":[
        "Developed C# web applications and performed back-end development using Microsoft technologies and SQL Server, ensuring high-performance, scalable solutions.",
        "Built and maintained web bots for automating software testing tasks, improving efficiency and reducing manual effort in testing workflows.",
        "Collaborated closely with front-end developers to ensure seamless integration of back-end services with user interfaces.",
        "Implemented robust database management practices, optimized SQL Server queries, and ensured data integrity in web applications.",
        "Designed APIs and services to support data-driven web applications, adhering to best practices in security and performance optimization."
    ]
  }
];

const expcontainer = document.getElementById("experience-container");
experiencelist.forEach(elem => {
  const subdiv = document.createElement("div");
  subdiv.classList.add("experience-item");
  subdiv.innerHTML = `
  <h3>${elem.title}</h3>
  <p class="info">${elem.organization}  <em class="date">${elem.datest} - ${elem.dateend} </em> </p>
  <h4>Responsabilities</h4>
  <ul>
  ${elem.responsabilities.map(resp => `<li>${resp}</li>`).join('')}
  </ul>
    <hr/>
  `;
  expcontainer.appendChild(subdiv);
});
