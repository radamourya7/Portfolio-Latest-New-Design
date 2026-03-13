import { useState, useEffect, useRef } from 'react';
import {
    FaPython, FaJava, FaJs, FaReact, FaNodeJs,
    FaDocker, FaGitAlt, FaAws, FaLinux, FaHtml5, FaCss3Alt,
} from 'react-icons/fa';
import {
    SiCplusplus, SiGo, SiRust, SiTypescript,
    SiTensorflow, SiPytorch, SiKubernetes,
    SiMongodb, SiFastapi, SiMysql, SiPostgresql,
    SiRedis, SiExpress, SiNextdotjs, SiTailwindcss,
    SiFirebase, SiDjango,
} from 'react-icons/si';

const TABS = ['Languages', 'Frontend', 'Backend', 'Databases', 'DevOps & Cloud', 'Domains'];

const languages = [
    { icon: <FaPython />, cls: 'sk-py', name: 'Python', pct: 95, level: 'Expert' },
    { icon: <SiCplusplus />, cls: 'sk-cpp', name: 'C', pct: 90, level: 'Expert' },
    { icon: <FaJs />, cls: 'sk-js', name: 'JavaScript', pct: 88, level: 'Advanced' },
    { icon: <FaJava />, cls: 'sk-java', name: 'Java', pct: 82, level: 'Advanced' },
    { icon: <SiTypescript />, cls: 'sk-ts', name: 'TypeScript', pct: 80, level: 'Advanced' },
    { icon: <SiGo />, cls: 'sk-go', name: 'Go', pct: 70, level: 'Intermediate' },
    { icon: <SiRust />, cls: 'sk-rs', name: 'Rust', pct: 60, level: 'Learning' },
];

const frontend = [
    { icon: <FaHtml5 />, cls: 'sk-html', name: 'HTML5', pct: 95, level: 'Expert' },
    { icon: <FaCss3Alt />, cls: 'sk-css', name: 'CSS3', pct: 90, level: 'Expert' },
    { icon: <FaReact />, cls: 'sk-react', name: 'React', pct: 90, level: 'Expert' },
    { icon: <SiNextdotjs />, cls: 'sk-next', name: 'Next.js', pct: 78, level: 'Intermediate' },
    { icon: <SiTailwindcss />, cls: 'sk-tw', name: 'Tailwind CSS', pct: 88, level: 'Advanced' },
    { icon: <SiTypescript />, cls: 'sk-ts', name: 'TypeScript', pct: 80, level: 'Advanced' },
];

const backend = [
    { icon: <FaNodeJs />, cls: 'sk-node', name: 'Node.js', pct: 85, level: 'Advanced' },
    { icon: <SiExpress />, cls: 'sk-express', name: 'Express.js', pct: 85, level: 'Advanced' },
    { icon: <SiFastapi />, cls: 'sk-tf', name: 'FastAPI', pct: 82, level: 'Advanced' },
    { icon: <SiDjango />, cls: 'sk-django', name: 'Django', pct: 74, level: 'Intermediate' },
    { icon: <SiTensorflow />, cls: 'sk-tf2', name: 'TensorFlow', pct: 88, level: 'Advanced' },
    { icon: <SiPytorch />, cls: 'sk-torch', name: 'PyTorch', pct: 85, level: 'Advanced' },
];

const databases = [
    { icon: <SiMongodb />, cls: 'sk-mongo', name: 'MongoDB', pct: 83, level: 'Advanced' },
    { icon: <SiMysql />, cls: 'sk-mysql', name: 'MySQL', pct: 82, level: 'Advanced' },
    { icon: <SiPostgresql />, cls: 'sk-psql', name: 'PostgreSQL', pct: 78, level: 'Intermediate' },
    { icon: <SiRedis />, cls: 'sk-redis', name: 'Redis', pct: 70, level: 'Intermediate' },
    { icon: <SiFirebase />, cls: 'sk-fb', name: 'Firebase', pct: 75, level: 'Intermediate' },
];

const devops = [
    { icon: <FaDocker />, cls: 'sk-docker', name: 'Docker', pct: 85, level: 'Advanced' },
    { icon: <FaGitAlt />, cls: 'sk-git', name: 'Git', pct: 92, level: 'Expert' },
    { icon: <FaAws />, cls: 'sk-aws', name: 'AWS', pct: 75, level: 'Intermediate' },
    { icon: <SiKubernetes />, cls: 'sk-k8s', name: 'Kubernetes', pct: 65, level: 'Intermediate' },
    { icon: <FaLinux />, cls: 'sk-linux', name: 'Linux / Bash', pct: 87, level: 'Advanced' },
];

const domains = [
    { icon: '🧠', name: 'Machine Learning', size: 'lg' },
    { icon: '🌐', name: 'Web Development', size: 'lg' },
    { icon: '👁️', name: 'Computer Vision', size: 'md' },
    { icon: '🗣️', name: 'Natural Language Processing', size: 'md' },
    { icon: '🔒', name: 'Cybersecurity', size: 'md' },
    { icon: '📊', name: 'Data Science', size: 'md' },
    { icon: '🤖', name: 'Robotics & Automation', size: 'sm' },
    { icon: '⛓️', name: 'Blockchain', size: 'sm' },
    { icon: '🏗️', name: 'System Design', size: 'sm' },
    { icon: '📟', name: 'Embedded Systems', size: 'sm' },
];

const TAB_DATA = {
    Languages: languages,
    Frontend: frontend,
    Backend: backend,
    Databases: databases,
    'DevOps & Cloud': devops,
};

/* Animated progress bar */
function SkillBar({ pct, visible }) {
    const ref = useRef(null);
    useEffect(() => {
        if (visible && ref.current) {
            const t = setTimeout(() => { ref.current.style.width = `${pct}%`; }, 120);
            return () => clearTimeout(t);
        }
    }, [visible, pct]);
    return (
        <div className="skill-bar-wrap">
            <div ref={ref} className="skill-bar-fill" style={{ width: 0 }} />
        </div>
    );
}

function SkillCard({ s, visible }) {
    return (
        <div className="skill-card glass-card">
            <div className={`skill-icon-wrap ${s.cls}`}>{s.icon}</div>
            <span className="skill-name">{s.name}</span>
            <SkillBar pct={s.pct} visible={visible} />
            <span className="skill-level">{s.level}</span>
        </div>
    );
}

export default function SkillsSection() {
    const [tab, setTab] = useState('Languages');
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    /* Trigger bar animations when section scrolls into view */
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    /* Reset bars when tab changes so they re-animate */
    const handleTab = (t) => {
        setVisible(false);
        setTab(t);
        setTimeout(() => setVisible(true), 80);
    };

    const data = TAB_DATA[tab]; // undefined for 'Domains' → shows bubbles

    return (
        <section id="skills" className="section alt-bg" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">03 — Skills</span>
                    <h2 className="section-title">Technical <span className="gradient-text">Arsenal</span></h2>
                    <p className="section-subtitle">Technologies and tools I use regularly</p>
                </div>

                {/* Tab row */}
                <div className="skill-tabs reveal">
                    {TABS.map(t => (
                        <button
                            key={t}
                            className={`skill-tab${tab === t ? ' active' : ''}`}
                            onClick={() => handleTab(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Panel */}
                {data ? (
                    <div className="skills-grid">
                        {data.map((s, i) => <SkillCard key={`${tab}-${i}`} s={s} visible={visible} />)}
                    </div>
                ) : (
                    <div className="domain-wrap">
                        {domains.map((d, i) => (
                            <div key={i} className={`domain-bubble ${d.size} reveal`}>
                                <span style={{ fontSize: d.size === 'lg' ? '1.4rem' : '1.1rem' }}>{d.icon}</span>
                                {d.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
