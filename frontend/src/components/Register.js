import React, { useEffect, useState } from 'react'
import "./Register.css"
import {useDispatch, useSelector} from "react-redux"
import Button from '@material-ui/core/Button';
import { CircularProgress, FormControl, Input, InputAdornment } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link, useHistory} from "react-router-dom"
import { createUser } from '../actions/userActions';

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const history = useHistory()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUser(name, email, password))
    
  }

  const {success, loading} = useSelector(state => state.userRegister)

  useEffect(() => {
    if(success) {
      history.push("/")
    }
  }, [success, history])

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
          <p style={{color:"lightgray", fontSize:"14px", margin:"0", fontWeight:"100", paddingLeft:"80px", paddingBottom:"20px"}}>Register here to post, create & save Experiences.</p>
 
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
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormControl>
      <p style={{marginLeft:"50px"}}>Already have an account? <Link style={{textDecoration:"none", color:"#222222"}} to="/login"><b style={{textDecoration:"underline"}}>click here</b></Link></p>
            
            <Button type="submit">Submit</Button>
            </form>
            {loading && <CircularProgress style={{color:"#ff7e1d"}} />}
        </div>
        </div>
        </div>
            
        </div>
    )
}

export default Register
