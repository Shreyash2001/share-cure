import React from 'react'
import "./Register.css"
import Button from '@material-ui/core/Button';
import { FormControl, Input, InputAdornment } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useHistory} from "react-router-dom"

function Register() {

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push("/")
  }
    return (
        <div className="register">

        <div className="register__left">
        <div style={{marginTop:"60px"}}>
            <h1>What is ShareCure?</h1>
        </div>
        <div className="register__leftInfo">
            <h2>It's a social platform to share Experiences,<br /> Thoughts and Hardtime people suffer during anxiety.</h2>
        </div>
        <div style={{marginTop:"40px"}}>
            <h1>How it Works?</h1>
        </div>
        <div className="register__leftInfo">
            <h2>You create, You Post, You Share.</h2>
        </div>
        <div style={{marginTop:"40px"}}>
            <h1>How we manage Privacy?</h1>
        </div>
        <div className="register__leftInfo">
            <h2>You are anonymous totally so that you can share your<br /> experiences, thoughts freely.</h2>
        </div>
        </div>

        <div className="register__right">
        <div>
        <img src="https://res.cloudinary.com/cqn/image/upload/v1616679574/share-cure_fz0wvo.png" alt="logo" />
        
          <p style={{color:"#484848", fontSize:"30px", margin:"0", fontWeight:"100", paddingLeft:"120px"}}>Welcome!</p>
          <p style={{color:"lightgray", fontSize:"14px", margin:"0", fontWeight:"100", paddingLeft:"80px", paddingBottom:"20px"}}>Register here to post, create & save</p>
 
        <div className="register__rightInfo">
            <form onSubmit={handleSubmit}>
            <FormControl>
        
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle style={{color:"#ff7e1d"}} />
            </InputAdornment>
          }
          placeholder="First Name"
          required
        />
      </FormControl>

        <FormControl>
        
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle style={{color:"#ff7e1d"}} />
            </InputAdornment>
          }
          placeholder="Last Name"
          required
        />
      </FormControl>
        <FormControl>
        
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <MailIcon style={{color:"#ff7e1d"}} />
            </InputAdornment>
          }
          placeholder="Email"
          type="email"
          required
        />
      </FormControl>
        <FormControl>
        
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LockIcon style={{color:"#ff7e1d"}} />
            </InputAdornment>
          }
          placeholder="password"
          type="password"
          required
        />
      </FormControl>
            
            
            <Button type="submit">Submit</Button>
            </form>
        </div>
        </div>
        </div>
            
        </div>
    )
}

export default Register
