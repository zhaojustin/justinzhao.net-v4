import React from "react";
import { ReactTerminal } from "react-terminal";

import Box from "@mui/material/Box";

export default function Terminal() {
  const commands = {
    help: (
      <div>
        <p>help - lists the available commands</p>
        <p>projects - see the projects i've worked on</p>
        <p>photography - view my portfolio</p>
        <p>yummy - my food/drink recs</p>
        <p>contact - get in touch with me!</p>
      </div>
    ),
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
