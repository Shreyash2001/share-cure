import React, { useEffect, useState } from 'react'
import "./Login.css"
import {useDispatch, useSelector} from "react-redux"
import Button from '@material-ui/core/Button';
import { CircularProgress, FormControl, Input, InputAdornment } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import {Link, useHistory} from "react-router-dom"
import { authUser } from '../actions/userActions';

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

    const history = useHistory()
    const dispatch = useDispatch()

    const {success, loading} = useSelector(state => state.userLogin)
    

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authUser(email, password))
  }

  useEffect(() => {
    if(success) {
      history.push("/")
    }
  }, [success, history])
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
      <p style={{marginLeft:"50px"}}>Not have an account? <Link style={{textDecoration:"none", color:"#222222"}} to="/register"><b style={{textDecoration:"underline"}}>click here</b></Link></p>
            <Button type="submit">Submit</Button>
            </form>
            {loading && <CircularProgress style={{color:"#ff7e1d"}} />}
        </div>
        </div>
        </div>
            
        </div>
    )
}

export default Login
