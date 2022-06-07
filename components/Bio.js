import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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

      <Box sx={{ pt: 6 }}>
        <Typography variant="body1">
          Type '<strong>help</strong>' in the console to get started!
        </Typography>

        <Box sx={{ pt: { xs: 3, sm: 0 } }}>
          <Box sx={{ fontStyle: "italic" }}>
            <Typography variant="body1">
              or, you can <strong>scroll down</strong> to see the available
              commands.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
