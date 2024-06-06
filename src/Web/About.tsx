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
                        O melhor suporte feito especialmente pra você
                    </h2>
                </ATitleBox>
                <AContentBox>
                    <AContent>
                        O nosso banco tem o melhor suporte direcionado 24hrs para 
                        você, com atendentes prontos para te ajudar a qualquer
                        momento, que vão solucionar seus problemas em até uma
                        hora. Através das ferramentas de Ticket com chat 
                        integrado que vai ser respondido pelo suporte, o qual o 
                        aplicativo te notifica tirando a nescessidade de uma atenção
                        fixa no aplicativo, e um FAQ que é atualizado constantemente 
                        para te ajudar a resolver qualquer coisa em instantes.
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