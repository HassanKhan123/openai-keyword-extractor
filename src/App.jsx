import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <Box bg='blue.600' color='white' height={"100vh"} paddingTop={130}>
      <Container maxW={"3xl"} centerContent>
        <Header />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
