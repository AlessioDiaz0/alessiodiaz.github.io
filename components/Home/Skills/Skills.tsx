import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import './skills.css'

const HackerText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const letters = "0123456789ABCDEFGITUVWXYZ!@#$%^&*";

    // Initialize with the actual text to avoid hydration mismatch.
    // The scrambling will begin as soon as the component is in view on the client.
    const [displayText, setDisplayText] = useState(text);

    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        // Create a random order for indices to resolve
        const shuffledIndices = Array.from({ length: text.length }, (_, i) => i)
            .sort(() => Math.random() - 0.5);

        let resolvedCount = 0;
        let isResolving = false;
        let interval: NodeJS.Timeout;

        // We want all text to finish in roughly the same amount of time
        // Increase/decrease the number of "steps" to adjust speed
        const totalResolutionSteps = 15;
        const increment = text.length / totalResolutionSteps;

        // Scramble animation starts immediately when in view
        interval = setInterval(() => {
            setDisplayText(() => {
                const currentlyResolved = isResolving
                    ? new Set(shuffledIndices.slice(0, Math.floor(resolvedCount)))
                    : new Set();

                return text
                    .split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (currentlyResolved.has(index)) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            });

            if (isResolving) {
                if (resolvedCount >= text.length) {
                    clearInterval(interval);
                }
                resolvedCount += increment;
            }
        }, 70);

        // Start resolving after the specified delay
        const timeout = setTimeout(() => {
            isResolving = true;
        }, delay);

        return () => {
            if (interval) clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isInView, text, delay]);

    return <span ref={containerRef} className="inline-block min-w-[1ch]">{displayText}</span>;
};

const Skills = () => {
    const allIcons = [
        'original-4.svg',
        'original-5.svg',
        'original-6.svg',
        'original-7.svg',
        'original-8.svg',
        'original-9.svg',
        'original-10.svg',
        'original-11.svg',
        'original-12.svg',
        'original-13.svg',
        'original-14.svg',
        'original-15.svg',
        'original-16.svg',
        'original-20.svg',
        'original-21.svg',
        'original-22.svg',
        'original-23.svg',
        'original-24.svg',
        'original-wordmark.svg',
        'original-wordmark-2.svg',
        'original-wordmark-3.svg',
        'original-wordmark-4.svg',
        'original-wordmark-6.svg',
        'original-wordmark-8.svg',
        'original-wordmark-10.svg',
        'original-wordmark-11.svg',
        'original-wordmark-12.svg',
        'original.svg',
        'plain-2.svg',
        'plain-3.svg',
        'plain-4.svg',
        'plain-5.svg',
        'plain-wordmark-2.svg',
        'plain-wordmark-3.svg',
        'plain-wordmark-4.svg',
        'plain-wordmark.svg',
        'plain.svg',
        'aws.jpg',
        'haystack.png',
        'N8n-logo-new.svg',
        'postman.png',
        'zapier.png'
    ]

    // Split icons into 3 rows (approximately equal distribution)
    const iconsPerRow = Math.ceil(allIcons.length / 3)
    const row1 = allIcons.slice(0, iconsPerRow)
    const row2 = allIcons.slice(iconsPerRow, iconsPerRow * 2)
    const row3 = allIcons.slice(iconsPerRow * 2)

    // Duplicate arrays for seamless infinite scroll
    const row1Icons = [...row1, ...row1, ...row1]
    const row2Icons = [...row2, ...row2, ...row2]
    const row3Icons = [...row3, ...row3, ...row3]

    return (
        <section className="skills-section">
            <div className="skills-container">
                <h2 className="skills-title" data-aos="fade-down">
                    <HackerText text="My Technical Skills" delay={500} />
                </h2>
                <p className="skills-subtitle" data-aos="fade-down" data-aos-delay="200">
                    <HackerText text="Amid the chaos of technology, I found stability" delay={500} />
                </p>

                <div className="skills-carousel">
                    {/* Row 1 */}
                    <div className="skills-row">
                        <div className="skills-track">
                            {row1Icons.map((icon, index) => (
                                <div key={`row1-${index}`} className="skill-icon-wrapper">
                                    <Image
                                        src={`/images/devicons/${icon}`}
                                        alt={`Skill icon ${icon}`}
                                        width={60}
                                        height={60}
                                        className="skill-icon"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Reverse direction for visual variety */}
                    <div className="skills-row">
                        <div className="skills-track skills-track-reverse">
                            {row2Icons.map((icon, index) => (
                                <div key={`row2-${index}`} className="skill-icon-wrapper">
                                    <Image
                                        src={`/images/devicons/${icon}`}
                                        alt={`Skill icon ${icon}`}
                                        width={60}
                                        height={60}
                                        className="skill-icon"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="skills-row">
                        <div className="skills-track">
                            {row3Icons.map((icon, index) => (
                                <div key={`row3-${index}`} className="skill-icon-wrapper">
                                    <Image
                                        src={`/images/devicons/${icon}`}
                                        alt={`Skill icon ${icon}`}
                                        width={60}
                                        height={60}
                                        className="skill-icon"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills