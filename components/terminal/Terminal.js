import React from "react";
import { ReactTerminal } from "react-terminal";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Terminal() {
  const commands = {
    help: "help, projects, photos, yummy, contact",
    cd: (directory) => `changed path to ${directory}`,
  };

  return (
    <Box
      sx={{
        height: 450,
      }}
    >
      <ReactTerminal
        prompt=">"
        commands={commands}
        themes={{
          darkTheme: {
            themeBGColor: "#1e1e1e",
            themeToolbarColor: "#3b3c3c",
            themeColor: "#dadada",
            themePromptColor: "#30b938",
          },
        }}
        theme="darkTheme"
        errorMessage="command not found"
      />
    </Box>
  );
}
