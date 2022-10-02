import { IPlanta } from "interfaces/IPlanta";
import { selector } from "recoil";
import { filtroPlantasState, listaPlantasState } from "state/atom";

export const plantasFiltradasState = selector({
  key: "plantasFiltradasState",
  get: ({ get }) => {
    const opcao = get(filtroPlantasState);
    const plantas = get(listaPlantasState);
    const listaFiltrada = plantas.filter((planta) => {
      if (planta.ordem === 0) {
        return false;
      }

      if (planta.preco < opcao.filtro[0] || planta.preco > opcao.filtro[1]) {
        return false;
      }

      return true;
    });

    const ordenar = (_lista: IPlanta[]) => {
      switch (opcao.ordenador) {
        case "name":
          return ordenarPropriedadeCrescente(_lista, "name");
        case "preco":
          return ordenarPropriedadeCrescente(_lista, "preco");
        default:
          return _lista;
      }
    };

    const ordenarPropriedadeCrescente = (
      _lista: IPlanta[],
      propriedade: "name" | "preco"
    ) => {
      return _lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
    };

    return ordenar(listaFiltrada);
  },
});
