import { FOoter, Rubcube, ImgLink, TImgLink, FirstSection, SecondSection, ThirdSection, FourthSection, Titles, Content, ContentContainer, Rows } from './styledComponents'
import rubcube from '../assets/Footer/rubcube.svg'
import ingrey from '../assets/Footer/in-grey.svg'
import instagrey from '../assets/Footer/instagram-grey.svg'

export const Footer = () => {
    return (
        <FOoter>
                <Rows>
                    <FirstSection>
                        <Rubcube src={rubcube} alt='rubcube' />
                        <p>
                            Redes Sociais<br></br>
                        </p>
                        <ImgLink target='_blank' href='https://www.instagram.com/rubcube_/'>
                            <TImgLink src={ingrey} alt='in-grey' />
                        </ImgLink>
                        <ImgLink target='_blank' href='https://www.linkedin.com/company/rubcube'>
                            <TImgLink src={instagrey} alt='instagram-grey' />
                        </ImgLink>
                    </FirstSection>
                    <SecondSection>
                        <Titles>Quem Somos</Titles>
                        <ContentContainer>
                            <Content target='_blank' href='https://www.rubcube.com/about#our-mission'>Nossa Missão</Content>
                            <Content target='_blank' href='https://www.rubcube.com/about#our-vision'>Nossa Visão</Content>
                            <Content target='_blank' href='https://www.rubcube.com/about#our-values'>Nossos Valores</Content>
                        </ContentContainer>
                    </SecondSection>
                    <ThirdSection>
                        <Titles>Links Rápidos</Titles>
                        <ContentContainer>
                            <Content href='#home'>Inicio</Content>
                            <Content href='#about'>Sobre</Content>
                            <Content href='#faq'>FAQ</Content>
                        </ContentContainer>
                    </ThirdSection>
                    <FourthSection>
                        <ContentContainer>
                            <Titles>Contato</Titles>
                            <Content>Fone: (18) 3222-6805<br></br></Content>
                            <Content>E-mail: contato@rubcube.com<br></br></Content>
                        </ContentContainer>
                    </FourthSection>
                </Rows>
                <p>
                    © Rubcube 2024
                </p>
        </FOoter>
    );
}
