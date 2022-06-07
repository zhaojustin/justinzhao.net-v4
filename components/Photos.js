import React from "react";

import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Slide from "@mui/material/Slide";

import Fade from "@mui/material/Fade";
export default function Photos() {
  let navigate = useNavigate();
  const containerRef = React.useRef(null);

  return (
    <Slide direction="up" in={true} container={containerRef.current}>
      <Fade in={true}>
        <Box>
          <Button variant="text" color="primary" onClick={() => navigate("/")}>
            <ArrowBackIosNewOutlinedIcon />
            <Typography sx={{ pl: 1 }}>Back</Typography>
          </Button>

          <Typography variant="h5">Photos</Typography>
        </Box>
      </Fade>
    </Slide>
  );
}
