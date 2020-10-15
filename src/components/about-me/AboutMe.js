import React from 'react'
import ParticlesMove from '../ParticlesMove'

import './about-me.css'

function AboutMe() {

    return (
        <div className='about_me' id="about-me">
            <ParticlesMove />
            <div className="parallax_3">
                <div className="aboutme_card">
                    <h1 className='aboutme_h1'>About Me:</h1>
                    <div className='aboutme_hr'></div>
                    <div className='aboutme_data'> Hello all, I had compeletd my graduaction from Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT), Gandhinagar, Gujarat. I am Full-stack Developer with MERN skills. Worked in many projects and also worked with mobile development by React-Native. Recently I am working in GraphQL technology and find very interesting. I am hardworking and like to solve problems. I am great Team player. Apart from tech-stacks I had experience in Market and Sales, I had worked as a Head of Market and Sales department in on of the institute committee in my graduation time.  </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
