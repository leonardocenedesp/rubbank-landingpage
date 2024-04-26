import { FaQ, STextBox, InsideFaqBox, FaqButton1, FaqButton2, FaqButton3, FaqButtonImg, FaqBox, Line, FaqSide, STitleBox, FAQAsnwer,CtaImage } from "./styledComponents";
import slide1 from '../assets/FAQ/Carousel1.png'
import slide2 from '../assets/FAQ/Carousel2.png'
import slide3 from '../assets/FAQ/Carousel3.png'
import slide4 from '../assets/FAQ/Carousel4.png'
import slide5 from '../assets/FAQ/Carousel5.png'
import line from '../assets/FAQ/Line.png'
import plus from '../assets/FAQ/plus.png'
import minus from '../assets/FAQ/Minus.png'
import CArousel from "./Carousel";
import { useState } from "react";
import cta from '../assets/FAQ/CTAButton.png'
import styled from "styled-components";

export const FHButton = styled.a`
    margin-top: 88px;
    background: transparent;
    border: none;
    outline: none;
`;
interface FAQProps {
    id: string;
}

export const FAQ: React.FC<FAQProps> = ({id}) => {
    const slides = [slide1, slide2, slide3, slide4, slide5];
    const nextButton = 'assets/FAQ/next.png';
    const previousButton = 'assets/FAQ/previous.png';
    const [isFaqButton2Clicked, setIsFaqButton2Clicked] = useState(false);
    const [isFaqButton1Clicked, setIsFaqButton1Clicked] = useState(false);
    const [isFaqButton3Clicked, setIsFaqButton3Clicked] = useState(false);

    return (
        <FaQ id={id}>
            <STextBox>
                <STitleBox>
                    <h2>
                        Duvidas Frequentes
                    </h2>
                </STitleBox>
                <FaqSide>
                    <FaqBox>
                        <InsideFaqBox>
                            <p>
                                Como funciona as multiplas contas
                            </p>
                            <FaqButton1 onClick={() => setIsFaqButton1Clicked(!isFaqButton1Clicked)}>
                                <FaqButtonImg src={isFaqButton1Clicked ? minus : plus} alt="state" />
                            </FaqButton1>
                        </InsideFaqBox>
                        {isFaqButton1Clicked && <FAQAsnwer
                            style={{
                                opacity: isFaqButton1Clicked ? 1 : 0,
                                transform: isFaqButton1Clicked ? 'translateY(0)' : 'translateY(-20px)'
                            }}
                        >
                            Dentro do aplicativo você pode criar uma conta<br></br> poupança e alternar entre elas em poucos<br></br>  cliques na home page.
                        </FAQAsnwer>}
                        <Line
                            src={line}
                            alt="line"
                            style={{ transform: isFaqButton1Clicked ? 'translateY(8px)' : 'translateY(0)' }}
                        />
                    </FaqBox>
                    <FaqBox>
                        <InsideFaqBox>
                            <p>
                                Como é o atendimento rapido de vocês?
                            </p>
                            <FaqButton2 onClick={() => setIsFaqButton2Clicked(!isFaqButton2Clicked)}>
                                <FaqButtonImg src={isFaqButton2Clicked ? minus : plus} alt="state" />
                            </FaqButton2>
                        </InsideFaqBox>
                        {isFaqButton2Clicked && <FAQAsnwer
                            style={{
                                opacity: isFaqButton2Clicked ? 1 : 0,
                                transform: isFaqButton2Clicked ? 'translateY(0)' : 'translateY(-20px)'
                            }}
                        >
                            Atraves dos FAQs que se extendem ao <br></br> aplicativo, e pelos Tickets de suporte <br></br> que são respondidos em até 24 horas.
                        </FAQAsnwer>}
                        <Line
                            src={line}
                            alt="line"
                            style={{ transform: isFaqButton2Clicked ? 'translateY(8px)' : 'translateY(0)' }}
                        />
                    </FaqBox>
                    <FaqBox>
                        <InsideFaqBox>
                            <p>
                                Eu preciso pagar algo para usar o aplicativo?
                            </p>
                            <FaqButton3 onClick={() => setIsFaqButton3Clicked(!isFaqButton3Clicked)}>
                                <FaqButtonImg src={isFaqButton3Clicked ? minus : plus} alt="state" />
                            </FaqButton3>
                        </InsideFaqBox>
                        {isFaqButton3Clicked && <FAQAsnwer
                            style={{
                                opacity: isFaqButton3Clicked ? 1 : 0,
                                transform: isFaqButton3Clicked ? 'translateY(0)' : 'translateY(-20px)'
                            }}
                        >
                            Não o banco é 100% gratuito, é só baixar e ja <br></br>começar a usar sem ser cobrado por nada
                        </FAQAsnwer>}
                        <Line
                            src={line}
                            alt="line"
                            style={{ transform: isFaqButton3Clicked ? 'translateY(8px)' : 'translateY(0)' }}
                        />
                    </FaqBox>
                </FaqSide>
            </STextBox>
            <div>
                <CArousel slides={slides} nextButton={nextButton} previousButton={previousButton} />
            </div>
            <FHButton target="_blank" href="https://play.google.com/store/games">
                <CtaImage src={cta} alt='ctaButton'/>
            </FHButton>
        </FaQ>
    );
}
