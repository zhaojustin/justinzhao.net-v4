import React from "react";

import { ReactTerminal } from "react-terminal";

import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";

import Help from "./Help";

export default function Terminal() {
  let navigate = useNavigate();

  const commands = {
    help: (
      <div>
        <p>help - lists the available commands</p>
        <p>projects - see the projects i've worked on</p>
        <p>photos - view my photography portfolio</p>
        <p>yummy - my food/drink recs</p>
        <p>contact - get in touch with me!</p>
      </div>
    ),
    projects: () => navigate("projects"),
    photos: () => navigate("photos"),
    yummy: () => navigate("yummy"),
    contact: () => navigate("contact"),
  };

  const welcome = <p>type 'help' to see the available commands</p>;

  return (
    <Box>
      <Box
        sx={{
          height: 450,
        }}
      >
        <ReactTerminal
          prompt=">"
          commands={commands}
          welcomeMessage={welcome}
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

      {/*  HOW TO  */}
      <Box sx={{ pt: 3, pb: 3 }}>
        <Help />
      </Box>
    </Box>
  );
}
