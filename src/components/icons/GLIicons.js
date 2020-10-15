import React from 'react'
import './gliicons.css'

function GLIicons() {
    return (
        <div className='gliicons' >
            <a href="https://github.com/AbhishekKalavadiya" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github" style={{fontSize:"28px", color: "black"}}></i>
            </a>
            <a href="https://www.linkedin.com/in/abhishek-kalavadiya-862668195/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin" style={{fontSize:"28px", color: "#0e76a8"}}></i>
            </a>
            <a href="#"target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram" style={{fontSize:"28px", color: "#C13584"}}></i>
            </a>
            <a href="https://twitter.com/abhishekkalu" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter" style={{fontSize:"28px", color: "#00acee"}}></i>
            </a>
        </div>
    )
}

export default GLIicons
