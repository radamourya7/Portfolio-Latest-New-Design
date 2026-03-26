import { useState } from 'react';
import { FiGithub, FiExternalLink, FiFileText } from 'react-icons/fi';

// Project Images
import pulsenetImg from '../assets/projects/pulsenet.png';
import concertImg from '../assets/projects/concert-guide.png';
import carbonImg from '../assets/projects/carbon-tracker.png';
import shoreSipImg from '../assets/projects/shore-sip.png';
import proteinImg from '../assets/projects/proteinfold.png';

const ALL_PROJECTS = [
    {
        id: 0, category: 'ai',
        icon: '🧠', bannerCls: 'b-ai',
        image: pulsenetImg,
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
        image: concertImg,
        cat: 'Web', catCls: 'cat-web',
        title: 'AI Virtual Concert Guide',
        desc: 'AI Virtual Concert Guide is a web application that uses AI to provide personalized recommendations for concerts based on user preferences and location.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React.js', 'Socket.io', 'WebSockets'],
        links: [{ label: 'Code', icon: <FiGithub />, href: '#' }, { label: 'Demo', icon: <FiExternalLink />, href: '#', primary: true }],
    },
    {
        id: 2, category: 'ai',
        icon: '🎙️', bannerCls: 'b-ai2',
        image: carbonImg,
        cat: 'AI/ML', catCls: 'cat-ai',
        title: 'Carbon Footprint Tracker',
        desc: 'A comprehensive carbon footprint tracker using AI to analyze consumption patterns and provide personalized recommendations for sustainability.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React.js', 'Socket.io', 'WebSockets'],
        links: [{ label: 'Code', icon: <FiGithub />, href: '#' }, { label: 'Demo', icon: <FiExternalLink />, href: '#', primary: true }],
    },
    {
        id: 3, category: 'web',
        icon: '☕', bannerCls: 'b-web',
        image: shoreSipImg,
        cat: 'Web', catCls: 'cat-web',
        title: 'Shore & Sip — Premium Coastal Cafe Site',
        desc: 'A sophisticated, high-end cafe website featuring a minimalist glassmorphism UI, interactive menu, and real-time table booking system.',
        tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Node.js'],
        links: [{ label: 'Code', icon: <FiGithub />, href: '#' }, { label: 'Demo', icon: <FiExternalLink />, href: '#', primary: true }],
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
                                {p.image ? (
                                    <img src={p.image} alt={p.title} className="project-banner-img" />
                                ) : (
                                    <span style={{ fontSize: '3.5rem' }}>{p.icon}</span>
                                )}
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
