import Ofertas from "components/ofertas";
import { useEffect } from "react";
import Formulario from "./formulario";
import { Produtos } from "./styles";

export default function NossasPlantasPage() {
  return (
    <Produtos>
      <h2>Conheça</h2>
      <h1>Nossas plantas</h1>
      <Formulario />
      <Ofertas />
    </Produtos>
  );
}
