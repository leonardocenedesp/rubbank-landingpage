import React, { useEffect, useState } from 'react';
import { Header } from './Web/Header';
import { LandingPage } from './Web/LandingPage';
import { About } from './Web/About';
import { FAQ } from './Web/FAQ';
import { Footer } from './Web/Footer';

export const WebPage: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {visible && <Header />}
      <LandingPage id="home" />
      <About id="about" />
      <FAQ id="faq" />
      <Footer />
    </>
  );
};