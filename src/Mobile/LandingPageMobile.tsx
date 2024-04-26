import { LAndingPage, FullTextBox, Title, Texts, TextBox, Buttons, Apple, Google, ImgBox, HandImage } from "./styledComponentsMobile";
import google from '../assets/LandingPage/Google.png'
import apple from '../assets/LandingPage/Apple.png'
import cellphone from '../assets/FAQ/Carousel1.png'

interface LandingPageMobileProps {
    id: string;
}

export const LandingPageMobile: React.FC<LandingPageMobileProps>  = ({id}) => {
    return (
        <LAndingPage id={id}>
            <FullTextBox>
                <Texts>
                    <Title>O banco digital<br></br> feito para você</Title>
                    <TextBox>
                        <p>
                            O nosso banco digital gratuito feito para você,
                            provendo a melhor segurnaça e acesso simples
                            venha conhecer agora.
                        </p>
                    </TextBox>
                    <Buttons>
                        <a target="_blank" href="https://play.google.com/store/games">
                            <Google src={google} alt='google' />
                        </a>
                        <a target="_blank" href="https://www.apple.com/app-store/">
                            <Apple src={apple} alt='apple' />
                        </a>
                    </Buttons>
                </Texts>
            </FullTextBox>
            <ImgBox>
                <HandImage src={cellphone} alt='hand' />
            </ImgBox>
        </LAndingPage>
    )
}