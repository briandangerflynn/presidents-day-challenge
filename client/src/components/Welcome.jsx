import React from 'react';
import { Link } from 'react-router-dom';


export default function Welcome() {
  return (
    <div id="welcome">
      <img src="https://res.cloudinary.com/briandanger/image/upload/v1580784297/Screen_Shot_2020-02-03_at_5.23.00_PM_cuiy6z.png" alt="Founding Boozehounds" />
      <Link to="/rules"><button>How to Play</button></Link>
      <Link to="/register" id="play-now"><button>Play Now</button></Link>
    </div >
  )
}