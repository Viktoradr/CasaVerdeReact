
import { Header, NavMenu } from "./styles";

export default function Menu() {
    return (
        <Header>
            <div>
              <img src="/images/svg/logo.svg" alt="logo" />
            </div>

            <NavMenu>
                <li>
                    <a href="/">Como fazer</a> /
                </li>
                <li>
                    <a href="/nossas-plantas">Nossas plantas</a> /
                </li>
                <li>
                    <a href="/depoimentos">Depoimentos</a> /
                </li>
                <li>
                    <a href="/videos">Vídeos</a> /
                </li>
                <li>
                    <a href="/meu-carrinho">Meu Carrinho</a>
                </li>
            </NavMenu>

        </Header>
    )
}