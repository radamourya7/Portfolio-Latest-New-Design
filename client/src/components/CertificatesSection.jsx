import { useState } from 'react';
import { FaPython, FaCode, FaLaptopCode, FaBuildingColumns as FaUniversity } from 'react-icons/fa6';
import { FiAward, FiCalendar, FiExternalLink, FiX } from 'react-icons/fi';

const certs = [
    {
        id: 'nptel', LogoIcon: FaUniversity, logoCls: 'nptel',
        title: 'Privacy and Security in Online Social Media',
        issuer: 'NPTEL — IIT Hyderabad', date: 'Apr 2025',
    },
    {
        id: 'csepath', LogoIcon: FaPython, logoCls: 'csepath',
        title: 'Unrevealing Basic Python towards AI/ML',
        issuer: 'CSEPathshala', date: 'Apr 2024',
    },
    {
        id: 'cipher', LogoIcon: FaCode, logoCls: 'cipher',
        title: 'Data Structures and Algorithms using C++',
        issuer: 'CipherSchools', date: 'Mar 2024',
    },
    {
        id: 'fcc', LogoIcon: FaLaptopCode, logoCls: 'fcc',
        title: 'Responsive Web Design',
        issuer: 'freeCodeCamp', date: 'Nov 2023',
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
