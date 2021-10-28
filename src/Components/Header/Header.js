import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Particles from 'react-particles-js';
import photo from '../../Assets/photo1.png';
import './Header.css';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className="Background">
          <Navbar/>
            <div className=" container">
          <div className="hero-section pt-5">
          <div className="text-area">
              <h3>Hi, I’m</h3>
              <h1>MUJAHID ISLAM</h1>
              <h4>Professional Motion Designer</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <div className="mb-5">
                  <span> <BsGithub size="2em"/> </span>
                  <span> <BsFacebook size="2em"/> </span>
                  <span> <BsInstagram size="2em"/> </span>
                  <span> <BsTwitter size="2em"/> </span>
                  <span> <BsLinkedin size="2em"/> </span>
              </div>
          </div>
          <div className="img-area">
              <img src={photo} alt="" />
          </div>
          </div>
          <Particles className="Particles"
        params={{
          "particles": {
              "number": {
                  "value": 160,
                  "density": {
                      "enable": false
                  }
              },
              "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                      "speed": 4,
                      "size_min": 0.3
                  }
              },
              "line_linked": {
                  "enable": false
              },
              "move": {
                  "random": true,
                  "speed": 1,
                  "direction": "top",
                  "out_mode": "out"
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "bubble"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "repulse"
                  }
              },
              "modes": {
                  "bubble": {
                      "distance": 250,
                      "duration": 2,
                      "size": 0,
                      "opacity": 0
                  },
                  "repulse": {
                      "distance": 400,
                      "duration": 4
                  }
              }
          } 
  }} />
      </div>
        </div>
        
        
    );
};

export default Header;