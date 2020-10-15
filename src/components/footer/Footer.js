import React from 'react'
import GLIicons from '../icons/GLIicons'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_icons'>
                <span className='footer_gli'>
                <GLIicons /></span>
                <hr className="footer_hr"/>
                <span className="footer_p">Email:	&nbsp;  
                    <a>
                        <span className="footer_span">amkalavadia74@gmail.com</span>
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Footer
