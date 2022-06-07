import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Help() {
  return (
    <Box>
      <Box sx={{ pt: 3 }}>
        <Grid container>
          {/* LEFT */}
          <Grid item xs={3}>
            <Box>
              <Typography variant="body2">help</Typography>
              <Typography variant="body2">about</Typography>
              <Typography variant="body2">projects</Typography>
              <Typography variant="body2">photos</Typography>
              <Typography variant="body2">yummy</Typography>
              <Typography variant="body2">contact</Typography>
            </Box>
          </Grid>
          {/* RIGHT */}
          <Grid item xs={9}>
            <Box>
              <Typography variant="body2">see available commands</Typography>
              <Typography variant="body2">learn a bit more about me</Typography>
              <Typography variant="body2">projects i've worked on</Typography>
              <Typography variant="body2">my photography portfolio</Typography>
              <Typography variant="body2">food/drink recs</Typography>
              <Typography variant="body2">get in touch</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
