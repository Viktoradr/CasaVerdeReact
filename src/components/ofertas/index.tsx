import Planta from "components/planta";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { v4 as uuid } from "uuid";
import { useListaPlantas } from "state/hooks/useListaPlantas";
import { useEffect } from "react";
import usePlantaAction from "state/actions/usePlantaAction";

export default function Ofertas() {
  
  const plantas = useListaPlantas();
  const actions = usePlantaAction();

  useEffect(() => {
    actions.getAll();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={3}>
      {plantas?.map((item) => (
        <Grid xs={2} sm={2} md={4} key={uuid()}>
          <Planta planta={item} />
        </Grid>
      ))}
    </Grid>
  );
}
