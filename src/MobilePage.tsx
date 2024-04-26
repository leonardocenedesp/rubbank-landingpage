import React, { useEffect, useState } from 'react';
import { HeaderMobile } from './Mobile/HeaderMobile';
import { LandingPageMobile } from './Mobile/LandingPageMobile';
import { AboutMobile } from './Mobile/AboutMobile';
import { FAQMobile } from './Mobile/FAQMobile';
import { MobileFooter } from './Mobile/FooterMobile';

export const MobilePage: React.FC = () => {
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
      {visible && <HeaderMobile />}
      <LandingPageMobile id="home" />
      <AboutMobile id="about" />
      <FAQMobile id="faq" />
      <MobileFooter />
    </>
  );
};