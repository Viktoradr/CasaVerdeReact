import { SliderThumb } from "@mui/material";
import { LinearScale } from "@mui/icons-material";

interface SliderThumbComponentProps extends React.HTMLAttributes<unknown> {}

export function SliderThumbComponent(props: SliderThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
        {children}
        <LinearScale />
    </SliderThumb>
  );
}