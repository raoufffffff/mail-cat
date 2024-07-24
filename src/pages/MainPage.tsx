import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '../commponent/Hero/Hero';
import About from '../commponent/about/About';
import Features from '../commponent/Features/Features';
import Titel from '../commponent/FAQ/Titel';
import Faq from '../commponent/FAQ/Faq';
import GetStarted from '../commponent/GetStarted/GetStarted';

const MainPage: React.FC = () => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        scrollToSection(searchParams.get('id'));
    }, [searchParams]);

    const scrollToSection = (sectionId: string | null) => {
        if (!sectionId) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            return;
        }

        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.pageYOffset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <Hero />
            <About />
            <Features />
            <Titel />
            <Faq />
            <GetStarted />
        </>
    );
};

export default MainPage;
