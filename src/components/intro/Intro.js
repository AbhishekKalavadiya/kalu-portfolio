import React from 'react'
import  { Link as Scroll } from 'react-scroll'
import GLIicons from '../icons/GLIicons'
import './intro.css'

function Intro() {
    return (
        <div className='intro'>
            <div className="parallax_1">
                <div className="intro_all">
                    <div className='intro_card'>
                        <div className='intro_section1'>
                            <h1 style={{fontWeight: "750"}}>Hi,</h1>
                            <h1 className='intro_h1' style={{fontWeight: "700"}}>I'm <span>Abhishek Kalavadiya</span></h1>
                            <h1 className='intro_devloper'>Full-Stack Developer</h1>
                            <span className="intro_icons"><GLIicons /></span>
                        </div>
                    </div>
                    <div className='intro_scroll'>
                        <Scroll activeClass="active" to="about-me" smooth={true} duration={500}>
                            <i className="fas fa-arrow-circle-down" style={{fontSize:'48px', color: 'gray'}}></i>
                        </Scroll>
                    </div>
                    <hr id="about-me"className="intro_solid"></hr>
                </div>
            </div>
        </div>
    )
}

export default Intro
