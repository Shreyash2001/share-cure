import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { logoutUser } from '../actions/userActions'
import Tippy from '@tippyjs/react'
import "tippy.js/dist/tippy.css"
import 'tippy.js/themes/light.css'
import 'tippy.js/animations/scale.css'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {

    const {userInfo} = useSelector(state => state.userLogin)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClickSignout = () => {
        dispatch(logoutUser())
    }

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__containerLeft">
               <Link to="/"> <img src="https://see.fontimg.com/api/renderfont4/PxlZ/eyJyIjoiZnMiLCJoIjo2NiwidyI6MTI1MCwiZnMiOjUzLCJmZ2MiOiIjRURBMjJGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U2hhcmUtQ3VyZQ/quick-kiss-personal-use.png" alt="logo" /></Link>
                <div className="header__containerLeftButtons">
                <div>
                <Tippy 
                animation={"scale"} 
                delay={100}
                theme={'light'}
                arrow={false}
                interactive={true}
                content={<div className="header__containerLeftButtonsEachContainer">
                    <div className="header__containerLeftButtonsEachContainerItem">
                    <Button onClick={() => history.push("/create-experience")}><img style={{width:"20px", height:"20px", marginRight:"10px"}} src="https://img.icons8.com/plasticine/100/000000/create-new.png" alt="" /> Create Experience</Button>
                    </div>
                    <div className="header__containerLeftButtonsEachContainerItem">
                    <Button onClick={() => history.push("/experiences/lovely")}><img style={{width:"20px", height:"20px", marginRight:"10px"}} src="https://img.icons8.com/office/80/000000/heart-health.png" alt="" /> Lovely Experience</Button>
                    </div>
                    <div className="header__containerLeftButtonsEachContainerItem">
                    <Button onClick={() => history.push("/experiences/happy")}><img style={{width:"20px", height:"20px", marginRight:"10px"}} src="https://img.icons8.com/cotton/64/000000/zany-face-icon.png" alt="" /> Happy Experience</Button>
                    </div>
                    <div className="header__containerLeftButtonsEachContainerItem">
                    <Button onClick={() => history.push("/experiences/emotional")}><img style={{width:"20px", height:"20px", marginRight:"10px"}} src="https://img.icons8.com/nolan/80/sad-ghost.png" alt="" /> Emotional Experience</Button>
                    </div>
                </div>} >
                <Button onClick={() => history.push("/experiences")}> Experiences</Button>
                </Tippy>
                
                </div>
                <div>
                <Tippy 
                animation={"scale"} 
                delay={100}
                theme={'light'}
                arrow={false}
                interactive={true}
                content={<div className="header__containerLeftButtonsEachContainer">
                    <div className="header__containerLeftButtonsEachContainerItem">
                    <Button><img style={{width:"20px", height:"20px", marginRight:"10px"}} src="https://img.icons8.com/plasticine/100/000000/create-new.png" alt="" /> Create Thoughts</Button>
                    </div>
                    <div className="header__containerLeftButtonsEachContainerItem">
                    <Button><img style={{width:"20px", height:"20px", marginRight:"10px"}} src="https://img.icons8.com/office/80/000000/heart-health.png" alt="" /> Lovely Thoughts</Button>
                    </div>
                    <div className="header__containerLeftButtonsEachContainerItem">
                    <Button><img style={{width:"20px", height:"20px", marginRight:"10px"}} src="https://img.icons8.com/cotton/64/000000/zany-face-icon.png" alt="" /> Crazy Thoughts</Button>
                    </div>
                    <div className="header__containerLeftButtonsEachContainerItem">
                    <Button><img style={{width:"20px", height:"20px", marginRight:"10px"}} src="https://img.icons8.com/nolan/80/sad-ghost.png" alt="" /> Emotional Thoughts</Button>
                    </div>
                </div>} >
                <Button> Thoughts</Button>
                </Tippy>
                </div>
                <div>
                <Tippy 
                animation={"scale"} 
                delay={100}
                theme={'light'}
                arrow={false}
                interactive={true}
                content={<div className="header__containerLeftButtonsEachContainer">
                    <div className="header__containerLeftButtonsEachContainerItem">
                    <Button><img style={{width:"20px", height:"20px", marginRight:"10px"}} src="https://img.icons8.com/doodle/48/000000/group.png" alt="" /> Discussion Panel</Button>
                    </div>
                    <div className="header__containerLeftButtonsEachContainerItem">
                    <Button><img style={{width:"20px", height:"20px", marginRight:"10px"}} src="https://img.icons8.com/officel/40/000000/goal--v1.png" alt="" /> Push to the goal</Button>
                    </div>
                    <div className="header__containerLeftButtonsEachContainerItem">
                    <Button><img style={{width:"20px", height:"20px", marginRight:"10px"}} src="https://img.icons8.com/dusk/64/000000/lol--v1.png" alt="" /> Let's Have Fun</Button>
                    </div>
                </div>} >
                <Button>Social Approach</Button>
                </Tippy>
                </div>
                <div>
                <Button onClick={() => history.push("/digital-journaling")}>Digital Journaling</Button>
                </div>
                <div>
                <Button>A Way Towards Life</Button>
                </div>
                </div>
                
                </div>

                <div className="header__containerRight">
                {userInfo && userInfo ?  
                   <Button className="header__containerRightButtonsSignUp" onClick={handleClickSignout}>Sign Out</Button> 
                   : 
                   <div className="header__containerRightButtons">
                   <Button className="header__containerRightButtonsSignIn" onClick={() => history.push("/login")}>Sign In</Button>
                   <Button className="header__containerRightButtonsSignUp" onClick={() => history.push("/register")}>Sign Up</Button>
                   </div>
                   }
                </div>
            </div>
        </div>
    )
}

export default Header
