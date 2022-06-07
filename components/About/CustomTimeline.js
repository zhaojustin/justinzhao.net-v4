import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import MoodysLogo from "../../assets/timeline/moodys.png";
import PeratonLogo from "../../assets/timeline/peraton.png";
import PolytureLogo from "../../assets/timeline/polyture.png";
import TsmLogo from "../../assets/timeline/tsm.png";
import FlpLogo from "../../assets/timeline/flp.jpeg";
import SternLogo from "../../assets/timeline/stern.jpeg";

export default function CustomTimeline() {
  return (
    <Box>
      <Timeline position="alternate">
        {/* May 2002 - Born */}

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2002
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
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
            <TimelineDot />
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

        {/* 2016 - Started high school */}

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2016
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Started High School</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mb: 5 }}
            >
              Fullerton, CA
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* 2019 - Peraton */}

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {/* CONTENT */}
            <Stack direction="column">
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
            </Stack>
          </TimelineContent>
        </TimelineItem>

        {/* 2020 - NYU Stern */}

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {/* CONTENT */}
            <Stack
              direction="column"
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Box sx={{ width: { xs: "100%", sm: 250 } }}>
                <img src={SternLogo} width="100%" />
              </Box>

              <Box sx={{ pl: 1, mb: 5, width: "100%" }}>
                {/* HEADING */}
                <Typography sx={{ mt: 1 }}>B.S. Finance</Typography>
                <Typography>B.A. Computer Science</Typography>

                {/* LOCATION */}
                <Typography sx={{ mb: 1 }} variant="subtitle2">
                  New York, NY
                </Typography>
              </Box>
            </Stack>
          </TimelineContent>
        </TimelineItem>

        {/* 2020 - Polyture */}

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {/* CONTENT */}
            <Stack>
              <Box sx={{ width: { xs: "100%", sm: 175 } }}>
                <img src={PolytureLogo} width="100%" />
              </Box>

              <Box sx={{ pl: 1, mb: 5, width: "100%" }}>
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
            </Stack>
          </TimelineContent>
        </TimelineItem>

        {/* 2021 - TSM */}

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {/* CONTENT */}
            <Stack
              direction="column"
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Box sx={{ width: { xs: "100%", sm: 125 } }}>
                <img src={TsmLogo} width="100%" />
              </Box>

              <Box sx={{ pl: 1, mb: 5, width: "100%" }}>
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
                  - managed official Chinese social media
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  - researched esports industry trends
                </Typography>
              </Box>
            </Stack>
          </TimelineContent>
        </TimelineItem>

        {/* 2021 - Founders Legacy Partners */}

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {/* CONTENT */}
            <Stack>
              <Box sx={{ width: { xs: "100%", sm: 150 } }}>
                <img src={FlpLogo} width="100%" />
              </Box>

              <Box sx={{ pl: 1, mb: 5, width: "100%" }}>
                {/* HEADING */}
                <Typography sx={{ mt: 1 }} variant="h6">
                  Private Equity Intern
                </Typography>

                {/* LOCATION */}
                <Typography sx={{ mb: 1 }} variant="subtitle2">
                  Anaheim, CA
                </Typography>

                {/* DESCRIPTION */}
                <Typography variant="subtitle2" color="text.secondary">
                  - spearheaded communications with founders
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  - analyzed businesses aligned with mission
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  - performed basic due diligence
                </Typography>
              </Box>
            </Stack>
          </TimelineContent>
        </TimelineItem>

        {/* 2022 - Moodys */}

        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {/* CONTENT */}
            <Stack
              direction="column"
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Box sx={{ width: { xs: "100%", sm: 175 } }}>
                <img src={MoodysLogo} width="100%" />
              </Box>

              <Box sx={{ pl: 1, mb: 5, width: "100%" }}>
                {/* HEADING */}
                <Typography sx={{ mt: 1 }} variant="h6">
                  SWE Intern
                </Typography>

                {/* LOCATION */}
                <Typography sx={{ mb: 1 }} variant="subtitle2">
                  New York, NY
                </Typography>

                {/* DESCRIPTION */}
                <Typography variant="subtitle2" color="text.secondary">
                  - implemented various business data tools
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  - helped migrate and update old repositories
                </Typography>
              </Box>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
