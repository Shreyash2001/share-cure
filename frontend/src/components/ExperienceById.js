import { CircularProgress } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExperienceById } from '../actions/experienceActions'
import "./ExperienceById.css"

function ExperienceById() {

    const match = window.location.pathname.split("/")[2]

    const dispatch = useDispatch()
    const {experience, loading, error} = useSelector(state => state.experienceById)

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
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
        setOpen(true);
    }, [dispatch, match])
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
        </div>
    )
}

export default ExperienceById
