import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormularioProps } from "./Iformulario";
import opcoes from "data/ordernador.json";
import { OrdenadorPlanta } from "types/OrdenadorPlanta";
import { Paper, Stack, Typography } from "@mui/material";
import { SliderCurrency } from "./styles";
import { SliderThumbComponent } from "./slider";

export default function Formulario({
  ordenador,
  setOrdenador,
  filtro,
  setFiltro,
}: FormularioProps) {
  const ordernarPorChange = (event: SelectChangeEvent) => {
    setOrdenador(event.target.value as OrdenadorPlanta);
  };

  const filtrarPorChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    setFiltro(value);
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
            value={ordenador}
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
            <Typography>R$ {filtro[0]}</Typography>
          </Typography>
          <SliderCurrency
            components={{ Thumb: SliderThumbComponent }}
            getAriaLabel={(index: any) =>
              index === 0 ? "Minimum price" : "Maximum price"
            }
            //defaultValue={[15, 20]}
            value={filtro}
            step={1}
            min={10}
            max={100}
            onChange={filtrarPorChange}
          />
          <Typography variant="h5" sx={{ width: 120 }} align="center">
            Máx <br />
            <Typography>R$ {filtro[1]}</Typography>
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
