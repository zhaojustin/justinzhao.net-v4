import React from "react";

import { useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

export default function Photos() {
  let navigate = useNavigate();

  return (
    <Fade in={true}>
      <Box>
        <Button variant="text" color="primary" onClick={() => navigate("/")}>
          <ArrowBackIosNewOutlinedIcon />
          <Typography sx={{ pl: 1 }}>Back</Typography>
        </Button>

        <Typography variant="h5">Photos</Typography>
      </Box>
    </Fade>
  );
}
