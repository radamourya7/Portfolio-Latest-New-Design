import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiCode, FiArrowRight, FiDownload } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const roles = [
    'Full-Stack Developer', 2000,
    'FrontEnd Developer', 2000,
    'Open Source Contributor', 2000,
    'BackEnd Developer', 2000,
    'Competitive Programmer', 2000,
];

const stats = [
    { num: 10, suffix: '+', label: 'Projects' },
    { num: 6, suffix: '+', label: 'Certifications' },
    { num: 1, label: 'Patent ' },
    { num: 7.74, suffix: '', label: 'CGPA' },
];

// Simple counter hook
function useCounter(target, decimals = 0, visible) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!visible) return;
        let start = 0;
        const duration = 1500;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setVal(target); clearInterval(timer); }
            else setVal(parseFloat(start.toFixed(decimals)));
        }, 16);
        return () => clearInterval(timer);
    }, [visible, target, decimals]);
    return val;
}

function StatItem({ stat }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => { setTimeout(() => setVisible(true), 800); }, []);
    const val = useCounter(stat.num, stat.suffix === '' && String(stat.num).includes('.') ? 1 : 0, visible);
    return (
        <div className="stat-item">
            <span className="stat-num">{val}{stat.suffix}</span>
            <span className="stat-label">{stat.label}</span>
        </div>
    );
}

export default function HeroSection() {
    return (
        <section id="about" className="section hero-section">
            <div className="hero-bg" />
            <div className="hero-grid" />
            <div className="hero-inner container">
                {/* Left */}
                <div className="reveal">
                    <div className="hero-badge">
                        <span className="dot" />
                        Open to Opportunities
                    </div>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Rada Sai Mourya</span><br />
                        <TypeAnimation
                            sequence={roles}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{ color: 'var(--secondary)' }}
                        />
                    </h1>
                    <p className="hero-sub">
                        A passionate Computer Science &amp; Engineering student at LPU University, building intelligent systems,
                        scalable web apps, and real-world AI solutions. I turn coffee ☕ into code and ideas into impact.
                    </p>
                    <div className="hero-stats">
                        {stats.map(s => <StatItem key={s.label} stat={s} />)}
                    </div>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                            View My Work <FiArrowRight />
                        </a>
                        <a href="#contact" className="btn btn-ghost" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                            Let's Talk
                        </a>
                        <a href="#" className="btn btn-outline">
                            <FiDownload /> Resume
                        </a>
                    </div>
                    <div className="hero-socials">
                        {[
                            { icon: <FiGithub />, label: 'GitHub', href: '#' },
                            { icon: <FiLinkedin />, label: 'LinkedIn', href: '#' },
                            { icon: <FiTwitter />, label: 'Twitter', href: '#' },
                            { icon: <FiCode />, label: 'LeetCode', href: '#' },
                            { icon: <FiMail />, label: 'Email', href: 'mailto:alex.ryder@iitd.ac.in' },
                        ].map(s => (
                            <a key={s.label} href={s.href} className="social-icon" aria-label={s.label}>{s.icon}</a>
                        ))}
                    </div>
                </div>
                {/* Right */}
                <div className="hero-right reveal d2">
                    <div className="avatar-wrap">
                        <div className="avatar-ring" />
                        <div className="avatar-circle">
                            <span>🎓</span>
                        </div>
                        <div className="orbit-item orbit-1">🐍</div>
                        <div className="orbit-item orbit-2">🧠</div>
                        <div className="orbit-item orbit-3">⚛️</div>
                    </div>
                    <div className="code-snippet glass-card">
                        <div className="code-dots"><span /><span /><span /></div>
                        <pre style={{ margin: 0, fontSize: '0.75rem', lineHeight: 1.8 }}>
                            <code>
                                <span className="c-purple">class</span> <span className="c-yellow">Student</span>:{'\n'}
                                {'  '}<span className="c-blue">name</span>{' = '}<span className="c-green">"Rada Sai Mourya"</span>{'\n'}
                                {'  '}<span className="c-blue">uni</span>{' = '}<span className="c-green">"LPU University"</span>{'\n'}
                                {'  '}<span className="c-blue">passion</span>{' = ['}<span className="c-green">"AI"</span>{', '}<span className="c-green">"Web"</span>{', '}<span className="c-green">"Research"</span>{']'}{'\n'}
                                {'\n'}
                                {'  '}<span className="c-purple">def</span> <span className="c-yellow">dream</span>(<span className="c-blue">self</span>):{'\n'}
                                {'    '}<span className="c-purple">return</span> <span className="c-green">"Build things that matter 🚀"</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.75rem', animation: 'float 2s ease-in-out infinite' }}>
                <span>Scroll to explore</span>
                <span style={{ fontSize: '1.2rem' }}>↓</span>
            </div>
        </section>
    );
}
