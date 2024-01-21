"use client"
import React from 'react'
import { Container } from "@/components/container";
import { Player } from '@lottiefiles/react-lottie-player';
import About from './About';
import Foot from './Foot';

const Profile = () => {
  return (
    <Container>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      <section className="p-4 min-vh-100">
        <div className='container-fluid'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div className='d-flex flex-column text-center align-items-center align-items-lg-center'>
              <div className='profile-img-area rounded-full'>
                <div className='profile-img-inner rounded-full'></div>
              </div>
              <h1>Hi, I am Kanokpit</h1>
              <h2 className='fw-bold custom-font'>Full Stack Developer</h2>
            </div>

            <div>
              <Player
                src='./json/Animation - 1705830756435.json'
                className="player"
                loop
                autoplay
                style={{ maxHeight: '500px', maxWidth: '500px' }}
              />
            </div>
          </div>
          <About />
          <Foot />
        </div>
      </section>
    </Container>
  )
}

export default Profile