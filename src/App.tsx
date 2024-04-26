
import { GlobalStyle } from './Web/styledComponents'
import { MobilePage } from './MobilePage'
import { WebPage } from './WebPage'
import { useEffect, useState } from 'react'

function App() {
  const [isMobile, setMobile] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (screenWidth > 768) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [screenWidth]);
  if (isMobile) {
    return (
      <>
        <GlobalStyle />
        <MobilePage />
      </>
    );
  }
  return (
    <>
      <GlobalStyle />
      <WebPage />
    </>
  );
}

export default App
