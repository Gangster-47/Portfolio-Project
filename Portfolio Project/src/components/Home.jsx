import { Avatar } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from '@mui/icons-material/YouTube';

function Home() {
  const imgarray = [
    "../public/workshop2.jpg",
    "../public/basketball.jpeg",
    "../public/yash2.jpeg",
    "../public/cl1.jpeg",
    "../public/impression2.jpg",
    "../public/orientation.jpg",
  ];
  const [imgindex, setImageindex] = useState(0);

  const handleLeftClick = () => {
    if (imgindex == 0) {
      setImageindex(imgarray.length - 1);
    } else {
      setImageindex(imgindex - 1);
    }
  };
  const handleRightClick = () => {
    if (imgindex == imgarray.length - 1) {
      setImageindex(0);
    } else {
      setImageindex(imgindex + 1);
    }
  };

  const texts = ["Hi I am Web Developer!", "Hi I am Game Developer!"];
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(65);

  useEffect(() => {
    const handleTextChange = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setIsDeleting(true);
        }
      }
    };
    const timer = setInterval(handleTextChange, typingSpeed);

    return () => clearInterval(timer);
  }, [displayText, isDeleting, textIndex, typingSpeed]);

  const handleGithub = () => {
    window.location.href ="https://github.com/Gangster-47"
  };

 const handleDiscord =()=>
 {
  window.location.href="https://discord.gg/6q6RBJFXdh"
 }

  return (
    <div className="width-full">
      <div className="gradient-background1">
        <div className="avatar-box">
          <Avatar
            className="avatarr"
            src="..\public\profilepic1.jpeg"
            sx={{ width: "300px", height: "300px" }}
          />
          <div className="container">
            <div className="text-white text-8xl my-5">Yash Rautela</div>
            <span className="text-animation text-white text-5xl mx-3">
              {displayText}
            </span>
          </div>
        </div>
        <div className="about-photo-container" >
          <div>
            <div className="about-box">About Me</div>
            <div className="about-content">
              Hello! My name is <span className="span-text">Yash Rautela</span>,
              and I am currently a{" "}
              <span className="span-text">Third Year </span> student at{" "}
              <span className="span-text">
                Jaypee Institute of Information Technology
              </span>
              , pursuing a BTech degree in{" "}
              <span className="span-text">Compute Science.</span> With a passion
              for computer science, I am constantly seeking opportunities to
              apply my knowledge and skills in real-world projects and
              internships.
            </div>
          </div>
          <div className="college-container">
            <div className="college-img">College Gallery</div>
            <div className="flex items-center my-6">
              <Button
                color="success"
                startIcon={
                  <ArrowCircleLeftIcon sx={{ height: "50px", width: "50px" }} />
                }
                onClick={handleLeftClick}
                variant="text"
                sx={{ width: "80px", height: "80px" }}
              />
              <img
                className="img-layout"
                width={300}
                src={imgarray[imgindex]}
              />
              <Button
                color="success"
                startIcon={
                  <ArrowCircleRightIcon
                    sx={{ height: "50px", width: "50px" }}
                  />
                }
                onClick={handleRightClick}
                variant="text"
                sx={{ width: "80px", height: "80px" }}
              />
            </div>
          </div>
        </div>
        <div className="links">
          <Button
          variant="outlined"
            onClick={handleGithub}
            sx={{ marginTop: "20px", fontSize: "20px", color: "white",marginRight:"15px" }}
            startIcon={<GitHubIcon sx={{ width: "20px", height: "20px" }} />}
          >
            Github
          </Button>
          <Button
          variant="outlined"
            onClick={handleDiscord}
            sx={{ marginTop: "20px", fontSize: "20px", color: "white",marginRight:"15px" }}
            startIcon={<img src="../public/discord2.jpg" alt="Icon" style={{ width: 26, height: 26,borderRadius:"50%" }} />}
          >
           Discord
          </Button>
          <Button
          variant="outlined"
            onClick={handleGithub}
            sx={{ marginTop: "20px", fontSize: "20px", color: "white",marginRight:"15px" }}
            startIcon={<YouTubeIcon sx={{ width: "20px", height: "20px" }} />}
          >
            Youtube
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
