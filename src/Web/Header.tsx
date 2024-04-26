import { HEader,LogoRubcube, NavLink, CtaImage , HButton } from "./styledComponents";
import rubbank from '../assets//Header/rubbank-white.svg'
import ctabutton from '../assets/Header/CTAButton.png'

export const Header = () => {
    return (
        <HEader>
            <LogoRubcube src={rubbank} alt='rubbank' />
            <nav>
                <NavLink href='#home'>INICIO</NavLink>
                <NavLink href='#about'>SOBRE</NavLink>
                <NavLink href='#faq'>FAQ</NavLink>
            </nav>
            <HButton target="_blank" href="https://play.google.com/store/games">
                <CtaImage src={ctabutton} alt='ctaButton'/>
            </HButton>
        </HEader>
    )
}