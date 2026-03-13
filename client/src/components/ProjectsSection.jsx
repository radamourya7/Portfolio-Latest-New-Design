import { useState } from 'react';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';

const ALL_PROJECTS = [
    {
        id: 0, category: 'ai',
        icon: '🧠', bannerCls: 'b-ai',
        cat: 'MERN Stack', catCls: 'cat-ai',
        featured: true,
        title: 'PulseNet – Real-Time Emergency Coordination Platform',
        desc: 'Real-time emergency coordination platform with live location tracking, Socket.IO alerts, admin command center, and Razorpay integration.',
        tags: ['MongoDB', 'Node.js', 'Express.js', 'React.js', 'Socket.io', 'WebSockets'],
        links: [{ label: 'Code', icon: <FiGithub />, href: '#' }, { label: 'Demo', icon: <FiExternalLink />, href: '#', primary: true }],
    },
    {
        id: 1, category: 'web',
        icon: '⛓️', bannerCls: 'b-web',
        cat: 'Web', catCls: 'cat-web',
        title: 'AI Virtual Concert Guide',
        desc: 'AI Virtual Concert Guide is a web application that uses AI to provide personalized recommendations for concerts based on user preferences and location. The application uses a combination of AI and machine learning to provide personalized recommendations for concerts based on user preferences and location.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React.js', 'Socket.io', 'WebSockets'],
        links: [{ label: 'Code', icon: <FiGithub />, href: '#' }, { label: 'Demo', icon: <FiExternalLink />, href: '#', primary: true }],
    },
    {
        id: 2, category: 'ai',
        icon: '🎙️', bannerCls: 'b-ai2',
        cat: 'AI/ML', catCls: 'cat-ai',
        title: 'Carbon Footprint Tracker',
        desc: 'Carbon Footprint Tracker is a web application that uses AI to provide personalized recommendations for concerts based on user preferences and location. The application uses a combination of AI and machine learning to provide personalized recommendations for concerts based on user preferences and location.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React.js', 'Socket.io', 'WebSockets'],
        links: [{ label: 'Code', icon: <FiGithub />, href: '#' }, { label: 'Demo', icon: <FiExternalLink />, href: '#', primary: true }],
    },
    {
        id: 3, category: 'systems',
        icon: '💻', bannerCls: 'b-sys',
        cat: 'Systems', catCls: 'cat-sys',
        title: 'MiniOS — Custom Unix-like Kernel',
        desc: 'Minimal OS kernel in C & x86 Assembly. Implements virtual memory, process scheduling, file system, and interactive shell.',
        tags: ['C', 'x86 ASM', 'QEMU'],
        links: [{ label: 'Code', icon: <FiGithub />, href: '#' }],
    },
    {
        id: 4, category: 'research',
        icon: '🧬', bannerCls: 'b-res',
        cat: 'Research', catCls: 'cat-res',
        featured: true,
        title: 'ProteinFold-Lite — Efficient Protein Prediction',
        desc: 'Lightweight AlphaFold variant using distillation + pruning achieving 89% accuracy at 6× speed. Published at NeurIPS\'25 workshop.',
        tags: ['JAX', 'TPU', 'BioPython'],
        links: [{ label: 'Paper', icon: <FiFileText />, href: '#' }, { label: 'Code', icon: <FiGithub />, href: '#' }],
    },
    {
        id: 5, category: 'web',
        icon: '🚨', bannerCls: 'b-web2',
        cat: 'Web', catCls: 'cat-web',
        title: 'PulseNet — Real-time Emergency Coordinator',
        desc: 'Emergency coordination platform with live location tracking, Socket.IO alerts, admin command center, and Razorpay integration.',
        tags: ['MERN', 'Socket.IO', 'Razorpay', 'Leaflet.js'],
        links: [{ label: 'Code', icon: <FiGithub />, href: '#' }, { label: 'Live', icon: <FiExternalLink />, href: '#', primary: true }],
    },
];

const FILTERS = ['All', 'AI/ML', 'Web', 'Systems', 'Research'];
const FILTER_MAP = { 'All': 'all', 'AI/ML': 'ai', 'Web': 'web', 'Systems': 'systems', 'Research': 'research' };

export default function ProjectsSection() {
    const [active, setActive] = useState('All');
    const filtered = active === 'All'
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter(p => p.category === FILTER_MAP[active]);

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">04 — Projects</span>
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">Things I've built with passion and curiosity</p>
                </div>
                <div className="filter-row reveal">
                    {FILTERS.map(f => (
                        <button key={f} className={`filter-btn${active === f ? ' active' : ''}`} onClick={() => setActive(f)}>{f}</button>
                    ))}
                </div>
                <div className="projects-grid">
                    {filtered.map((p, i) => (
                        <div className={`project-card glass-card reveal d${Math.min(i % 3 + 1, 4)}`} key={p.id}>
                            <div className={`project-banner ${p.bannerCls}`}>
                                <span style={{ fontSize: '3.5rem' }}>{p.icon}</span>
                            </div>
                            <div className="project-body">
                                <div className="proj-meta">
                                    <span className={`proj-cat ${p.catCls}`}>{p.cat}</span>
                                    {p.featured && <span className="proj-featured">⭐ Featured</span>}
                                </div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="proj-tags">
                                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                                <div className="proj-links">
                                    {p.links.map(l => (
                                        <a key={l.label} href={l.href} className={`proj-link${l.primary ? ' primary' : ''}`}>
                                            {l.icon} {l.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
