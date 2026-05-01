import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-fade">
      {/* --- HERO SECTION --- */}
      <section className="hero">
        <div className="hero__content">
          <p className="coding-tag">const developer = {"{"}</p>
          <h1 className="hero__name">
            Gangam Siddanth<br />
            <span>Reddy</span>
          </h1>
          <p className="coding-tag">status: "Student @ Mahindra University",</p>
          <p className="coding-tag">location: "Hyderabad"</p>
          <p className="coding-tag">{"};"}</p>
          <div className="hero__actions" style={{ marginTop: "2rem" }}>
            <Link to="/projects" className="btn btn--primary">Terminal.run(projects) →</Link>
          </div>
        </div>
      </section>

      {/* --- BIO SECTION (UNCUT) --- */}
      <section className="section">
        <p className="section__label">// 01. README.md</p>
        <div className="card">
          <p style={{ color: "var(--accent-color)", marginBottom: "0.5rem" }}>/** @about */</p>
          <p style={{ lineHeight: "1.8", color: "var(--text-primary)" }}>
            A highly motivated Computer Science student at Mahindra University with expertise in Python, 
            Java, and Data Modeling. Demonstrated leadership and organizational skills as an 
            Organizing Committee (OC) member for the academic year 2025-26, serving as the Representative of 
            Logistic Affairs for both AEON (Technical Fest) and AETHER (Cultural Fest). 
            Proficient in system design and applying quantitative skills to address technological challenges. 
            Committed to leveraging technical knowledge, logistical experience, and economic insights 
            to develop innovative solutions that drive results.
          </p>
          
          <div className="about-grid" style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
            <div className="info-row" style={{ display: 'flex', gap: '10px' }}>
              <span className="coding-tag">degree:</span>
              <span className="info-row__value">B.Tech Computer Science</span>
            </div>
            <div className="info-row" style={{ display: 'flex', gap: '10px' }}>
              <span className="coding-tag">location:</span>
              <span className="info-row__value">Mahindra University,Hyderabad, India</span>
            </div>
          </div>
        </div>
      </section>

{/* --- SKILLS SECTION (PROFESSIONAL CATEGORIES) --- */}
      <section className="section">
        <p className="section__label">// 02. Technical Expertise</p>
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          {/* Languages */}
          <div className="card">
            <h3 style={{ color: "var(--accent-color)", fontSize: "1rem", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "1px" }}>
              <span style={{ color: "var(--text-secondary)" }}>{`{`}</span> Languages <span style={{ color: "var(--text-secondary)" }}>{`}`}</span>
            </h3>
            <div className="proj-card__chips">
              {["C", "C++", "Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"].map(skill => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="card">
            <h3 style={{ color: "var(--accent-color)", fontSize: "1rem", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "1px" }}>
              <span style={{ color: "var(--text-secondary)" }}>{`{`}</span> Frameworks & Libraries <span style={{ color: "var(--text-secondary)" }}>{`}`}</span>
            </h3>
            <div className="proj-card__chips">
              {["React", "Angular", "Flask", "OpenCV", "NumPy", "Matplotlib", "JDBC"].map(skill => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </div>

          {/* Tools & Cloud */}
          <div className="card">
            <h3 style={{ color: "var(--accent-color)", fontSize: "1rem", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "1px" }}>
              <span style={{ color: "var(--text-secondary)" }}>{`{`}</span> Tools & Cloud <span style={{ color: "var(--text-secondary)" }}>{`}`}</span>
            </h3>
            <div className="proj-card__chips">
              {["AWS", "Google Cloud", "Git/GitHub", "Unix Shell", "Webpack", "Apache Tomcat", "VS Code", "PyCharm", "IntelliJ IDEA", "Atom"].map(skill => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- EXPERIENCE SECTION (UNCUT) --- */}
      <section className="section">
        <p className="section__label">// 03. experience.log</p>
        <div className="exp-item card">
          <div className="exp-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span className="exp-role" style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>COMPUTER SCIENCE INTERN @ BSNL</span>
            <span className="coding-tag">[ JUN - JUL 2025 ]</span>
          </div>
          <p className="exp-company" style={{ opacity: 0.8, marginBottom: '1rem' }}>Telecommunications Infrastructure</p>
          <ul className="exp-bullets" style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.8rem' }}>
              <span style={{ color: 'var(--accent-color)' }}>{`>`}</span> Successfully completed a one-month internship focusing on network diagnostics.
            </li>
            <li style={{ marginBottom: '0.8rem' }}>
              <span style={{ color: 'var(--accent-color)' }}>{`>`}</span> Analyzed network traffic using Python-based packet sniffing tools.
            </li>
            <li>
              <span style={{ color: 'var(--accent-color)' }}>{`>`}</span> Configured routing infrastructure and monitored signal processing systems.
            </li>
          </ul>
        </div>
      </section>
      
      <footer className="footer" style={{ textAlign: 'center', padding: '4rem 2rem', opacity: '0.4', fontSize: '0.8rem' }}>
        <p>SYSTEM_RESOURCES_STABLE // GANGAM SIDDANTH REDDY // 2026</p>
      </footer>
    </div>
  );
}