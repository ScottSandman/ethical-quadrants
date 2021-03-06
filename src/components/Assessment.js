import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import AssessmentStepper from "./AssessmentStepper";

const Assessment = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <AssessmentStepper />
      </Container>
    </React.Fragment>
  );
};

export default Assessment;
