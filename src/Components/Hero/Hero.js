import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';
import { FaDownload, FaEnvelope } from "react-icons/fa";
import photo from '../../Assets/photo2.png';
import './Hero.css';
const Hero = () => {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-around align-items-center hero-container">
                <div className="col-md-6 hero-img mb-3"> <img src={photo} alt="" /> </div>
                <div className="col-md-6 hero-details p-5">
                    <h3>Hi, I’m</h3>
                    <h3 className="mb-3" style={{color: '#fffa87'}}>I’m Creative Motion Designer</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <hr className="mt-5" />
                    <Stack direction="row" spacing={4}>
                        <Button variant="contained" size="large" endIcon={<FaDownload/>} style={{backgroundColor: '#fffa87', color: '#161616'}}>Resume</Button>
                        <Button variant="contained" size="large" endIcon={<FaEnvelope/>} style={{backgroundColor: '#fffa87', color: '#161616'}}>Hire Me!</Button>
                    </Stack>
                    
                </div>
        </div>
        </div>
    );
};

export default Hero;