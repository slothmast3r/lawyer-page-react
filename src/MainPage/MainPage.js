import { FormControl, InputLabel, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function MainPage() {
  const [age, setAge] = useState(10);
  function handleChange(event, value) {
    setAge(value.props.value);
  }

  return (
    <Box>
      <h1>Znajdź </h1>
      <h2>Najlepsi </h2>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-search" label="Search field" type="search" />
    </Box>
  );
}
