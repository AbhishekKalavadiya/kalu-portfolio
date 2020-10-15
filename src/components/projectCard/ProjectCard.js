import React from 'react'
import ButtonView from '../button/ButtonView'
import './projectCard.css'

function ProjectCard({ title, subheader, image, data, link1, link2, techStack}) {
    return (
        <div className='projectCard'>
            <div className='projectCard_card'>
                <div class="projectCard-flip-box-front">
                    <div className='projectCard_title'>
                        <h2 style={{fontWeight: 700}}>{title}</h2>
                        <h5 style={{fontWeight: 700}}>{subheader}</h5>
                    </div>
                    <hr/>
                    <div className="projectCard_tech">
                        {
                            techStack.map((tech)=> (
                                <span className="projectCard_stack">{tech}</span>
                            ))
                        }
                    </div>
                </div>
                <div class="projectCard-flip-box-back">
                    <img 
                        className='projectCard_cardMedia'
                        src={image}
                        alt="projectCard Media"
                    />
                    <div className="projectCard_data">
                        {data}
                    </div>
                    <ButtonView github={link1} website={link2}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard

