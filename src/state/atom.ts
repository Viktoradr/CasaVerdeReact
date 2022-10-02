import { IFiltro } from "interfaces/IFiltro";
import { IPlanta } from "interfaces/IPlanta";
import { atom } from "recoil";

export const listaPlantasState = atom<IPlanta[]>({
  key: "listaPlantasState",
  default: [],
});

export const filtroPlantasState = atom<IFiltro>({
  key: "filtroPlantasState",
  default: {
    ordenador: "",
    filtro: [10, 25]
  },
});
