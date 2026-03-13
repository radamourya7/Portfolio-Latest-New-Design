import { useState, useEffect } from 'react';

const links = ['about', 'resume', 'education', 'skills', 'projects', 'certificates', 'research', 'contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('about');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            // Active section tracking
            links.forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                const rect = el.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) setActive(id);
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNav = (id) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <a className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    &lt;SM/&gt;
                </a>
                <ul className="nav-links">
                    {links.map(id => (
                        <li key={id}>
                            <a
                                className={`nav-link${active === id ? ' active' : ''}`}
                                onClick={() => handleNav(id)}
                                style={{ cursor: 'pointer' }}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className="hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
                    <span /><span /><span />
                </button>
            </nav>

            {/* Mobile menu */}
            <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
                {links.map(id => (
                    <a key={id} onClick={() => handleNav(id)} style={{ cursor: 'pointer' }}>
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                ))}
            </div>
        </>
    );
}
