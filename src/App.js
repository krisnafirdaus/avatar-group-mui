import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import TotalAvatar from "./components/TotalAvatar";

function App() {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <TotalAvatar />
      </Box>
    </Container>
  );
}

export default App;
