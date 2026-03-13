import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

export default function BackToTop() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const fn = () => setShow(window.scrollY > 500);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);
    return (
        <button
            className={`back-top${show ? ' show' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
        >
            <FiChevronUp />
        </button>
    );
}
