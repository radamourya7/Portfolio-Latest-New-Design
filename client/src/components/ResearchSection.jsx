import { FiGithub, FiUsers, FiEye, FiDownload, FiFileText } from 'react-icons/fi';

const papers = [
    {
        index: '01',
        venue: 'Patent', venueCls: 'pv-patent',
        type: 'Patent',
        title: 'A Method for Intelligent Wardrobe Management and Outfit Recommendation using Artificial Intelligence',
        authors: ['Rada Sai Mourya', 'Dr. Ruby Singh'],
        abstract: 'This patent introduces an AI-powered wardrobe management system that analyzes a user’s clothing items, personal style preferences, weather conditions, and upcoming occasions to recommend the most suitable outfits. Using machine learning, it categorizes garments, predicts matching combinations, tracks usage patterns, and assists with planning outfits in advance, making wardrobe organization and daily dressing decisions more efficient, personalized, and convenient.',
        stats: [
            { icon: <FiFileText />, label: 'Patent' },
        ],
        links: [
            { label: 'PDF', icon: <FiFileText />, href: '#' },
            { label: 'Code', icon: <FiGithub />, href: '#' },
            { label: 'arXiv', icon: <span>↗</span>, href: '#' },
        ],
    },
];

export default function ResearchSection() {
    return (
        <section id="research" className="section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">06 — Research &amp; Publications</span>
                    <h2 className="section-title">Research <span className="gradient-text">Work</span></h2>
                    <p className="section-subtitle">Peer-reviewed papers, preprints, and scholarly contributions</p>
                </div>
                <div className="research-list">
                    {papers.map((p, i) => (
                        <div key={i} className={`paper-card glass-card reveal d${i + 1}`}>
                            <div className="paper-index">{p.index}</div>
                            <div className="paper-badges">
                                <span className={`paper-venue ${p.venueCls}`}>{p.venue}</span>
                                <span className="paper-type">{p.type}</span>
                            </div>
                            <h3 className="paper-card-title">{p.title}</h3>
                            <p className="paper-authors">
                                <FiUsers style={{ marginRight: 6 }} />
                                {p.authors.map((a, j) => (
                                    <span key={j} style={a === 'Alex Ryder' ? { fontWeight: 700, color: 'var(--text)' } : {}}>
                                        {a}{j < p.authors.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </p>
                            <p className="paper-abstract">{p.abstract}</p>
                            <div className="paper-stats">
                                {p.stats.map((s, j) => (
                                    <span key={j}>{s.icon} {s.label}</span>
                                ))}
                            </div>
                            <div className="paper-links">
                                {p.links.map(l => (
                                    <a key={l.label} href={l.href} className="proj-link">
                                        {l.icon} {l.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
