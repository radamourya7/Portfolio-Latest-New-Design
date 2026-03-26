import { FiBookOpen, FiAward, FiDownload } from 'react-icons/fi';

const training = [
    {
        role: 'Full Stack Web Development',        // ← replace with your training name
        company: 'CipherSchools',    // ← replace with provider name
        date: 'Nov 2025 – Dec 2025',        // ← replace with actual dates
        points: [
            'Learned React.js, Node.js, Express.js, MongoDB, and more',
            'Built a full-stack web application using React.js, Node.js, Express.js, and MongoDB',
        ],
        tags: ['MongoDB', 'Node.js', 'Express.js', 'React.js'], // ← replace with relevant skills
    },
];

const achievements = [
    {
        icon: '💻',
        title: 'DSA & Coding Excellence',
        desc: 'Solved 400+ Problems on LeetCode, HackerRank (5-Star Python), and GFG, mastering DSA fundamentals.'
    },
    {
        icon: '📜',
        title: 'Patent Filed (AI)',
        desc: 'Filed patent for "Intelligent Wardrobe Management & Outfit Recommendation using AI" (App No: 202511048551).'
    },
];

export default function ResumeSection() {
    return (
        <section id="resume" className="section alt-bg">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">01 — Resume</span>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>
                            <p className="section-subtitle">A snapshot of my professional experience and academic background</p>
                        </div>
                        <a href="/resume.pdf" download="Rada_Sai_Mourya_Resume.pdf" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                            <FiDownload style={{ marginRight: '8px' }} /> Download CV
                        </a>
                    </div>
                </div>
                <div className="resume-layout">
                    {/* Training */}
                    <div className="reveal">
                        <h3 className="col-title"><FiBookOpen className="icon" /> Training</h3>
                        <div className="timeline">
                            {training.map((exp, i) => (
                                <div className="tl-item" key={i}>
                                    <div className="tl-dot" />
                                    <div className="tl-card glass-card">
                                        <div className="tl-header">
                                            <div>
                                                <h4>{exp.role}</h4>
                                                <span className="tl-company">{exp.company}</span>
                                            </div>
                                            <span className="tl-date">{exp.date}</span>
                                        </div>
                                        <ul className="tl-list">
                                            {exp.points.map((p, j) => <li key={j}>{p}</li>)}
                                        </ul>
                                        <div className="tl-tags">
                                            {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Achievements */}
                    <div className="reveal d2">
                        <h3 className="col-title"><FiAward className="icon" /> Achievements</h3>
                        <div className="ach-grid">
                            {achievements.map((a, i) => (
                                <div className="ach-card glass-card" key={i}>
                                    <div className="ach-icon">{a.icon}</div>
                                    <div>
                                        <h4>{a.title}</h4>
                                        <p>{a.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
