import { IPlanta } from "interfaces/IPlanta";
import { CardPlanta } from "./styles";
import { ReactComponent as Seta } from "assets/seta.svg";
import styled from "styled-components";
import { PlantaProps } from "types/Planta";

interface IPlantaProps {
    planta: IPlanta
}

export default function Planta({ planta }: IPlantaProps) {

    const ImagemPlanta = styled.div<PlantaProps>`
        background: url(${(props) => props.imagem});
        background-repeat: no-repeat;
        position: absolute;
        width: 300px;
        height: 220px;
        left: 0;
        bottom: 0;
        z-index: 0;
    `;
    
    return(
        <>
            <CardPlanta>
                <ImagemPlanta imagem={"images/plantas/" + planta.img + ".png"}/>
                <div>
                    <h3>{planta.name}</h3>
                    <h5>R$ {planta.preco}</h5> 
                    <a href="''">
                        Comprar
                        <Seta />
                    </a>
                </div>
            </CardPlanta>   
        </>
    );
}