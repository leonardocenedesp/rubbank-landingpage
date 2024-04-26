import { HEaderMobile, LogoRubcube, CtaImage, HButton, Menu, MenuButton, HOrg, ParentContainer } from "./styledComponentsMobile";
import rubbank from './Assets/Header/rubbank-white.svg'
import { useState } from 'react';
import ctabutton from './Assets/Header/CTAButton.png'
import menu from './Assets/Header/Menu.png'
import { SideBar } from "../Mobile/SideBar";

export const HeaderMobile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleMenuButtonClick = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <HEaderMobile>
            <HOrg>
                <ParentContainer>
                    <LogoRubcube src={rubbank} alt='rubbank' />
                </ParentContainer>
                <HButton>
                    <CtaImage src={ctabutton} alt='cta' />
                </HButton>
                <MenuButton onClick={handleMenuButtonClick}>
                    <Menu src={menu} alt='menu' />
                </MenuButton>
            </HOrg>
            {isSidebarOpen && <SideBar onClose={closeSidebar} />}
        </HEaderMobile>
    )
}