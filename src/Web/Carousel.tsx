import React, { useState, useEffect } from 'react';
import { Slide, Carousel, SideSlide, CarouselContainer, MenuContainer, PnButton } from './styledComponents';
import page1 from '../assets/Carousel/page1.png';
import page2 from '../assets/Carousel/page2.png';
import page3 from '../assets/Carousel/page3.png';
import page4 from '../assets/Carousel/page4.png';
import page5 from '../assets/Carousel/page5.png';
import previous from '../assets/Carousel/previousButton.png';
import next from '../assets/Carousel/nextButton.png';

type Props = {
    slides: string[];
    nextButton: string;
    previousButton: string;
};

const CArousel: React.FC<Props> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlideIndex, setNextSlideIndex] = useState(1);
    const [displayedNextSlideIndex, setDisplayedNextSlideIndex] = useState(1);
    const [transitioning, setTransitioning] = useState(false);
    const [leftSideSlideOpacity, setLeftSideSlideOpacity] = useState(1);
    const [rightSideSlideOpacity, setRightSideSlideOpacity] = useState(1);
    const [transitionDirection, setTransitionDirection] = useState('next');

    const nextSlide = () => {
        setTransitioning(true);
        setNextSlideIndex((currentSlide + 1) % slides.length);
        setRightSideSlideOpacity(1);
        setTransitionDirection('next');
    }

    const prevSlide = () => {
        setTransitioning(true);
        setNextSlideIndex((currentSlide - 1 + slides.length) % slides.length);
        setTransitionDirection('prev');
    }

    const handleTransitionEnd = () => {
        setCurrentSlide(nextSlideIndex);
        setDisplayedNextSlideIndex((nextSlideIndex + 1) % slides.length);
        setTransitioning(false);
        setRightSideSlideOpacity(1);
    };

    useEffect(() => {
        if (transitioning) {
            setRightSideSlideOpacity(0);
        }
    }, [transitioning]);

    useEffect(() => {
        if (!transitioning) {
            setTimeout(() => setLeftSideSlideOpacity(1), 300);
        }
    }, [transitioning]);

    const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
    const nextOfNextSlideIndex = (nextSlideIndex + 1) % slides.length;
    const prevOfPrevSlideIndex = (prevSlideIndex - 1 + slides.length) % slides.length;

    const pageImages = [page1, page2, page3, page4, page5];

    return (
        <CarouselContainer>
            <Carousel>
                <SideSlide
                    style={{
                        transform: transitioning ? (transitionDirection === 'next' ? 'translateX(0) scale(1)' : 'translateX(99%) scale(1)') : 'translateX(-160%) scale(0.5)',
                        opacity: transitioning && transitionDirection === 'prev' ? 1 : 0,
                        transition: transitioning ? 'transform 300ms, opacity 300ms' : 'none'
                    }}
                    src={slides[prevOfPrevSlideIndex]}
                    alt="slide"
                    id='slide'
                    className="side-slide"
                />
                <SideSlide
                    style={{
                        transform: transitioning ? (transitionDirection === 'next' ? 'translateX(-230%) scale(0.5)' : 'translateX(148.5%) scale(1.53)') : 'translateX(0) scale(1)',
                        opacity: transitioning ? 1 : rightSideSlideOpacity,
                        transition: transitioning ? 'transform 300ms, opacity 100ms' : 'none'
                    }}
                    src={slides[prevSlideIndex]}
                    alt="slide"
                    id='slide'
                    className="side-slide"
                />
                <Slide
                    onTransitionEnd={handleTransitionEnd}
                    style={{
                        transform: transitioning ? (transitionDirection === 'next' ? 'translateX(-97%) scale(0.65)' : 'translateX(97%) scale(0.65)') : 'translateX(0) scale(1)',
                        transition: transitioning ? 'transform 300ms' : 'none'
                    }}
                    src={slides[currentSlide]}
                    alt="slide"
                    id='slide'
                    className="main-slide"
                />
                <SideSlide
                    style={{
                        transform: transitioning ? (transitionDirection === 'next' ? 'translateX(-149.2%) scale(1.53)' : 'translateX(230%) scale(0.5)') : 'translateX(0) scale(1)',
                        opacity: leftSideSlideOpacity,
                        transition: transitioning ? 'transform 300ms' : 'opacity 200ms ease-in-out'
                    }}
                    src={slides[displayedNextSlideIndex]}
                    alt="slide"
                    id='slide'
                    className="side-slide"
                />
                <SideSlide
                    style={{
                        transform: transitioning ? (transitionDirection === 'next' ? 'translateX(-99%) scale(1)' : 'translateX(0) scale(1)') : 'translateX(-15%) scale(0.5)',
                        opacity: transitioning && transitionDirection === 'next' ? 1 : 0,
                        transition: transitioning ? 'transform 300ms, opacitiy 300ms' : 'none'
                    }}
                    src={slides[nextOfNextSlideIndex]}
                    alt="slide"
                    id='slide'
                    className="side-slide"
                />
            </Carousel>
            <MenuContainer>
                <PnButton onClick={prevSlide}>
                    <img src={previous} alt="slide-button" id='button' />
                </PnButton>
                <img src={pageImages[currentSlide]} alt={`Page ${currentSlide + 1}`} />
                <PnButton onClick={nextSlide}>
                    <img src={next} alt="slide-button" id='button' />
                </PnButton>
            </MenuContainer>
        </CarouselContainer>
    );
};

export default CArousel;