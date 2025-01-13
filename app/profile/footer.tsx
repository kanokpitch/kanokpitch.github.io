import React from 'react';
import './Footer.css';
import Image from 'next/image'

export default function App() {
  return (
    <div className='profile-foot'>
      <div className='flex align-items-center'>
        <a href='https://github.com/kanokpit-yowaratch'>
          <Image className='m-2' src="https://cdn.cdnlogo.com/logos/g/31/github.svg" alt="git" width="35" height="35" />
        </a>
        <a href='https://www.linkedin.com/in/kanokpit/'>
          <Image className='m-2' src='https://cdn.cdnlogo.com/logos/l/37/linkedin.svg' alt="linkedin" width="100" height="100" />
        </a>
        <a href='https://www.youtube.com/channel/UCiDXrIxlrmBUIerxerOCgMA'>
          <Image className='m-2' src="https://cdnlogo.com/logos/n/64/new-youtube.svg" alt="youtube" width="100" height="100" />
        </a>
      </div>
    </div>
  );
}