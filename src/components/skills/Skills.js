import React from 'react'
import Progress from '../progress/Progress'
import './skills.css'

const skils_set = [
    {
        title: "React Js",
        label: 90,
        variant: "#87CEEB",
        image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        projects: "10"
    },
    {
        title: "MongoDB",
        label: 80,
        variant: "#87CEEB",
        image: "https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png",
        projects: "6"
    },
    {
        title: "Node Js",
        label: 70,
        variant: "#87CEEB",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
        projects: "6"
    },
    {
        title: "Express Js",
        label: 80,
        variant: "#87CEEB",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        projects: "6"
    },
     {
        title: "GraphQL",
        label: 70,
        variant: "#87CEEB",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png",
        projects: "4"
    },
    
    {
        title: "Redux",
        label: 70,
        variant: "#87CEEB",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs2V4uDZ2KhtYxryFZCRaB8zC95WqVsFcLkw&usqp=CAU",
        projects: "3"
    },
    {
        title: "Javascript",
        label: 70,
        variant: "#87CEEB",
        image: "https://sujanbyanjankar.com.np/wp-content/uploads/2019/09/javascript.png",
    },
    {
        title: "HTML",
        label: 80,
        variant: "#87CEEB",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
    },
    {
        title: "CSS",
        label: 80,
        variant: "#87CEEB",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png"
    },
]

function Skills() {
    return (
        <div className='skills'>
            <div className="parallax_6">
                <div className='skills_details'>
                    <h1>My Skills</h1>
                    <div className='skills_progress'>
                        {
                            skils_set.map(({title, label, variant, image, projects}) =>
                                (<Progress 
                                    title={title}
                                    label={label}
                                    variant={variant}
                                    image={image}
                                    projects={projects}
                                />)
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

