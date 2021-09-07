import React, { useEffect, useRef } from 'react';
import "./intro.scss";
import { init } from 'ityped';

export default function Intro() {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Backend", "Frontend", "Javascript"]
    });
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/img/avatar.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello World ! Je suis</h2>
          <h1>Coralie Abadie</h1>
          <h3>Développeuse web <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/img/rafter/down-white-rafter.png" alt="" />
        </a>
      </div>
    </div>
  )
}
