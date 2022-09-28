import http from "common/http";
import Planta from "components/planta";
import { IPlanta } from "interfaces/IPlanta";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { v4 as uuid } from "uuid";

interface OfertasProps {
  ordenador: string;
  filtro: number[];
}

export default function Ofertas({ ordenador, filtro }: OfertasProps) {
  const [plantas, setPlantas] = useState<IPlanta[]>([]);
  const [lista, setLista] = useState<IPlanta[]>([]);

  useEffect(() => {
    http
      .get<IPlanta[]>("plantas")
      .then((resposta) => {
        const lista = resposta.data.filter((x) => x.ordem > 0);
        setPlantas(lista);
        setLista(lista);
      })
      .catch((erro) => console.log(erro));
  }, []);

  useEffect(() => {
    const novaLista = plantas.filter((item) => testaFiltro(item.preco));

    function testaFiltro(preco: number) {
      if (filtro !== null) return preco >= filtro[0] && preco <= filtro[1];
      return true;
    }

    const ordenarPropriedadeCrescente = (
      lista: IPlanta[],
      propriedade: "name" | "preco"
    ) => {
      return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
    };

    function ordenar(_lista: IPlanta[]) {
      switch (ordenador) {
        case "name":
          return ordenarPropriedadeCrescente(_lista, "name");
        case "preco":
          return ordenarPropriedadeCrescente(_lista, "preco");
        default:
          return _lista;
      }
    }

    setLista(ordenar(novaLista));
  }, [plantas, filtro, ordenador]);

  return (
    <Grid container spacing={3}>
      {lista?.map((item) => (
        <Grid xs={2} sm={2} md={4} key={uuid()}>
          <Planta planta={item} />
        </Grid>
      ))}
    </Grid>
  );
}
