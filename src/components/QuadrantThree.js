import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const QuadrantThree = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography
          component="div"
          style={{
            backgroundColor: "#cfe8fc",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          Quadrant III
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default QuadrantThree;
