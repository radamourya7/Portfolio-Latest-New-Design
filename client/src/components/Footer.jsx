const footerLinks = ['about', 'resume', 'education', 'skills', 'projects', 'certificates', 'research', 'contact'];

export default function Footer() {
    const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    return (
        <footer className="footer">
            <div className="footer-brand">&lt;RSM/&gt;</div>
            <p>Designed &amp; built by <strong>Rada Sai Mourya</strong> with ❤️ and lots of ☕</p>
            <p>© {new Date().getFullYear()} Rada Sai Mourya · All rights reserved.</p>
            <nav className="footer-nav">
                {footerLinks.map(id => (
                    <a key={id} onClick={() => scroll(id)} style={{ cursor: 'pointer' }}>
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                ))}
            </nav>
        </footer>
    );
}
