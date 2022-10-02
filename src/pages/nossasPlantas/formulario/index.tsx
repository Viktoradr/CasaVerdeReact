import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import opcoes from "data/ordernador.json";
import { OrdenadorPlanta } from "types/OrdenadorPlanta";
import { Paper, Stack, Typography } from "@mui/material";
import { SliderCurrency } from "./styles";
import { SliderThumbComponent } from "./slider";
import { IFiltro } from "interfaces/IFiltro";
import { useSetRecoilState } from "recoil";
import { filtroPlantasState } from "state/atom";
import { useFiltroDefault } from "state/hooks/useFiltroDefault";

export default function Formulario() {

  const opcao = useFiltroDefault()
  const setFiltroPlantaState = useSetRecoilState<IFiltro>(filtroPlantasState)

  const ordernarPorChange = (event: SelectChangeEvent) => {
    const op = {...opcao}
    op.ordenador = event.target.value as OrdenadorPlanta
    setFiltroPlantaState(op)
  };

  const filtrarPorChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    if (Array.isArray(value)) {
      const op = {...opcao}
      op.filtro = value as number[]
      setFiltroPlantaState(op)
    }
  };

  return (
    <Paper elevation={2} sx={{ mb: 5, p: 3 }}>
      <Stack spacing={2} direction="row" alignItems="center">
        <FormControl sx={{ minWidth: 220 }}>
          <InputLabel id="slcOrder">Ordernar Por</InputLabel>
          <Select
            label="Ordernar Por"
            labelId="slcOrder"
            id="slcOrder"
            value={opcao.ordenador}
            onChange={ordernarPorChange}
            autoWidth
          >
            {opcoes.map((opcao) => (
              <MenuItem value={opcao.value} key={opcao.value}>
                {opcao.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          sx={{ m: 2, width: "100%" }}
        >
          <Typography variant="h5" sx={{ width: 120 }} align="center">
            Mín <br />
            <Typography>R$ {opcao.filtro[0]}</Typography>
          </Typography>
          <SliderCurrency
            components={{ Thumb: SliderThumbComponent }}
            getAriaLabel={(index: any) =>
              index === 0 ? "Minimum price" : "Maximum price"
            }
            //defaultValue={[15, 20]}
            value={opcao.filtro}
            step={1}
            min={10}
            max={100}
            onChange={filtrarPorChange}
          />
          <Typography variant="h5" sx={{ width: 120 }} align="center">
            Máx <br />
            <Typography>R$ {opcao.filtro[1]}</Typography>
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}