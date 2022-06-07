import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ProfilePicture from "../assets/profilepicture.JPG";

export default function Bio() {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "start", sm: "center" }}
        spacing={{ xs: 2, sm: 7 }}
      >
        {/* Profile Picture */}
        <Box>
          <img
            style={{
              height: 125,
              borderRadius: "100%",
            }}
            src={ProfilePicture}
          />
        </Box>

        {/* Short Bio */}
        <Box>
          <Typography variant="h4">Justin Zhao</Typography>
          <Typography variant="subtitle2">
            NYU Stern School of Business
          </Typography>
          <Typography variant="subtitle2">
            Programmer, Photographer, Pokémon Trainer
          </Typography>
        </Box>
      </Stack>

      {/* Divider */}
      <Divider sx={{ pt: 3 }} />
    </Box>
  );
}
