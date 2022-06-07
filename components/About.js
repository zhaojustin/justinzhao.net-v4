import React from "react";

import { useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import TerrapinLogo from "../assets/timeline/terrapinlogo.JPG";
import PeratonLogo from "../assets/timeline/peraton.png";
import PolytureLogo from "../assets/timeline/polyture.png";
import TsmLogo from "../assets/timeline/tsm.png";
import MoodysLogo from "../assets/timeline/moodys.png";

export default function About() {
  let navigate = useNavigate();

  return (
    <Fade in={true}>
      <Box>
        <Button variant="text" color="primary" onClick={() => navigate("/")}>
          <ArrowBackIosNewOutlinedIcon />
          <Typography sx={{ pl: 1 }}>Back</Typography>
        </Button>

        <Timeline position="alternate">
          {/* May 2002 - Born */}

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              May 2002
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Began existing</TimelineContent>
          </TimelineItem>

          {/* 2009 - Terrapin Logo */}

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2009
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>First line of code written</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mb: 5 }}
              >
                Terrapin Logo in 2nd grade computer lab
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* 2014 - Started Learning Java */}

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2014
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>Began learning Java</Typography>
            </TimelineContent>
          </TimelineItem>

          {/* 2017 - First game */}

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              2017
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography>Made Plants vs. Zombies</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mb: 5 }}
              >
                using LibGDX Java library
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* 2019 - Peraton */}

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              June 2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box sx={{ width: { xs: "100%", sm: 175 } }}>
                <img src={PeratonLogo} width="100%" />
              </Box>
              <Box sx={{ pl: 1, mb: 5, width: "100%" }}>
                {/* HEADING */}
                <Typography sx={{ mt: 1 }} variant="h6">
                  SWE Intern
                </Typography>

                {/* LOCATION */}
                <Typography sx={{ mb: 1 }} variant="subtitle2">
                  Monrovia, CA
                </Typography>

                {/* DESCRIPTION */}
                <Typography variant="subtitle2" color="text.secondary">
                  - redesigned ui of intranet
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  - improved efficiency of searching methodologies
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* 2020 - Polyture */}

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              May 2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Box sx={{ width: { xs: "100%", sm: 175 } }}>
                  <img src={PolytureLogo} width="100%" />
                </Box>
                <Box sx={{ pr: 1, mb: 5, width: "100%" }}>
                  {/* HEADING */}
                  <Typography sx={{ mt: 1 }} variant="h6">
                    SWE Intern
                  </Typography>

                  {/* LOCATION */}
                  <Typography sx={{ mb: 1 }} variant="subtitle2">
                    Santa Clara, CA
                  </Typography>

                  {/* DESCRIPTION */}
                  <Typography variant="subtitle2" color="text.secondary">
                    - front end ui/ux design
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    - used React / Redux
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>

          {/* 2021 - TSM */}

          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              April 2021
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <Box sx={{ width: { xs: "100%", sm: 120 } }}>
                  <img src={TsmLogo} width="100%" />
                </Box>
                <Box sx={{ pr: 1, mb: 5, width: "100%" }}>
                  {/* HEADING */}
                  <Typography sx={{ mt: 1 }} variant="h6">
                    Marketing Intern
                  </Typography>

                  {/* LOCATION */}
                  <Typography sx={{ mb: 1 }} variant="subtitle2">
                    Los Angeles, CA
                  </Typography>

                  {/* DESCRIPTION */}
                  <Typography variant="subtitle2" color="text.secondary">
                    - managed Chinese social media (Weibo, Bilibili, etc)
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    - live translator for League of Legends team
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Fade>
  );
}
