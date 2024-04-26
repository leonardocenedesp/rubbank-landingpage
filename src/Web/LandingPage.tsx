import { LAndingPage, FullTextBox, Title, Texts, TextBox, Buttons, Apple, Google, Reviews, ImgBox, HandImage, ShareButton, Org } from "./styledComponents";
import google from '../assets/LandingPage/Google.png'
import apple from '../assets/LandingPage/Apple.png'
import hand from '../assets/LandingPage/fpImg.png'
import share from '../assets/LandingPage/shareButton.png'

interface LandingPageProps {
    id: string;
}

export const LandingPage: React.FC<LandingPageProps> = ({id}) => {
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
                    <Reviews>
                        <Org>
                            <div>
                                <h2>
                                    +100
                                </h2>
                                <p>
                                    Usuarios já usam o app
                                </p>
                            </div>
                            <a target="_blank" href="https://play.google.com/store/games">
                                <ShareButton src={share} alt='share' />
                            </a>

                        </Org>
                    </Reviews>
                </Texts>
            </FullTextBox>
            <ImgBox>
                <HandImage src={hand} alt='hand' />
            </ImgBox>
        </LAndingPage>
    )
}