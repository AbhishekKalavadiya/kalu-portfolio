import React from 'react'
import ProjectCard from '../projectCard/ProjectCard'
import './myProject.css'

const myproject = [
    {
        title: "Maper", 
        subheader: "August 2020", 
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", 
        data: "A location-based website using React as Frontend and NodeJs, ExpressJS as backend, and MongoDB as Database. On this website, I had use MapBox for the world map and React-Mapbox-gl for configuration. We can select the place where we had visited and added the photo URL, so the entry will be seen on the map and in the visited place area. We can delete or modify the changes in the Entry we had created. It is a responsive website with live location of a point on the map. The Backend is deployed on Heroku and the frontend is deployed on Netlify.", 
        link1: "https://github.com/AbhishekKalavadiya/maper", 
        link2: "https://maper.netlify.app/",
        techStack: ["React js","Node js","Express js","MongoDB","MapBox", "React Mapbox-gl","Heroku","Netlify","Flexbox","Material-ui"]
    },
    {
        title: "Covid19 Tracker", 
        subheader: "August 2020", 
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", 
        data: " A Covid-19 tracker which gives active cases, deaths, and recoveries by worldwide and also by individual country. I used React hooks fetching data from Disease.sh website, material-UI for some design. GraphJs for the graph of death, cases, and recovery. And used React leaflet for the circle on Map for cases, deaths, recovery. Firebase is used to deploy the website.", 
        link1: "https://github.com/AbhishekKalavadiya/covid-19_tracker", 
        link2: "https://covid-19-tracker-35c7e.web.app/",
        techStack: ["react ","firebase", "graphjs", "reacthooks", "material-ui", "react-leaf"]

    },
    {
        title: "Slacker", 
        subheader: "July 2020", 
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", 
        data: "This Website Slacker is the clone of slack which is one of the chatting App. In Slacker you can chat realtime with other people by using firsbase as database. We can also add the New channel and chat with each other. The Frontend is build in React with help of context API and other React Hooks", 
        link1: "https://github.com/AbhishekKalavadiya/slacker", 
        link2: "https://abhishekkalavadiya.github.io/slacker/",
        techStack: ["React js","context-api", "firebase" ,"Flexbox","Material-ui"]

    },
    {
        title: "Tracker Mobile App", 
        subheader: "September 2020", 
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", 
        data: "This is a React-native mobile app that can track the user location live location and save them to the MongoDB database by the help of Express JS. By starting the recording option we can start the recording of the area cover on the map by the line. as the position of the user changes the line length also changes. I had used the react-native-maps for the map to show for the user. By calling API from the backend the distance cover will be store and will be displayed to the user.", 
        link1: "https://github.com/AbhishekKalavadiya/Tracker--Mobile-App", 
        link2: null,
        techStack: ["react-native", "react-navigation", "react-native-maps", "nodejs", "expressjs", "mongodb", "moongose", "jwt-authentication", "jwt-token", "expo-location", "context-api", "hooks"]

    },
    {
        title: "Amazon Clone", 
        subheader: "September 2020", 
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", 
        data: "This is an Amazon-clone which is an e-commerce site. This Frontend is built in React with help of context API and other React Hooks. In this build used Context API (useReducer, createContext) to get data directly from the app component to the needy component. Used material UI for some icons. And Used the flexbox for the CSS parts. We can also include the login with the firebase system.", 
        link1: "https://github.com/AbhishekKalavadiya/amazon-clone", 
        link2: "https://clone-7d0ba.web.app/",
        techStack: ["React js","context-api","firebase","react-currency-format","Flexbox","Material-ui"]

    },
    {
        title: "Spotify Clone", 
        subheader: "July 2020", 
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", 
        data: "This Website is the clone of Spotify which is one of the Music App. In this, you change songs from mobile and realtime changes are seen on the website. I am using a firebase as a database. And for login system used the Spotify API. We can also see the Playlist of the person who logged in and also the Weekly song list of the person. The Frontend is built to React with help of context API and other React Hooks", 
        link1: "https://github.com/AbhishekKalavadiya/clone-spotify", 
        link2: null,
        techStack: ["React js","context-api" ,"firebase-database" ,"firebase","Flexbox","Material-ui"]

    },
    {
        title: "Reddit Direct", 
        subheader: "July 2020", 
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", 
        data: "A display of different Reddit's subreddit pages. Here I had fetch the Reddit API and display the whole websites. I had used the React hooks for the fetch of the data from the API. Many page are not available will be done in next update beacuse many pages dont have video so that page is not available.", 
        link1: "https://github.com/AbhishekKalavadiya/reddit-direct", 
        link2: "https://reddit-direct.web.app/",
        techStack: ["React js","axios" ,"hooks-api-react" ,"Flexbox","Material-ui"]
    }
]

function MyProject() {
    return (
        <div className="myProject">
            <div className="parallax_5">
                <div className='myProject_details'> 
                    <h1>My projects</h1>
                    <div className='myProject_cards'>
                    {
                        myproject.map( ({title, subheader, image, data, link1,link2, techStack}) => (
                            <ProjectCard 
                                title={title}
                                subheader={subheader}
                                image={image}
                                data={data}
                                link1={link1}
                                link2={link2}
                                techStack={techStack}
                            />
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProject
