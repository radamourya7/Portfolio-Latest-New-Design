import { useState, useEffect } from 'react';

export default function ScrollProgress() {
    const [pct, setPct] = useState(0);
    useEffect(() => {
        const fn = () => {
            const el = document.documentElement;
            const scrolled = el.scrollTop;
            const total = el.scrollHeight - el.clientHeight;
            setPct(total > 0 ? (scrolled / total) * 100 : 0);
        };
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);
    return <div className="scroll-progress" style={{ width: `${pct}%` }} />;
}
