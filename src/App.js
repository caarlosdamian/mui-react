import styled from "@emotion/styled";
import { Button } from "@mui/material";

function App() {
  const BlueButton = styled(Button)({
    background: "skyblue",
    color: "#888",
    margin: "5",
    "&.:hover": {
      backgroundColor: "lightblue",
    },
    "&:disable": {
      backgroundColor: "gray",
    },
  });
  return (
    <div className="App">
      <Button variant="text" color="secondary">
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <BlueButton variant="contained">My Unique Button</BlueButton>
      <Button
        variant="contained"
        sx={{
          background: "skyblue",
          color: "#888",
          margin: "5",
          "&.:hover": {
            backgroundColor: "lightblue",
          },
          "&:disable": {
            backgroundColor: "gray",
          },
        }}
      >
        My Unique Button
      </Button>
    </div>
  );
}

export default App;
