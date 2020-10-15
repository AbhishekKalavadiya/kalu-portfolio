import React from 'react'
import Particles from 'react-particles-js';

function ParticlesMove() {
    return (
        <Particles
        className='aboutme_particles'
        params={{
            "particles": {
                "number": {
                    "value": 150,
                    "density": {
                        "enable": true,
                        "value_area": 1803.4120608655228
                    }
                },
                "color": {
                    "value": "#8B3D3D"
                },
                "shape": {
                    "type": ["circle", "triangle"],
                    "stroke": {
                        "width": 3,
                        "color": "#8B3D3D"
                    },
                    "polygon": {
                        "nb_sides": 6
                    },
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 2,
                        "size_min": 1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 100,
                    "color": "#8B3D3D",
                    "opacity": 0.8,
                    "width": 0.6413648243462091
                },
                "move": {
                    "enable": true,
                    "speed": 0.7,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "bounce",
                    "bounce": true,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "resize": true
                },
                "modes": {
                    "repulse": {
                        "distance": 100,
                        "duration": 0.3
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }}/>
    )
}

export default ParticlesMove
