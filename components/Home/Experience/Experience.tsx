import React, { useState, useEffect, useRef } from 'react'
import './experience.css'
import { FaGraduationCap, FaCertificate, FaLightbulb, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const GooglyEyes = () => {
    return (
        <motion.div
            initial={{ x: 100, y: -100, rotate: 45, opacity: 0 }}
            animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
            exit={{ x: 100, y: -100, rotate: 45, opacity: 0 }}
            className="googly-eyes-container"
        >
            <div className="eye">
                <motion.div
                    animate={{ x: [-6, -4, -7, -6], y: [6, 8, 5, 6] }}
                    transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
                    className="pupil"
                />
            </div>
            <div className="eye">
                <motion.div
                    animate={{ x: [-6, -7, -5, -6], y: [6, 5, 7, 6] }}
                    transition={{ repeat: Infinity, duration: 0.6, repeatType: "reverse" }}
                    className="pupil"
                />
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const [isFinishing, setIsFinishing] = useState(false);
    const autoRotateRef = useRef<NodeJS.Timeout | null>(null);
    const finishTimerRef = useRef<NodeJS.Timeout | null>(null);

    const education = [
        {
            date: "2024",
            title: "B.S. in Computer Science",
            spec: "With a Specialization in Artificial Intelligence",
            org: "University of California, Irvine"
        },
    ];

    const certificates = [
        {
            date: "2025",
            title: "Agentic AI",
            org: "DeepLearning.AI",
            href: "https://learn.deeplearning.ai/certificates/d768d39c-5f10-4657-b4e5-6681d8bad793?usp=sharing"
        },
        {
            date: "2025",
            title: "Retrieval Augmented Generation",
            org: "Coursera / DeepLearning.AI",
            href: "https://www.coursera.org/account/accomplishments/records/LWPGENC08XLN"
        },
    ];

    const softSkills = [
        {
            title: "Strategic Problem Solving",
            description: "Analyzing complex challenges and implementing efficient, scalable solutions that align with long-term goals. I turn obstacles into opportunities for innovation.",
            icon: "🧠"
        },
        {
            title: "Collaborative Leadership",
            description: "Fostering high-performance environments through clear communication and mutual support. I believe the best results come from empowered, cohesive teams.",
            icon: "🤝"
        },
        {
            title: "Adaptive Learning",
            description: "Rapidly mastering new technologies and methodologies to stay ahead in an ever-evolving landscape. Continuous growth is part of my DNA.",
            icon: "🚀"
        },
        {
            title: "Resilient Ownership",
            description: "Taking full responsibility for project outcomes with a solution-oriented mindset. I stay focused and productive even under high pressure.",
            icon: "⚓"
        },
        {
            title: "Human-Centric Design",
            description: "Creating experiences that prioritize user needs and emotional resonance. I build technology for humans, ensuring every interaction feels natural and valuable.",
            icon: "✨"
        }
    ];

    const handleManualInteraction = () => {
        setIsInteracting(true);
        if (autoRotateRef.current) clearTimeout(autoRotateRef.current);
        if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
        setIsFinishing(false);
    };

    const nextSkill = (manual = false) => {
        if (manual) handleManualInteraction();
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % softSkills.length);
    };

    const prevSkill = (manual = false) => {
        if (manual) handleManualInteraction();
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + softSkills.length) % softSkills.length);
    };

    useEffect(() => {
        setIsFinishing(false);
        const interval = isInteracting ? 8000 : 4000;

        finishTimerRef.current = setTimeout(() => {
            setIsFinishing(true);
        }, interval - 2000);

        autoRotateRef.current = setTimeout(() => {
            nextSkill(false);
            setIsInteracting(false);
        }, interval);

        return () => {
            if (autoRotateRef.current) clearTimeout(autoRotateRef.current);
            if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
        };
    }, [currentIndex, isInteracting]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <h2 className="experience-title" data-aos="fade-up">Experience & Foundation</h2>

                <div className="panels-wrapper">
                    {/* Left Panel: Soft Skills */}
                    <div className="panel left-panel" data-aos="fade-right">
                        <h3 className="panel-title">
                            <FaLightbulb /> Key Soft Skills
                        </h3>

                        <div className="soft-skills-carousel">
                            <AnimatePresence>
                                {isInteracting && <GooglyEyes />}
                            </AnimatePresence>

                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                className="carousel-nav prev"
                                onClick={() => prevSkill(true)}
                            >
                                <FaChevronLeft />
                            </motion.button>

                            <div className="carousel-content">
                                <AnimatePresence initial={false} custom={direction} mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                                        className="soft-skill-panel-card cursor-pointer"
                                        onClick={handleManualInteraction}
                                    >
                                        <div className="skill-icon-hero">{softSkills[currentIndex].icon}</div>
                                        <h4 className="skill-title-hero">{softSkills[currentIndex].title}</h4>
                                        <p className="skill-desc-hero">{softSkills[currentIndex].description}</p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                className={`carousel-nav next ${isFinishing ? 'water-active' : ''}`}
                                onClick={() => nextSkill(true)}
                            >
                                <FaChevronRight />
                            </motion.button>

                            <div className="carousel-dots">
                                {softSkills.map((_, index) => (
                                    <motion.div
                                        key={index}
                                        whileTap={{ scale: 1.5 }}
                                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                        onClick={() => {
                                            setIsInteracting(true);
                                            if (autoRotateRef.current) clearTimeout(autoRotateRef.current);
                                            setDirection(index > currentIndex ? 1 : -1);
                                            setCurrentIndex(index);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="panel-quote-container mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                            <p className="text-gray-400 italic text-xs leading-relaxed text-center">
                                &quot;Technical excellence is amplified by strong interpersonal skills.&quot;
                            </p>
                        </div>
                    </div>

                    {/* Right Panel: Education & Certificates */}
                    <div className="panel right-panel" data-aos="fade-left">
                        <h3 className="panel-title">
                            <FaGraduationCap /> Education & Certificates
                        </h3>

                        <div className="timeline">
                            <h4 className="flex items-center gap-2 text-[#00f2fe] font-bold mb-2" data-aos="fade-down">
                                <FaGraduationCap className="text-sm" /> Academics
                            </h4>
                            {education.map((item, index) => (
                                <div key={`edu-${index}`} className="timeline-item" data-aos="fade-down" data-aos-delay={index * 50}>
                                    <div className="item-date">{item.date}</div>
                                    <div className="item-title">{item.title}</div>
                                    <div className="item-spec">{item.spec}</div>
                                    <div className="item-org">{item.org}</div>
                                </div>
                            ))}

                            <h4 className="flex items-center gap-2 text-[#00f2fe] font-bold mt-6 mb-2" data-aos="fade-down">
                                <FaCertificate className="text-sm" /> Recent Certifications
                            </h4>
                            {certificates.map((item, index) => (
                                <div key={`cert-${index}`} className="timeline-item" data-aos="fade-down" data-aos-delay={index * 50}>
                                    <div className="item-date">{item.date}</div>
                                    <div className="item-title">
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="certificate-link"
                                        >
                                            {item.title}
                                        </a>
                                    </div>
                                    <div className="item-org">{item.org}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience