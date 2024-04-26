import React, { useState, useEffect } from 'react';
import { Slide, Carousel, SideSlide, CarouselContainer, MenuContainer, PnButton,Pages, ButtonsImages } from './styledComponentsMobile';
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
    const [transitioning, setTransitioning] = useState(false);
    const [transitionDirection, setTransitionDirection] = useState('next');

    const nextSlide = () => {
        setTransitioning(true);
        setNextSlideIndex((currentSlide + 1) % slides.length);
        setTransitionDirection('next');
    }

    const prevSlide = () => {
        setTransitioning(true);
        setNextSlideIndex((currentSlide - 1 + slides.length) % slides.length);
        setTransitionDirection('prev');
    }

    const handleTransitionEnd = () => {
        setCurrentSlide(nextSlideIndex);
        setTransitioning(false);
    };

    useEffect(() => {
        if (transitioning) {
        }
    }, [transitioning]);

    useEffect(() => {
        if (!transitioning) {
        }
    }, [transitioning]);
    

    const pageImages = [page1, page2, page3, page4, page5];

    return (
        <CarouselContainer>
            <Carousel>
                <SideSlide
                    style={{
                        transform: transitioning ? (transitionDirection === 'next' ? 'translateX(0) scale(1)' : 'translateX(256.5%) scale(3.71)') : 'translateX(-160%) scale(0.5)',
                        opacity: transitioning && transitionDirection === 'prev' ? 1 : 0,
                        transition: transitioning ? 'transform 300ms, opacity 300ms' : 'none'
                    }}
                    src={slides[nextSlideIndex]}
                    alt="slide"
                    id='slide'
                    className="side-slide"
                />
                <Slide
                    onTransitionEnd={handleTransitionEnd}
                    style={{
                        transform: transitioning ? (transitionDirection === 'next' ? 'translateX(-200%) scale(0.65)' : 'translateX(200%) scale(0.65)') : 'translateX(0) scale(1)',
                        transition: transitioning ? 'transform 300ms' : 'none'
                    }}
                    src={slides[currentSlide]}
                    alt="slide"
                    id='slide'
                    className="main-slide"
                />
                <SideSlide
                    style={{
                        transform: transitioning ? (transitionDirection === 'next' ? 'translateX(-256.5%) scale(3.71)' : 'translateX(0) scale(1)') : 'translateX(-15%) scale(0.5)',
                        opacity: transitioning && transitionDirection === 'next' ? 1 : 0,
                        transition: transitioning ? 'transform 300ms, opacitiy 300ms' : 'none'
                    }}
                    src={slides[nextSlideIndex]}
                    alt="slide"
                    id='slide'
                    className="side-slide"
                />
            </Carousel>
            <MenuContainer>
                <PnButton onClick={prevSlide}>
                    <ButtonsImages src={previous} alt="slide-button" id='button' />
                </PnButton>
                <Pages src={pageImages[currentSlide]} alt={`Page ${currentSlide + 1}`} />
                <PnButton onClick={nextSlide}>
                    <ButtonsImages src={next} alt="slide-button" id='button' />
                </PnButton>
            </MenuContainer>
        </CarouselContainer>
    );
};

export default CArousel;