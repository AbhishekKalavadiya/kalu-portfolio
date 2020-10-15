import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

import './progress.css'

function Progress({ title, label, variant, color, image, projects}) {

    return (
        <div className='progress1'>
            <div className='progress_card'>
                <div className='progress_contentflip-box-front'>
                    <img className="progress_image" src={image} alt={image}/>
                </div>
                <div className='progress_contentflip-box-back'>
                    <div className="progress_title">
                        {title}
                    </div>
                    <ProgressBar striped variant={variant} animated now={label} label={`${label}%`}/>
                    {
                        projects && (<div className='progress_projects'>
                            Worked in {projects} projects
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Progress
