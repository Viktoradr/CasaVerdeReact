import { useState } from "react";
import { OrdenadorPlanta } from "types/OrdenadorPlanta";
import Ofertas from "components/ofertas";
import Formulario from "./formulario";
import { Produtos } from "./styles";

export default function NossasPlantasPage() {
  const [filtro, setFiltro] = useState<number[]>([10, 25]);
  const [ordenador, setOrdenador] = useState<OrdenadorPlanta>('');

  return (
    <Produtos>
      <h2>Conheça</h2>
      <h1>Nossas plantas</h1>
      <Formulario ordenador={ordenador} setOrdenador={setOrdenador} filtro={filtro} setFiltro={setFiltro}/>
      <Ofertas ordenador={ordenador} filtro={filtro}  />
    </Produtos>
  );
}
