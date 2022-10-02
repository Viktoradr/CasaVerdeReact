import { useRecoilValue } from "recoil"
import { filtroPlantasState } from "state/atom"

export const useFiltroDefault = () => {
    return useRecoilValue(filtroPlantasState)
}