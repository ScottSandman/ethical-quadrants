import React from "react";
import Typography from "@material-ui/core/Typography";

import QuadrantOne from "./QuadrantOne";
import QuadrantTwo from "./QuadrantTwo";
import QuadrantThree from "./QuadrantThree";
import QuadrantFour from "./QuadrantFour";

const Results = () => {
  return (
    <ol>
      <li>
        <Typography variant="h6" gutterBottom>
          Would you like the results emailed to you?
        </Typography>
      </li>
      <li>
        <Typography variant="h6" gutterBottom>
          Would you like to learn how your Quadrant informs how you make ethical
          decisions?
        </Typography>
      </li>
      <li>
        <Typography variant="h6" gutterBottom>
          Would you like to understand how to interact with other Ethical
          Quadrants?
        </Typography>
      </li>
    </ol>
  );
};

export default Results;
