import { useState } from 'react';
import axios from 'axios';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiTwitter, FiCode, FiSend, FiUser, FiTag, FiMessageSquare } from 'react-icons/fi';

const contactDetails = [
    { Icon: FiMail, label: 'Email', value: 'radamourya7@gmail.com', href: 'mailto:radamourya7@gmail.com' },
    { Icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/rada-sai-mourya', href: '#' },
    { Icon: FiGithub, label: 'GitHub', value: 'github.com/radamourya7', href: '#' },
    { Icon: FiMapPin, label: 'Location', value: 'Hyderabad, India 🇮🇳', href: null },
];

const socials = [
    { Icon: FiGithub, label: 'GitHub', href: '#' },
    { Icon: FiLinkedin, label: 'LinkedIn', href: '#' },
    { Icon: FiTwitter, label: 'Twitter', href: '#' },
    { Icon: FiCode, label: 'LeetCode', href: '#' },
];

const INIT = { name: '', email: '', subject: '', message: '' };

export default function ContactSection() {
    const [form, setForm] = useState(INIT);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [serverError, setServerError] = useState('');

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Please enter your name.';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email.';
        if (!form.subject.trim()) e.subject = 'Please enter a subject.';
        if (!form.message.trim()) e.message = 'Please enter a message.';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const submit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true); setServerError('');
        try {
            await axios.post('/api/contact', form);
            setSuccess(true);
            setForm(INIT);
        } catch (err) {
            setServerError(err.response?.data?.error || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="section alt-bg">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">07 — Contact</span>
                    <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
                    <p className="section-subtitle">Have an opportunity, collaboration idea, or just want to chat about tech?</p>
                </div>
                <div className="contact-layout">
                    {/* Info */}
                    <div className="reveal">
                        <p className="contact-intro">
                            I'm always open to exciting opportunities, research collaborations, or conversations about AI and technology.
                            Drop me a message and I'll get back within 24 hours!
                        </p>
                        <div className="contact-items">
                            {contactDetails.map(({ Icon, label, value, href }) => (
                                <div className="contact-item glass-card" key={label}>
                                    <div className="contact-icon"><Icon /></div>
                                    <div>
                                        <span className="ci-label">{label}</span>
                                        {href
                                            ? <a href={href} className="ci-value">{value}</a>
                                            : <span className="ci-value">{value}</span>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="contact-socials">
                            {socials.map(({ Icon, label, href }) => (
                                <a key={label} href={href} className="social-icon" aria-label={label}><Icon /></a>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="reveal d2">
                        <form className="contact-form glass-card" onSubmit={submit} noValidate>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <div className="input-wrap">
                                    <FiUser className="input-icon" />
                                    <input id="name" name="name" type="text" className={`form-input${errors.name ? ' error' : ''}`}
                                        placeholder="John Doe" value={form.name} onChange={handle} />
                                </div>
                                {errors.name && <span className="field-error show">{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <div className="input-wrap">
                                    <FiMail className="input-icon" />
                                    <input id="email" name="email" type="email" className={`form-input${errors.email ? ' error' : ''}`}
                                        placeholder="john@example.com" value={form.email} onChange={handle} />
                                </div>
                                {errors.email && <span className="field-error show">{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <div className="input-wrap">
                                    <FiTag className="input-icon" />
                                    <input id="subject" name="subject" type="text" className={`form-input${errors.subject ? ' error' : ''}`}
                                        placeholder="Internship Opportunity" value={form.subject} onChange={handle} />
                                </div>
                                {errors.subject && <span className="field-error show">{errors.subject}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <div className="input-wrap area">
                                    <FiMessageSquare className="input-icon" />
                                    <textarea id="message" name="message" rows={5} className={`form-input${errors.message ? ' error' : ''}`}
                                        placeholder="I'd love to collaborate on..." value={form.message} onChange={handle} />
                                </div>
                                {errors.message && <span className="field-error show">{errors.message}</span>}
                            </div>
                            {serverError && (
                                <div style={{ color: 'var(--accent)', fontSize: '0.82rem', marginBottom: 12 }}>{serverError}</div>
                            )}
                            <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                                {loading ? 'Sending…' : <><FiSend /> Send Message</>}
                            </button>
                            {success && (
                                <div className="form-success show">
                                    ✅ Message sent! I'll reply within 24 hours.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
