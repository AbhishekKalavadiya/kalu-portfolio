import React from 'react'
import AboutMe from '../components/about-me/AboutMe'
import Intro from '../components/intro/Intro'
import MyProject from '../components/project/MyProject'
import Skills from '../components/skills/Skills'
import './dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <Intro />
            <AboutMe />
            <MyProject />
            <Skills />
        </div>
    )
}

export default Dashboard
