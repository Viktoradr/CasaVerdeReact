import { OrdenadorPlanta } from "types/OrdenadorPlanta";

export interface FormularioProps {
    ordenador: string,
    setOrdenador: React.Dispatch<OrdenadorPlanta>
    filtro: number[],
    setFiltro: any //React.Dispatch<OrdenadorPlanta>
}