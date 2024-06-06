import { FaQ, STextBox, InsideFaqBox, FaqButton1, FaqButton2, FaqButton3, FaqButtonImg, FaqBox, Line, FaqSide, STitleBox, FAQAsnwer, FHButton, FCtaImage } from "./styledComponentsMobile";
import slide1 from './Assets/FAQ/Carousel1.png'
import slide2 from './Assets/FAQ/Carousel2.png'
import slide3 from './Assets/FAQ/Carousel3.png'
import slide4 from './Assets/FAQ/Carousel4.png'
import slide5 from './Assets/FAQ/Carousel5.png'
import line from './Assets/FAQ/Line.png'
import plus from './Assets/FAQ/plus.png'
import minus from './Assets/FAQ/Minus.png'
import CArousel from "./CarouselMobile";
import cta from "./Assets/FAQ/CTAButton.png"
import { useState } from "react";

interface FAQMobileProps {
    id: string;
}

export const FAQMobile: React.FC<FAQMobileProps> = ({id}) => {
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
                                fontSize: '8px',
                                opacity: isFaqButton1Clicked ? 1 : 0,
                                transform: isFaqButton1Clicked ? 'translateY(0)' : 'translateY(-20px)'
                            }}
                        >
                            Dentro do aplicativo você pode criar uma conta poupança e alternar entre elas em poucos cliques na home page.
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
                                fontSize: '8px',
                                opacity: isFaqButton2Clicked ? 1 : 0,
                                transform: isFaqButton2Clicked ? 'translateY(0)' : 'translateY(-20px)'
                            }}
                        >
                            Atraves dos FAQs que se extendem ao aplicativo, e pelos Tickets de suporte que são resolvidos em até 1 hora.
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
                                fontSize: '8px',
                                opacity: isFaqButton3Clicked ? 1 : 0,
                                transform: isFaqButton3Clicked ? 'translateY(0)' : 'translateY(-20px)'
                            }}
                        >
                            Não o banco é 100% gratuito, é só baixar e ja começar a usar sem ser cobrado por nada
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
            <FHButton target="_blank" href="https://play.google.com/store/games?&utm_source=latam_Med&utm_medium=hasem&utm_content=Dec1622&utm_campaign=Evergreen&pcampaignid=MKT-EDR-latam-br-1707532-Med-hasem-py-Evergreen-Dec1622-Text_Search_BKWS-id_102355_%7CEXA%7CONSEM_kwid_43700074755585158&gad_source=1&gclid=CjwKCAjwoa2xBhACEiwA1sb1BHI_LvDnMACgPTu_ovvh3WFfufWiy3aQ-mLKe12N1jgKVaws7A8XaRoC4nYQAvD_BwE&gclsrc=aw.ds&pli=1">
                <FCtaImage src={cta} alt='cta' />
            </FHButton>
        </FaQ>
    );
}
