import { Container } from "@mui/system";
import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const App = () => (
  <Container maxWidth="100vw" style={{ padding: "0px" }} className="App">
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={route.component} key={index} />
      ))}
    </Routes>
  </Container>
);

export default App;
