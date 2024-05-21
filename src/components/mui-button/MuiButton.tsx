import { Button } from "@mui/material";
import "./MuiButton.css";

interface MuiButtonProps {
  description: string
}

export const MuiButton = ({ description }: MuiButtonProps) => {
  return (
    <>
      <Button style={{margin:"20px", backgroundColor:"#008c99"}} variant="contained">{description}</Button>
    </>

  )
}

export default MuiButton;
