import React from "react";
import { Box, Button, Slider, Stack } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

function Skills() {
  const handleResume = () => {
    window.location.href =
      "https://docs.google.com/document/d/1kZYXwODrPliUxgsxs4SC2XbXlKqAA9fz/edit?usp=sharing&ouid=110553180264313736547&rtpof=true&sd=true";
  };

  return (
    <div className="gradient-background4">
      <div className="flex-containerr">
        <div className="black-contain">
          <div className="text-center text-yellow-500 text-5xl">Skills </div>
          <div
            className="flex items-center gap-x-8"
            style={{ marginLeft: "48px", marginTop: "30px" }}
          >
            <img
              className="img-skill"
              width={130}
              style={{ borderRadius: "5px" }}
              src="../public/html.png"
              alt=""
            />
            <img
              className="img-skill"
              width={130}
              style={{ borderRadius: "5px" }}
              src="../public/css.png"
              alt=""
            />
            <img
              className="img-skill"
              width={130}
              style={{ borderRadius: "5px" }}
              src="../public/javas.png"
              alt=""
            />
            <img
              className="img-skill"
              width={130}
              style={{ borderRadius: "5px" }}
              src="../public/react.png"
              alt=""
            />
          </div>
        </div>

        <div className="resume-container">
          <img
            width={200}
            style={{ borderRadius: "6px" }}
            src="../public/resume2.jpg"
            alt=""
          />
          <Button
            variant="outlined"
            onClick={handleResume}
            sx={{
              marginTop: "20px",
              fontSize: "17px",
              color: "white",
              borderColor: "white",
            }}
            startIcon={<ArticleIcon />}
          >
            My Resume
          </Button>
        </div>
      </div>
      <div className="skill-container">
        <Stack direction="row" gap={3}>
          <div className="mx-5">
            <Box width={200}>
              <span className="text-xl text-white">HTML</span>
              <Slider
                defaultValue={90}
                disabled
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "white" }}
              />
            </Box>
            <Box width={200}>
              <span className="text-xl text-white">CSS</span>
              <Slider
                defaultValue={85}
                disabled
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "white" }}
              />
            </Box>
            <Box width={200}>
              <span className="text-xl text-white">JavaScript</span>
              <Slider
                defaultValue={75}
                disabled
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "white" }}
              />
            </Box>
          </div>
          <div className="mx-5">
            <Box width={200}>
              <span className="text-xl text-white">React</span>
              <Slider
                defaultValue={88}
                disabled
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "white" }}
              />
            </Box>
            <Box width={200}>
              <span className="text-xl text-white">Data Structures</span>
              <Slider
                defaultValue={70}
                disabled
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "white" }}
              />
            </Box>
            <Box width={200}>
              <span className="text-xl text-white">Algorithm</span>
              <Slider
                defaultValue={60}
                disabled
                aria-label="Small"
                valueLabelDisplay="auto"
                sx={{ color: "white" }}
              />
            </Box>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Skills;
