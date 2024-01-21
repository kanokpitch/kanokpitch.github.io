import React from 'react';
import './Footer.css';

export default function App() {
  return (
    <div className='profile-foot mt-2'>
      <div className='flex align-items-center'>
        <a href='https://github.com/kanokpit-yowaratch'>
          <img className='m-2' src="https://cdn.cdnlogo.com/logos/g/31/github.svg" alt="git" width="35" height="35" />
        </a>
        <a href='https://www.linkedin.com/in/kanokpit/'>
          <img className='m-2' src='https://cdn.cdnlogo.com/logos/l/37/linkedin.svg' width="100" height="auto" />
        </a>
        <a href='https://www.youtube.com/channel/UCiDXrIxlrmBUIerxerOCgMA'>
          <img className='m-2' src="https://cdnlogo.com/logos/n/64/new-youtube.svg" alt="git" width="100" height="auto" />
        </a>
      </div>
    </div>
  );
}