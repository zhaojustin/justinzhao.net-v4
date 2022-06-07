import React from "react";

import { ReactTerminal } from "react-terminal";

import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Help from "./Help";

export default function Terminal() {
  let navigate = useNavigate();

  const commands = {
    help: (
      <div>
        <p>help - lists the available commands</p>
        <p>about - learn a bit more about me</p>
        <p>projects - see the projects i've worked on</p>
        <p>photos - view my photography portfolio</p>
        <p>yummy - my food/drink recs</p>
        <p>contact - get in touch with me!</p>
      </div>
    ),
    about: () => navigate("about"),
    projects: () => navigate("projects"),
    photos: () => navigate("photos"),
    yummy: () => navigate("yummy"),
    contact: () => navigate("contact"),
  };

  const welcome = <p>type 'help' to see the available commands</p>;

  return (
    <Box>
      {/* INSTRUCTIONS */}
      <Box sx={{ pb: 5 }}>
        <Typography variant="body1">
          Type '<strong>help</strong>' in the console to get started!
        </Typography>

        <Box sx={{ pt: { xs: 3, sm: 1 } }}>
          <Box sx={{ fontStyle: "italic" }}>
            <Typography variant="body1">
              or, you can <strong>scroll down</strong> to see the available
              commands.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* TERMINAL */}
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
