import { Button } from '@material-ui/core'
import React from 'react'
import "./DigitalJournaling.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function DigitalJournaling() {

    const {userInfo} = useSelector(state => state.userLogin)
    const history = useHistory()

    return (
        <div className="digitaljournaling">
            <div className="digitaljournaling__header">
             <Link to="/"><img src="https://see.fontimg.com/api/renderfont4/PxlZ/eyJyIjoiZnMiLCJoIjo2NiwidyI6MTI1MCwiZnMiOjUzLCJmZ2MiOiIjRURBMjJGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U2hhcmUtQ3VyZQ/quick-kiss-personal-use.png" alt="share-cure" /></Link>
                <div>
                <Button><AccountCircleIcon />Profile</Button>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="digitaljournaling__container">
                    <div>
                    <h1 onClick={() => history.push("/digital-journaling/new")}>{userInfo?.name}'s Journal</h1>
                       <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", borderTop:"1px solid lightgray"}}>
                     <Link style={{textDecoration:"none", color:"inherit"}} to="/digital-journaling/new">  <div style={{display:"flex", alignItems:"center"}}>
                            <img style={{width:"40px", height:"40px", marginBottom:"8px", marginRight:"5px"}} src="https://res.cloudinary.com/cqn/image/upload/v1618208201/journal_qjyrkr.png" alt="" />
                            <p style={{fontSize:"30px", fontWeight:"400"}}>New Entry</p>
                        </div>
                    </Link>
                    <Link style={{textDecoration:"none", color:"inherit"}} to="/digital-journaling/entries">
                        <div style={{display:"flex", alignItems:"center"}}>
                            <img style={{width:"40px", height:"40px", marginRight:"5px"}} src="https://res.cloudinary.com/cqn/image/upload/v1618229816/icons8-checklist-48_owkbg6.png" alt="" />
                            <p style={{fontSize:"30px", fontWeight:"400"}}> Entries</p>
                        </div>
                    </Link>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalJournaling
