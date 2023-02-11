import * as React from 'react';
import '../asserts/coverpic.jpg';
import './navbar.css'
/* import {useNavigate} from 'react-router-dom'; */

/* function homelink(){
    navigate("/")
} */
function Navbar()
{
 /*    const navigate = useNavigate(); */
    return(

        <div className="navbar">
           
        <div className="navmenu-area">
        <div className="navmenu">
            <h4 className="link-tag"  /* onClick={()=>navigate('/')} */>கடைசி விவசாயி</h4>
            <h4 className="link-tag"  /* onClick={()=>navigate('../nallandi ')} */>நல்லாண்டி</h4>
            <h4 className="link-tag" >நம்மாழ்வார்</h4>
            <h4 className="link-tag" >தொடர்பு</h4>
        </div>
        </div>
   
        </div>
    );
}

export default Navbar;
