
"use client"
import React from 'react';
import styles from './about.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord, FaSpotify, FaSteam } from 'react-icons/fa';
import { HackerBackground } from './background';
import LocalNav from '../../components/ui/LocalNav';
import Link from 'next/link';

const About = () => {
  return (
    <>
    <LocalNav/>
    <div className="rJk3rContains">
        <div className='rjk3r-art' />
      </div>
    <div className="Aboutcontainer">
      <div className="Aboutcard">
        <div className="Aboutheader">
          <div className="Aboutavatar"/>
          <h1 className="Aboutname">rJk3r</h1>
          <p className="Abouttitle">Designer, Software Engineer, Sound Producer.</p>
        </div>
        <div className="Aboutbody">
          <p className="Aboutdescription">
            Software engineer, who love C++, ASM, C#,  react, PHP, SQL and other in programming.
            I love to solve tasks, get new experience from development. I love UE5.
            More than 5 years I work with UI, branding, logo, style. Think I'm not coding?
            Check my github! Today you can check my spotify, I love to write s-s-sssound.
          </p>
          <div className="Aboutstats">
            <div className="Aboutstat">
              <p className="Aboutstatvalue">20+</p>
              <p className="Aboutstatlabel">Projects</p>
            </div>
            <div className="Aboutstat">
              <p className="Aboutstatvalue">10+</p>
              <p className="Aboutstatlabel">Years in design</p>
            </div>
            <div className="Aboutstat">
              <p className="Aboutstatvalue">3+</p>
              <p className="Aboutstatlabel">Years in C++ dev</p>
            </div>
          </div>
        </div>
        <div className="Aboutfooter">
        <Link href="/works">
          <button href="/projects" className="Aboutseemorebutton">Projects</button>
        </Link>
        <Link href="/">
          <button href="/" className="Aboutcontactbutton">Back to main</button>
        </Link>
        </div>
        <div className="Aboutsociallinks">
            <Link href="https://github.com/rJk3r">
                <div className="Aboutsociallink"><FaGithub /></div>
            </Link>
            <Link href="https://steamcommunity.com/id/TOOREDJOKER/">
                <div className="Aboutsociallink"><FaSteam /></div>
            </Link>
            <Link href="https://open.spotify.com/artist/587dVFwfIxtInZ1bHMdAbb?si=bdb55297930a472e">
                <div className="Aboutsociallink"><FaSpotify /></div>
            </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
