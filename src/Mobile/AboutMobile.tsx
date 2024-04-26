import { ABout, AImgBox, ATextBox, CellphonePg2, ATitleBox, AContent, AContentBox, ATexts } from "./styledComponentsMobile";
import cellphone from './Assets/About/cellphonePG2.png'

interface AboutMobileProps {
    id: string;
}

export const AboutMobile: React.FC<AboutMobileProps> = ({id}) => {
    return (
        <ABout id={id}>

            <ATextBox>
                <ATexts>
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
                </ATexts>
                <AImgBox>
                    <CellphonePg2 src={cellphone} />
                </AImgBox>
            </ATextBox>
        </ABout>
    )
}