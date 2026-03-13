import { useEffect, useRef } from 'react';

const educations = [
    {
        icon: '🎓',
        logoClass: '',
        badge: 'Current',
        degree: 'B.Tech — Computer Science & Engineering',
        inst: 'Lovely Professional University',
        year: '2023 – 2027',
        cgpa: { label: 'CGPA', val: '7.74 / 10', pct: 77 },
        courses: ['Data Structures', 'Machine Learning', 'OS', 'Networks', 'DBMS', 'Computer Vision', 'NLP', 'Algorithms'],
    },
    {
        icon: '🏫',
        logoClass: 'acc',
        badge: null,
        degree: 'Class XII — Science & Mathematics',
        inst: 'Delhi Public School, R.K. Puram',
        year: '2020 – 2022',
        cgpa: { label: 'Score', val: '97.4%', pct: 97 },
        courses: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    },
    {
        icon: '📚',
        logoClass: 'sch',
        badge: null,
        degree: 'Class X — General Studies',
        inst: 'Delhi Public School, R.K. Puram',
        year: '2018 – 2020',
        cgpa: { label: 'Score', val: '98.6%', pct: 99 },
        courses: ['Science', 'Math', 'Social Studies', 'English', 'Hindi'],
    },
];

function EduCard({ edu, delay }) {
    const fillRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && fillRef.current) {
                fillRef.current.style.width = `${edu.cgpa.pct}%`;
                observer.disconnect();
            }
        }, { threshold: 0.3 });
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, [edu.cgpa.pct]);

    return (
        <div ref={cardRef} className={`edu-card glass-card reveal${delay ? ` d${delay}` : ''}`}>
            <div className={`edu-logo${edu.logoClass ? ' ' + edu.logoClass : ''}`}>{edu.icon}</div>
            {edu.badge && <div className="edu-badge">{edu.badge}</div>}
            <h3>{edu.degree}</h3>
            <span className="edu-inst">{edu.inst}</span>
            <span className="edu-year" style={{ display: 'block', marginTop: 4 }}>{edu.year}</span>
            <div className="cgpa-row">
                <span className="cgpa-label">{edu.cgpa.label}</span>
                <div className="cgpa-track">
                    <div ref={fillRef} className="cgpa-fill" style={{ width: 0 }} />
                </div>
                <span className="cgpa-val">{edu.cgpa.val}</span>
            </div>
            <div className="course-chips">
                {edu.courses.map(c => <span key={c} className="course-chip">{c}</span>)}
            </div>
        </div>
    );
}

export default function EducationSection() {
    return (
        <section id="education" className="section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">02 — Education</span>
                    <h2 className="section-title">Academic <span className="gradient-text">Background</span></h2>
                    <p className="section-subtitle">Formal education and relevant coursework</p>
                </div>
                <div className="edu-grid">
                    {educations.map((edu, i) => <EduCard key={i} edu={edu} delay={i} />)}
                </div>
            </div>
        </section>
    );
}
