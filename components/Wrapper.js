import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Bio from "./Bio";
import Terminal from "./terminal/Terminal";
import Help from "./Help";

export default function Wrapper() {
  return (
    <Box>
      {/*  BIO  */}
      <Box sx={{ pt: 3, pb: 3 }}>
        <Bio />
      </Box>

      {/*  TERMINAL  */}
      <Box sx={{ pt: 3, pb: 3 }}>
        <Terminal />
      </Box>

      {/*  HOW TO  */}
      <Box sx={{ pt: 3, pb: 3 }}>
        <Help />
      </Box>
    </Box>
  );
}
