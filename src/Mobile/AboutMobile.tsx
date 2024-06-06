import { ABout, AImgBox, ATextBox, CellphonePg2, ATitleBox, AContent, AContentBox, ATexts } from "./styledComponentsMobile";
import cellphone from './Assets/About/cellphonePG2.png'

interface AboutMobileProps {
    id: string;
}

export const AboutMobile: React.FC<AboutMobileProps> = ({ id }) => {
    return (
        <ABout id={id}>

            <ATextBox>
                <ATexts>
                    <ATitleBox>
                        <h2>
                            O melhor suporte feito especialmente pra você
                        </h2>
                    </ATitleBox>
                    <AContentBox>
                        <AContent>
                            O nosso banco tem o melhor suporte direcionado 24hrs para
                            você, com atendentes prontos para te ajudar a qualquer
                            momento, que vão solucionar seus problemas em até 50
                            minutos. Através das ferramentas de Ticket com chat
                            integrado que vai ser respondido pelo suporte, o qual o
                            aplicativo te notifica tirando a nescessidade de uma atenção
                            fixa no aplicativo, e um FAQ que é atualizado constantemente
                            para te ajudar a resolver qualquer coisa em instantes.
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