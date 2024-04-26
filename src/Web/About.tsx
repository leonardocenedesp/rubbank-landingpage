import { ABout, AImgBox, ATextBox, AButtonBox, CellphonePg2, ATitleBox, AContent, AContentBox, CtaImage } from "./styledComponents";
import cellphone from '../assets/About/cellphonePG2.png'
import ctabutton from '../assets/Header/CTAButton.png'

interface AboutProps {
    id: string;
}

export const About : React.FC<AboutProps> = ({id}) => {
    return (
        <ABout id={id}>
            <AImgBox>
                <CellphonePg2 src={cellphone} />
            </AImgBox>
            <ATextBox>
                <ATitleBox>
                    <h2>
                        Tenha fácil acesso as suas multiplas contas
                    </h2>
                </ATitleBox>
                <AContentBox>
                    <AContent>
                        O nosso banco vem com uma proposta
                        extremamente funcional, dar ao usuario a
                        opção de multiplas contas, sem perder a
                        segurança ou ter que passar pela mesma
                        burocracia multiplas vezes. Além disso nosso
                        banco promete uma interface amigavel,
                        atendimento rápido em casos de problemas e
                        uma segurança de ponta
                    </AContent>
                </AContentBox>
                <AButtonBox>
                    <a target="_blank" href="https://play.google.com/store/games?&utm_source=latam_Med&utm_medium=hasem&utm_content=Dec1622&utm_campaign=Evergreen&pcampaignid=MKT-EDR-latam-br-1707532-Med-hasem-py-Evergreen-Dec1622-Text_Search_BKWS-id_102355_%7CEXA%7CONSEM_kwid_43700074755585158&gad_source=1&gclid=CjwKCAjwoa2xBhACEiwA1sb1BHI_LvDnMACgPTu_ovvh3WFfufWiy3aQ-mLKe12N1jgKVaws7A8XaRoC4nYQAvD_BwE&gclsrc=aw.ds&pli=1">
                        <CtaImage src={ctabutton} />
                    </a>
                </AButtonBox>
            </ATextBox>
        </ABout>
    )
}