import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const Question = ({ question }) => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{question.question}</FormLabel>
      <RadioGroup
        aria-label="Question"
        name="question"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="a"
          control={<Radio />}
          label={question.a}
          size="small"
        />
        <FormControlLabel
          value="b"
          control={<Radio />}
          label={question.b}
          size="small"
        />
        <FormControlLabel
          value="c"
          control={<Radio />}
          label={question.c}
          size="small"
        />
        <FormControlLabel
          value="d"
          control={<Radio />}
          label={question.d}
          size="small"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default Question;
