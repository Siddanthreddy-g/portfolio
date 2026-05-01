import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Social Network Privacy & Re-identification",
    desc: "Investigated privacy leakage in Google+ Ego-networks; demonstrated that hidden profile attributes can be predicted through neighbor majority voting. Implemented structural re-identification using node degree and Jaccard overlap to recover hidden friendships.",
    chips: ["Python", "NetworkX", "SNAP", "Data Modeling"],
    category: "Data Science"
  },
  {
    title: "Building Edge Detection for Disaster Response",
    desc: "Architected a pathfinding system using Canny/Sobel edge detection to isolate building structures from imagery. Processed spatial data at the pixel level to detect clear pathways amidst debris, optimizing for real-time evacuation.",
    chips: ["Python", "OpenCV", "NumPy", "Pathfinding"],
    category: "Computer Vision"
  },
  {
    title: "Inventory Management System",
    desc: "Developed a comprehensive tracking system with SKU-based lookups and automated low-stock email notifications. Managed data consistency through JDBC transactions and secure user authentication via Session Management[cite: 3, 4].",
    chips: ["Java", "JDBC", "MySQL", "Apache Tomcat", "JavaMail API"],
    category: "Full Stack"
  },
  {
    title: "Aircraft Engine RUL Prediction",
    desc: "Built a multi-dataset ML pipeline to simulate degradation in gas turbine engines using the C-MAPSS dataset. Evaluated patterns using SVM, Ridge Regression, and K-Means; validated results with r square and MSE metrics[cite: 3, 4].",
    chips: ["Python", "Scikit-Learn", "PCA"],
    category: "Machine Learning"
  },
  {
    title: "Health Chatbot",
    desc: "An AI-driven assistant built with Flask and Python using the Google Maps API to assist users in locating nearby medical facilities[cite: 3].",
    chips: ["Python", "Flask", "Google Maps API"],
    category: "AI / Web"
  },
  {
    title: "Course Scheduler",
    desc: "A web application designed with Java to automate academic planning and effectively manage potential course timing conflicts[cite: 3].",
    chips: ["Java", "OOP", "Algorithm Design"],
    category: "Web Application"
  },
  {
    title: "Whack-a-Mole",
    desc: "A custom Java-based game featuring dynamic graphics and integrated web-based score tracking[cite: 3].",
    chips: ["Java", "GUI", "Web Integration"],
    category: "Game Dev"
  }
];

export default function Projects() {
  return (
    <div className="section">
      <div className="projects-hero">
        <p className="section__label">04. Portfolio</p>
        <h1 className="section__title">Technical Projects</h1>
        <div className="glow-divider" style={{ margin: "1.5rem auto" }} />
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="card proj-card" key={p.title}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <span className="proj-card__number">0{i + 1}</span>
              <span className="chip chip--accent">{p.category}</span>
            </div>
            <h3 className="proj-card__title" style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{p.title}</h3>
            <p className="proj-card__desc" style={{ fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
              {p.desc}
            </p>
            <div className="proj-card__chips" style={{ marginTop: "auto" }}>
              {p.chips.map(c => <span key={c} className="chip">{c}</span>)}
            </div>
          </div>
        ))}
      </div>
      
      <footer className="footer" style={{textAlign: 'center', marginTop: '4rem', opacity: '0.6'}}>
        <p>Built by Gangam Siddanth Reddy · 2026</p>
      </footer>
    </div>
  );
}