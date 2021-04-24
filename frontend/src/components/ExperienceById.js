import { Avatar, Button, CircularProgress } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createExperienceComment,  getExperienceById } from '../actions/experienceActions'
import { GET_EXPERIENCE_COMMENT_RESET } from '../constants/experienceConstants'
import "./ExperienceById.css"

function ExperienceById() {

    const match = window.location.pathname.split("/")[2]

    const dispatch = useDispatch()
    const {experience, loading, error} = useSelector(state => state.experienceById)
    const { success, loading: loadingComment, error: errorComment} = useSelector(state => state.commentExperience)
    
    const [comment, setComment] = useState("")
    
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />
      }

    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

      const [open, setOpen] = useState(false);

    useEffect(() => {
      
        dispatch(getExperienceById(match))
        setOpen(true)

        if(success) {
          setComment("")
          dispatch({type:GET_EXPERIENCE_COMMENT_RESET})
        }
        
    }, [dispatch, match,success])
    

    const handleClick = () => {
      dispatch(createExperienceComment(match, comment))
    }
    return (
        <div className="experienceById">
        {loading && <CircularProgress style={{color:"orange"}} />}
        {error && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>}
            <div className="experienceById__title">
                <h1>{experience?.title}</h1>
                <div style={{display:"flex", alignItems:"center"}}>
                {experience?.tag && <span>#{experience?.tag}</span>}
                </div>
            </div>
            <div>
                <p>{experience?.description}</p>
                {experience?.link === "Sample" ? <img src={experience?.image} alt="" /> : <a href={experience?.link} target="blank">{experience?.link}</a> }
                <p>{experience?.createdAt.substring(0, 10)}</p>
            </div>
          {!loading &&   <div className="experienceById__form">
            <h3>Help with the issue</h3>
              <form>
                <textarea type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                <div style={{display:"flex", justifyContent:"center"}}>
                <Button onClick={handleClick}>Submit</Button>
                {loadingComment && <CircularProgress style={{color:"orange"}} />}
                </div>
              </form>
            </div>}
            <div>
            <div>
             <h3>{experience?.comments?.length} people helped with issue</h3>
            </div>
                {experience?.comments?.map(comment => (
                  <div style={{borderBottom:"1px solid lightgray", marginBottom:"20px"}}>
                  <div style={{display:"flex", alignItems:"center"}}>
                  <Avatar />
                  <div>
                 <p style={{marginLeft:"10px", marginBottom:"0"}}>{comment?.user?.substring(0, 4)}</p>
                 <span style={{marginLeft:"10px"}}>{comment?.createdAt?.substring(0, 10)}</span>
                 </div>
                  </div>
                  <div>
                   <p>{comment?.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
        </div>
    )
}

export default ExperienceById
