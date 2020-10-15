import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'

function Navigation() {

    const [navbar, setNavbar] = useState(false)
    
    const navBackground = () =>{
        if(window.scrollY >= 50){
            setNavbar(true)
        }else{
            setNavbar(false)
            // console.log(window.scrollY)
        }
    }

    window.addEventListener('scroll', navBackground)

    return (
        <div className={navbar ?`navigation active` :"navigation"}>
            <div className="navigation_all">
                <div className="navigation-left">
                    {/* <img className="navigation-logo" src="" alt="AK."/> */}
                    <div className="navigation-headerName" >
                        <Link to='/'><h2 className={navbar ?'navigation_h2 active' :"navigation_h2"}>KALU.</h2></Link>
                    </div>
                </div>

                <div className="navigation-right">
                    <Link to='/eternal-blogs' className={ navbar ?"links eternal active" : "links eternal"}><span className='spans'>Eternals</span></Link>
                    <Link to='/timeline' className={ navbar ?"links timeline active" : "links timeline"}><span className='spans'>Timeline</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation
