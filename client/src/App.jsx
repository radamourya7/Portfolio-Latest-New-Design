import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ResumeSection from './components/ResumeSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import ResearchSection from './components/ResearchSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

export default function App() {
    useEffect(() => {
        // Intersection Observer for .reveal elements
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible');
                        observer.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        const els = document.querySelectorAll('.reveal');
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main>
                <HeroSection />
                <ResumeSection />
                <EducationSection />
                <SkillsSection />
                <ProjectsSection />
                <CertificatesSection />
                <ResearchSection />
                <ContactSection />
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}
