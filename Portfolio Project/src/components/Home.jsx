import { Avatar } from '@mui/material'
import React from 'react'
import { useState,useEffect } from 'react'

function Home() {
  const texts = ["Hi I am Web Developer!","Hi I am Game Developer!"];
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

  return (
    <div className='height-full'>
    <div className="gradient-background1">
    <div className='avatar-box'>
        <Avatar className='avatarr' src="..\public\profilepic1.jpeg" sx={{width:"300px",height:"300px"}}/>
        <div className='container'>
        <div className="text-white text-8xl my-5">Yash Rautela</div>
        <span className="text-animation text-white text-5xl mx-3">{displayText}</span>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Home
