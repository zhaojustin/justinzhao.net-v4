import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ProfilePicture from "../assets/profilepicture.JPG";
import { YellowBox } from "react-native";

export default function Bio() {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "start", md: "center" }}
        spacing={{ xs: 2, md: 7 }}
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
        <Box sx={{ sm: { pb: 0 }, md: { pb: 2 } }}>
          <Typography variant="h4">Justin Zhao</Typography>
          <Typography variant="subtitle2">
            NYU Stern School of Business
          </Typography>
          <Typography variant="subtitle2">
            Programmer, Photographer, Pokémon Trainer
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ pt: 7 }}>
        <Typography variant="body1">
          Type '<strong>help</strong>' in the console to get started!
        </Typography>

        <Box sx={{ pt: { xs: 3, sm: 0 } }}>
          <Typography variant="body2">
            or, you can <strong>scroll down</strong> to see the available
            commands.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
