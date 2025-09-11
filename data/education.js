// data/education-data.json

const educationlist = [
  {
    "degree":"Ph.D. in Computer Science",
    "date":"June 2024",
    "university":"National University of Computer and Emerging Sciences, Pakistan",
    "details": "During my PhD, I focused on tackling a real-world healthcare challenge through the lens of computer science. My thesis, titled <strong>Abnormalities and Disease Detection in Gastro-Intestinal Tract Images,</strong> centered on developing advanced machine learning and deep learning techniques to improve diagnostic accuracy in medical imaging—specifically for gastrointestinal (GI) tract abnormalities.<br> This work was driven by the growing need for faster, more reliable diagnostic tools, especially in areas like endoscopy, where timely detection is critical. I explored a range of cutting-edge methods for identifying and analyzing anomalies in GI images, working with large datasets and real-time processing techniques to improve the effectiveness of detecting conditions.<br>Beyond algorithm development, I focused on bridging the gap between theory and practice, bringing computational models closer to clinical application. The goal was to create tools that could genuinely support doctors and specialists in diagnosing GI diseases more accurately and efficiently.<br>Through this research, I not only demonstrated how powerful machine learning can be in enhancing medical imaging but also highlighted the value of collaboration between computer science and healthcare in solving impactful problems."
  },
  {
    "degree":"MS in Computer Science",
    "date":"December 2015",
    "university":"Capital University of Science and Technology, Islamabad, Pakistan",
    "details": "For my MS thesis, titled <b>An Improved Parenthesization Algorithm for the Matrix Chain Product (IPAMCP)</b>, I worked on improving the efficiency of matrix multiplication—an operation that plays a key role in many computational and scientific applications. While exploring traditional approaches to matrix chain multiplication, I noticed that a lot of redundant computations were slowing things down.<br>To address this, I designed a smarter algorithm that uses mathematical optimization techniques to decide, on the fly, whether to stick with the standard method or switch to the optimized version I developed. This dynamic approach ensures the most efficient computation path is chosen based on the specific problem at hand.<br>The result is an algorithm that significantly reduces computational effort and speeds up performance, especially in scenarios involving large or complex matrix operations. Through this work, I gained a deeper appreciation for the power of optimization in algorithm design and how small improvements can have a big impact in real-world applications."
  },
  {
    "degree":"BS in Computer Science",
    "date":"December 2012",
    "university":"Muhammad Ali Jinnah University, Pakistan",
    "details": "For my BS final year project, I worked on solving the Longest Common Subsequence (LCS) problem using a dominant point-based algorithm, with a focus on bioinformatics applications—specifically, sequence alignment. I implemented this algorithm and successfully integrated it with ClustalW, a well-known tool used for multiple sequence alignment.<br>The core idea was to speed up the alignment process by improving the algorithm’s efficiency which was NP hard problem in case of high number of sequences. My approach reduced the time complexity from the $O(n^d)$ by using dynamic programming to $O(n*d)$ using dominant point approach, where d represents the number of sequences of length n. This significantly accelerated the alignment without compromising accuracy.<br>This project demonstrated how algorithmic innovation can lead to meaningful performance improvements in real-world bioinformatics tasks, and it gave me hands-on experience in combining theoretical computer science with practical biological data analysis."
  }
];

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
