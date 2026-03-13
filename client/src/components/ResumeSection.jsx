import { FiBookOpen, FiAward } from 'react-icons/fi';

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
    { icon: '🥇', title: 'ACM-ICPC Regionalist', desc: 'Ranked 34th among 2,400+ teams at ICPC Asia Pacific Regionals 2024' },
    { icon: '🏆', title: 'Google HashCode', desc: 'Top 5% globally, ranked 1st in India among student competitors' },
    { icon: '⭐', title: "Dean's Merit List", desc: 'All 6 semesters — top 2% of the CSE batch at IIT Delhi' },
    { icon: '🐙', title: 'GitHub Arctic Vault', desc: '2 open-source projects archived in GitHub Arctic Code Vault 2024' },
    { icon: '🚀', title: 'Smart India Hackathon', desc: 'National winner — AI-powered crop disease detection system (2024)' },
    { icon: '📚', title: 'JEE Advanced AIR 342', desc: 'Secured All India Rank 342 out of 1.6 million candidates' },
];

export default function ResumeSection() {
    return (
        <section id="resume" className="section alt-bg">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">01 — Resume</span>
                    <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>
                    <p className="section-subtitle">A snapshot of my professional experience and academic background</p>
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
