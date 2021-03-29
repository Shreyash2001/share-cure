import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button';
import { FormControl, Input, InputAdornment } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import {useHistory} from "react-router-dom"

function Login() {

    const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push("/")
  }
    return (
        <div className="login">

        <div className="login__left">
        
        </div>

        <div className="login__right">
        <div>
        <img src="https://res.cloudinary.com/cqn/image/upload/v1616679574/share-cure_fz0wvo.png" alt="logo" />
        
          <p style={{color:"#484848", fontSize:"30px", margin:"0", fontWeight:"100", paddingLeft:"120px"}}>Welcome!</p>
          <p style={{color:"lightgray", fontSize:"14px", margin:"0", fontWeight:"100", paddingLeft:"80px", paddingBottom:"20px"}}>Register here to post, create & save</p>
 
        <div className="login__rightInfo">
            <form onSubmit={handleSubmit}>
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

export default Login
