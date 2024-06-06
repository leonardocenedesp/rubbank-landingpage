import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
    `;

export const HEader = styled.div`
  background-color: #FFFFFF;
  padding: 0%;
  padding: 0.64%;
  box-sizing: border-box;
  margin: 0;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  caret-color: transparent;
   position: fixed;
   left: 0;
   right: 0;
  top: 0;
  z-index: 1000;
  ;
  width: 100%;
  
`;

export const LogoRubcube = styled.img`
  box-sizing: border-box;
  width: 14.5%;
  height: 6.25%;
  margin-right: 4rem;
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
`;



export const HButton = styled.a`
    margin-left: 410px;
    background: transparent;
    border: none;
    outline: none;
`;



export const LAndingPage = styled.div`
  background-color: #000000;
  padding-left: 8.5%;
  padding-top: 6.44%;
  padding-right: 0.78%;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  caret-color: transparent;
  background-image: linear-gradient(-40deg,#3F1773, #2F0029);
  overflow: hidden;
`;

export const FullTextBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex;
`;

export const Title = styled.h1`
  font-family: 'Inter';
  font-size: 500%;
  color: #FFFFFF;
  font-weight: 800;
`;

export const Texts = styled.div`
  padding-right: 5%;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.div`
  & * {
    width: 70%;
    color: #FFFFFF;
    font-size: 162.5%;
  }
`;

export const Buttons = styled.div`
  margin-top: 9.4%;
  margin-left: 6.9%;

  & * {
    margin-right: 2.5%;
  }
`;

export const Apple = styled.img`
  width: 250px;
  height: auto;
  position: absolute;
`;

export const Google = styled.img`
  width: 250px;
  height: auto;
`;

export const Reviews = styled.div`
  margin-top: 9.4%;
  margin-left: 7.4%;
  display: flex;
  & h2 {
    font-family: 'Inter', 'sans-serif';
    font-size: 468.75%;
    color: #ffffff;
    font-weight: 800;
  }

  & p {
    font-family: 'Inter', 'sans-serif';
    font-size: 112.5%;
    color: #ffffff;
    white-space: nowrap;
  }
`;

export const ImgBox = styled.div`
  width: 50%;
  
`;

export const HandImage = styled.img`
  
  height: auto;
  width: 111.3%;
`;

export const ShareButton = styled.img`
  width: 300px;
  height: auto;
  margin-left: 10%;
`;

export const Org = styled.div`
  display: flex;
`;

export const ABout = styled.div`
  background-color: #000000;
  padding-top: 1.44%;
  padding: 2%;
  box-sizing: border-box;
  height: 100vh;
  color: #FFFF;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  caret-color: transparent;
  background-image: linear-gradient(65deg,#3F1773, #2F0029);
`;

export const AImgBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top:2%;
  width: 25%;
`;

export const ATextBox = styled.div`
  margin-top: 4%;
  width: 34%;
  margin-left: 10.41%;
  justify-content: center;
  align-items: center;
`;

export const AButtonBox = styled.div`
  align-self: center;
  display: flex;
  margin-left: 24%;
  margin-top: 17.7%;
`;

export const CellphonePg2 = styled.img`
  width: auto;
  height: 98%;
`;

export const ATitleBox = styled.div`
  margin-top: 4.6875%;
  width: 82%;

  & h2 {
    font-family: 'Inter', 'sans-serif';
    font-size: 275%;
    font-weight: 700;
  }
`;

export const AContent = styled.p`
  font-family: 'Inter', 'sans-serif';
  font-size: 137.5%;
  color: #FFFFFF;
  font-weight: 200;
  width: 100%;
 `;

export const AContentBox = styled.div`
  margin-top: 9.7%;
`;

export const FaQ = styled.div`
  background-color: #000000;
  padding: 3.125%;
  color: #FFFFFF;
  box-sizing: border-box;
  height: 160.5vh;
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
  align-content: center;

  & h2 {
    font-family: 'Inter', 'sans-serif';
    font-size: 437.5%;
    font-weight: 700;
    flex-shrink: 0;
    flex-grow: 1;
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
    `;

export const Carousel = styled.div`
  margin-top: 4%;
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
        font-size: 150%;
        color: #FFFFFF;
        font-weight: 600;
        margin: 0px;
        flex-shrink: 0;
        flex-grow: 1;
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
    margin-bottom: 7.7%;
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
    margin-left: 36.8%;
    align-self: flex-end;
`;
export const FaqButton2 = styled.button`
    background: transparent;
    border: none;
    outline: none;
    margin: 0%;
    width: fit-content;
    padding: 0%;
    margin-left: 20.6%;
    align-self: flex-end;
`;
export const FaqButton3 = styled.button`
    background: transparent;
    border: none;
    outline: none;
    margin: 0%;
    width: fit-content;
    padding: 0%;
    margin-left: 9.8%;
    align-self: flex-end;
`;

export const FaqButtonImg = styled.img`
    width: 30px;
    height: auto;
    
`;

export const FAQAsnwer = styled.p`
    font-family: 'Inter', 'sans-serif';
    font-size: 112,5%;
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
    height: 2px;
    transition: transform 0.4s ease;
`;

export const Slide = styled.img`
  transition: transform 0.3s ease;
  margin-left: 4%;
  margin-right: 4%;
`;

export const FOoter = styled.footer`
  background-color: #ffffff;
  padding: 1%;
  box-sizing: border-box;
  height: 24vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & p {
    font-family: 'Inter', 'sans-serif';
    font-size: 12px;
    font-weight: 700;
    color: #000000;
  
  }
`;

export const Rubcube = styled.img`
  box-sizing: border-box;
  width: 125px;
  height: 25px;
  margin-bottom: 8.3%;
`;

export const ImgLink = styled.a`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  margin-right: 11%;
`;

export const TImgLink = styled.img`
  width: 50px;
  height: 50px;
`;

export const FirstSection = styled.div`
  margin-right: 5%;
  margin-left: 5%;

  & > * {
    
  }

  & p {
    font-family: 'Inter', 'sans-serif';
    font-size: 125%;
    font-weight: 700;
    color: #000000;
    margin-bottom: 8.3%;
  }
`;

export const SecondSection = styled.div`
  margin-right: 5%;
  margin-left: 5%;
`;

export const ThirdSection = styled.div`
  margin-right: 5%;
  margin-left: 5%;
`;

export const FourthSection = styled.div`
  margin-right: 5%;
  margin-left: 5%;
`;

export const Titles = styled.p`
  font-family: 'Inter', 'sans-serif';
  font-size: 20px;
  color: #000000;
  text-shadow: 0 0 0 #000000;
  margin-bottom: 12px;
`;

export const Content = styled.a`
  display: block;
  font-family: 'Inter', 'sans-serif';
  font-size: 16px;
  color: #767676;
  font-weight:300;
  margin-bottom: 5%;
  &:not(:last-child) {
    margin-bottom: 12px; // Add this line
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const LastLine = styled.p`
  font-family: 'Inter', 'sans-serif';
  font-size: 16px;
  color: #000000;
  font-weight:300;
`;

export const FColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FLastLine = styled.p`
  font-family: 'Inter', 'sans-serif';
  font-size: 16px;
  color: #000000;
  font-weight:300;
  margin-top: 5%;
`;