import { useRecoilValue } from "recoil"
import { plantasFiltradasState } from "state/selectors"

export const useListaPlantas = () => {
    return useRecoilValue(plantasFiltradasState)
}