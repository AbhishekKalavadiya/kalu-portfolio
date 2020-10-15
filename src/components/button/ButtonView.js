import React from 'react'
import Button from '@material-ui/core/Button'

import './button.css'

function ButtonView({github, website}) {
    return (
        <div className='button'>    
            <Button className="button_button" variant="outlined" href={github} target="_blank">
                <img 
                    className='button_img'
                    src="https://informsuiuc.files.wordpress.com/2016/10/github-bb449e0ffbacbcb7f9c703db85b1cf0b.png" alt="GitHub"/>
            </Button>
            {
                website ? (<Button className='button_website' variant="contained" href={website} target="_blank">
                    To Website
                </Button>) 
                : null
            }
            
        </div>
    )
}

export default ButtonView
