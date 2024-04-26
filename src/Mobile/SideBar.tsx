import { SIDeBar, CloseButton, CloseButtonImage, SLinks, SNavLink, SideBarContainer, SImgLink, STImgLink, SideBarRow,SideBarUpperContainer } from "./styledComponentsMobile";
import close from "./Assets/SideBar/close.png"
import ingrey from './Assets/SideBar/in-grey.svg'
import instagrey from './Assets/SideBar/instagram-grey.svg'


interface SideBarProps {
    onClose: () => void;
}

export const SideBar = ({ onClose }: SideBarProps) => {
    const handleClick = () => {
        onClose();
    }
    return (
        <SIDeBar>
            <SideBarContainer>
                <SideBarUpperContainer>
                    <CloseButton>
                        <CloseButtonImage src={close} alt='close' onClick={handleClick} />
                    </CloseButton>
                    <SLinks>
                        <SNavLink href='#home'>INICIO</SNavLink>
                        <SNavLink href='#about'>SOBRE</SNavLink>
                        <SNavLink href='#faq'>FAQ</SNavLink>
                    </SLinks>
                </SideBarUpperContainer>
                <SideBarRow>
                    <SImgLink target="_blank" href='https://www.instagram.com/rubcube_/'>
                        <STImgLink src={ingrey} alt='in-grey' />
                    </SImgLink>

                    <SImgLink target="_blank" href='https://www.linkedin.com/company/rubcube'>
                        <STImgLink src={instagrey} alt='instagram-grey' />
                    </SImgLink>
                </SideBarRow>
            </SideBarContainer>
        </SIDeBar>
    );
}