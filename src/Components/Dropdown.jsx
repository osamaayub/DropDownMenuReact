/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from "react";
import { Select, FormControl, Box, MenuItem } from "@mui/material";

function Dropdown({ setFilteredData, data }) {
  const handleChange = (event) => {
    event.target.value;
    const filteredPhotos = data.photos.filter(
      (value) => value.heading === event.target.value
    );
    setFilteredData(filteredPhotos);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            label="Photos"
            style={{ width: "500px" }}
            onChange={handleChange}
          >
            {data.photos.map((value) => {
              return (
                <MenuItem value={value.heading} key={value.id}>
                  {value.heading}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default Dropdown;
