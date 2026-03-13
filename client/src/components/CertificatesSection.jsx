import { useState } from 'react';
import { FaGoogleDrive, FaAws, FaMicrosoft, FaMeta, FaBrain, FaNetworkWired } from 'react-icons/fa6';
import { FiAward, FiCalendar, FiExternalLink, FiX } from 'react-icons/fi';

const certs = [
    {
        id: 'gcp', LogoIcon: FaGoogleDrive, logoCls: 'gcp',
        title: 'Professional Machine Learning Engineer',
        issuer: 'Google Cloud', date: 'Jan 2025',
    },
    {
        id: 'aws', LogoIcon: FaAws, logoCls: 'aws',
        title: 'AWS Solutions Architect Associate',
        issuer: 'Amazon Web Services', date: 'Sep 2024',
    },
    {
        id: 'ms', LogoIcon: FaMicrosoft, logoCls: 'ms',
        title: 'Azure Data Scientist Associate (DP-100)',
        issuer: 'Microsoft', date: 'Mar 2024',
    },
    {
        id: 'meta', LogoIcon: FaMeta, logoCls: 'meta',
        title: 'Meta Front-End Developer Professional',
        issuer: 'Meta / Coursera', date: 'Nov 2023',
    },
    {
        id: 'dl', LogoIcon: FaBrain, logoCls: 'dl',
        title: 'Deep Learning Specialization (5 Courses)',
        issuer: 'DeepLearning.AI / Coursera', date: 'Aug 2023',
    },
    {
        id: 'cisco', LogoIcon: FaNetworkWired, logoCls: 'cisco',
        title: 'CCNA — Cisco Certified Network Associate',
        issuer: 'Cisco', date: 'May 2023',
    },
];

export default function CertificatesSection() {
    const [modal, setModal] = useState(null);
    return (
        <section id="certificates" className="section alt-bg">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">05 — Certificates</span>
                    <h2 className="section-title">Credentials &amp; <span className="gradient-text">Certifications</span></h2>
                    <p className="section-subtitle">Industry recognised qualifications and course completions</p>
                </div>
                <div className="cert-grid">
                    {certs.map((c, i) => {
                        const Icon = c.LogoIcon;
                        return (
                            <div
                                key={c.id}
                                className={`cert-card glass-card reveal d${(i % 4) + 1}`}
                                onClick={() => setModal(c)}
                                role="button" tabIndex={0}
                                onKeyDown={e => e.key === 'Enter' && setModal(c)}
                            >
                                <div className="cert-ribbon">
                                    <FiAward className="cert-ribbon-icon" />
                                </div>
                                <div className={`cert-logo ${c.logoCls}`}><Icon /></div>
                                <div className="cert-info">
                                    <h4>{c.title}</h4>
                                    <span className="cert-issuer">{c.issuer}</span>
                                    <span className="cert-date"><FiCalendar style={{ fontSize: '0.78rem' }} /> {c.date}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Modal */}
                <div
                    className={`modal-backdrop${modal ? ' open' : ''}`}
                    onClick={e => { if (e.target === e.currentTarget) setModal(null); }}
                >
                    {modal && (() => {
                        const Icon = modal.LogoIcon;
                        return (
                            <div className="modal-box glass-card" style={{ position: 'relative' }}>
                                <button className="modal-close-btn" onClick={() => setModal(null)}><FiX /></button>
                                <div className={`modal-icon ${modal.logoCls}`} style={{ marginBottom: 20 }}>
                                    <Icon style={{ fontSize: '2.5rem' }} />
                                </div>
                                <h3>{modal.title}</h3>
                                <p>{modal.issuer}</p>
                                <p className="modal-date"><FiCalendar /> {modal.date}</p>
                                <a href="#" className="btn btn-primary" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                                    <FiExternalLink /> Verify Certificate
                                </a>
                            </div>
                        );
                    })()}
                </div>
            </div>
        </section>
    );
}
