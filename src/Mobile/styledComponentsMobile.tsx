import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
    `;

export const HEaderMobile = styled.div`
  background-color: #FFFFFF;
  padding-top: 2.5%;
  padding-bottom: 1.25%;
  padding-left:2.75% ;
  padding-right: 2.75%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: right;
  flex-wrap: wrap;
  caret-color: transparent;
  align-content: center;
  flex-direction: column;
  position: fixed;
   left: 0;
   right: 0;
  top: 0;
  z-index: 1000;
  ;
  width: 100%;
  height: 7.5%;
`;

export const HOrg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Menu = styled.img`
  width: 100%;
  height: 40px;
  
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-left: 1rem;
`;

export const LogoRubcube = styled.img`
  width: 100px;
  height: auto;
`;

export const NavLink = styled.a`
  font-family: 'Inter', 'sans-serif';
  font-size: 150%;
  color: #6A6A6A;
  text-decoration: none;
  margin-right: 4rem;
  letter-spacing: .5rem;

  &:hover {
    color: #6B7AE5;
    border-bottom: .5% solid #6B7AE5;
    padding-bottom: 1%;
  }
`;

export const CtaImage = styled.img`
  width: 100%;
  height: 30px;
`;
export const FCtaImage = styled.img`
  width: 150px;
  height: auto;
`;


export const HButton = styled.button`
    margin-left: 64px;
    background: transparent;
    border: none;
    outline: none;
`;
export const FHButton = styled.a`
    margin-top: 27%;
    background: transparent;
    border: none;
    outline: none;
`;

export const LAndingPage = styled.div`
  background-color: #000000;
  padding-left: 0;
  padding-top: 21%;
  padding-right: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  caret-color: transparent;
  background-image: linear-gradient(-40deg,#3F1773, #2F0029);
  overflow: hidden;
`;

export const FullTextBox = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Title = styled.h1`
  font-family: 'Inter';
  font-size: 237.5%;
  color: #FFFFFF;
  font-weight: 800;
  margin-bottom: 2%;
  width: 21.25rem;
`;

export const Texts = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-left: 4.45%;
`;

export const TextBox = styled.div`
  & * {
    width: 21.25rem;
    color: #FFFFFF;
    font-size: 14px;
  }
`;

export const Buttons = styled.div`
  margin-top: 9.5%;
  margin-left: 0;
  margin-bottom: 9.5%;
  display: flex;
  align-content: center;

  & * {
    margin-right: 5%;
  }
`;

export const Apple = styled.img`
  width: 150px;
  height: auto;
  position: absolute;
`;

export const Google = styled.img`
  width: 150px;
  height: auto;
`;



export const ImgBox = styled.div`
  width: fit-content;
  
`;

export const HandImage = styled.img`
  
  height: auto;
  width: 188px;
`;

export const ShareButton = styled.img`
  width: 320px;
  height: auto;
  margin-left: 5%;
`;

export const Org = styled.div`
  display: flex;
`;

export const ABout = styled.div`
  background-color: #000000;
  padding-top: 8%;
  padding-right: 4.45%;
  padding-bottom: 4%;
  padding-left: 4%;
  box-sizing: border-box;
  height: 100vh;
  color: #FFFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;
  caret-color: transparent;
  background-image: linear-gradient(65deg,#3F1773, #2F0029);
`;

export const AImgBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top:32px;
  width: 100%;
`;

export const ATextBox = styled.div`
  margin-top: 0;
  width: 100%;
  margin-left: 0;
  justify-content: center;
  align-items: center;
`;

export const Pages = styled.img`
  width: 123px;
  height: auto;
`

export const ButtonsImages = styled.img`
  width: auto;
  height: 19px;
`;


export const CellphonePg2 = styled.img`
  width: auto;
  height: 344px;
`;

export const ATitleBox = styled.div`
  margin-top: 0;
  width: 80%;
  align-items: center;

  & h2 {
    font-family: 'Inter', 'sans-serif';
    font-size: 28px;
    font-weight: 700;
  }
`;
export const ATexts = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

export const AContent = styled.p`
  font-family: 'Inter', 'sans-serif';
  font-size: 14px;
  color: #FFFFFF;
  font-weight: 200;
  width: 100%;
 `;

export const AContentBox = styled.div`
  margin-top: 16px;
  width: 80%;
`;

export const FaQ = styled.div`
  background-color: #000000;
  padding-top: 8%;
  padding-right: 4%;
  padding-bottom: 4%;
  padding-left: 4%;
  color: #FFFFFF;
  box-sizing: border-box;
  height: 120vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  caret-color: transparent;
  background-image: radial-gradient(#3F1773, #2F0029);
`;

export const STextBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-content: center;

  & h2 {
    font-family: 'Inter', 'sans-serif';
    font-size: 3rem;
    font-weight: 700;
    flex-shrink: 0;
    flex-grow: 1;
    text-align: center;
  }

  & p {
    margin-top: 2%;
    font-family: 'Inter', 'sans-serif';
    font-size: 137.5%;
    color: #FFFFFF;
    font-weight: 300;
    width: 100%;
  }
`;

export const STitleBox = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    align-content: center;
    margin-top: 3%;
    margin-bottom: 32px;
    `;

export const Carousel = styled.div`
  margin-top: 4%;
  margin-bottom: 4%;
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
`;
export const InsideFaqBox = styled.div`
    display :flex ;
    justify-content: flex-start; 
    align-items: center;
    width: fit-content;

    & p {
        font-family: 'Inter', 'sans-serif';
        font-size: 0.875rem;
        color: #FFFFFF;
        font-weight: 600;
        margin: 0px;
        flex-shrink: 0;
        width: fit-content;
    }
`
export const SideSlide = styled.img`
  width: 20%;
  transition: transform 0.3s ease;
`;

export const PageNumber = styled.p`
  
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PnButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    `;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FaqBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    width: 100%;
    box-sizing: border-box;
`;


export const FaqButton1 = styled.button`
    background: transparent;
    border: none;
    outline: none;
    margin: 0%;
    width: fit-content;
    padding: 0%;
    margin-left: 29%;
    align-self: flex-end;
`;
export const FaqButton2 = styled.button`
    background: transparent;
    border: none;
    outline: none;
    margin: 0%;
    width: fit-content;
    padding: 0%;
    margin-left: 13%;
    align-self: flex-end;
`;
export const FaqButton3 = styled.button`
    background: transparent;
    border: none;
    outline: none;
    margin: 0%;
    width: fit-content;
    padding: 0%;
    margin-left: 3%;
    align-self: flex-end;
`;

export const FaqButtonImg = styled.img`
    width: 16px;
    height: auto;
    
`;

export const FAQAsnwer = styled.p`
    font-family: 'Inter', 'sans-serif';
    font-size: 8px;
    color: #FFFFFF;
    font-weight: 300;
    margin-left: 4%;
    width: fit-content;
    transition: opacity 0.3s ease, transform 0.3s ease; // animates the opacity and transform properties
    opacity: 0; // starts out transparent
    transform: translateY(-20px);
`;

export const FaqSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const Line = styled.img`
    width: 100%;
    height: 1px;
    margin-top: 4px;
    color: rgba(255, 255, 255, 0.1);
    transition: transform 0.4s ease;
    
`;

export const Slide = styled.img`
  transition: transform 0.3s ease;
  margin-left: 4%;
  margin-right: 4%;
  width: 196px;
  height: auto;
`;

export const FOoter = styled.footer`
  background-color: #ffffff;
  padding-top: 32px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  box-sizing: border-box;
  height: 36vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Rubcube = styled.img`
  box-sizing: border-box;
  width: 120px;
  height: 20px;
  margin-bottom: 12px;
`;

export const ImgLink = styled.a`
  width: 100%;
  height: 100%;
  padding-top: 12px;
  margin-right: 12px;
`;

export const TImgLink = styled.img`
  width: 35px;
  height: 35px;
`;

export const FirstSection = styled.div`
  margin-right: 16px;
  margin-left: 16px;
  align-self: flex-start;

  & > * {
    
  }

  & p {
    font-family: 'Inter', 'sans-serif';
    font-size: 16px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 8.3%;
  }
`;

export const SecondSection = styled.div`
  margin-right: 16px;
  margin-left: 0;
`;

export const ThirdSection = styled.div`
  margin-right: 16px;
  margin-left: 16px;
`;

export const FourthSection = styled.div`
  margin-right: 0;
  margin-left: 16px;
`;

export const Titles = styled.p`
  font-family: 'Inter', 'sans-serif';
  font-size: 16px;
  color: #000000;
  text-shadow: 0 0 0 #000000;
  margin-bottom: 12px;
`;

export const Content = styled.a`
  display: block;
  font-family: 'Inter', 'sans-serif';
  font-size: 12px;
  color: #767676;
  font-weight:300;
  margin-bottom: 5%;
  white-space: nowrap;
  &:not(:last-child) {
    margin-bottom: 12px; // Add this line
  }
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
`;
export const ThirdRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const LastLine = styled.p`
  font-family: 'Inter', 'sans-serif';
  font-size: 12px;
  color: #000000;
  font-weight: 800;
  margin-top: 16px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SIDeBar = styled.div`
  background-color: #ffffff;
  padding-top: 32px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  box-sizing: border-box;
  height: 800px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  flex-wrap: wrap;
  caret-color: transparent;
`;

export const SideBarContainer = styled.div`
position: fixed; // Change this line
  top: 0;
  right: 0;
  width: 116px;
  height: 100%;
  background-color: #ffff;
  z-index: 1000; // Add this line
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const SideBarUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ParentContainer = styled.div`
  position: relative;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const CloseButtonImage = styled.img`
  width: 35px;
  height: auto;
`;

export const SLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SNavLink = styled.a`
  font-family: 'Inter', 'sans-serif';
  font-size: 16px;
  color: #6A6A6A;
  text-decoration: none;
  margin-bottom: 96px;
`;

export const SideBarRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const SImgLink = styled.a`
  padding-top: 12px;
  margin-right: 12px;
`;

export const STImgLink = styled.img`
  width: 35px;
  height: 35px;
`;
