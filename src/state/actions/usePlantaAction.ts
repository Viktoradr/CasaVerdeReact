import http from "common/http";
import { IPlanta } from "interfaces/IPlanta";
import { useSetRecoilState } from "recoil";
import { listaPlantasState } from "state/atom";

export default function usePlantaAction() {

    const controller = '/plantas'
    const setPlantas = useSetRecoilState<IPlanta[]>(listaPlantasState)

    return {
        getAll
    }

    function getAll() {
        return http.get<IPlanta[]>(controller).then(res => {
            console.log(res)
            setPlantas(res.data);
        })
    }
}