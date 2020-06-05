import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Stepper from "./Stepper";

const Assessment = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Stepper />
      </Container>
    </React.Fragment>
  );
};

export default Assessment;
