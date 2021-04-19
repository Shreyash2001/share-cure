import { CircularProgress } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExperienceLovely } from '../actions/experienceActions'
import Card from './Card'
import "./LovelyExperience.css"

function LovelyExperience() {

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()
    const {experience, loading, error} = useSelector(state => state.lovelyExperience)

    useEffect(() => {
        dispatch(getExperienceLovely())
        setOpen(true)
    }, [dispatch])

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };


    return (
        <div className="lovelyExperience">
        {loading && <CircularProgress style={{color:"orange"}} />}
        {error && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>}
            <div>
            {!loading &&  <h1>Love Experiences</h1> }
            </div>
            <div className="lovelyExperience__card">
                {experience?.map(lovelyExperience => (
                    <Card 
                        key={lovelyExperience._id}
                        id={lovelyExperience._id}
                        user={lovelyExperience.user}
                        title={lovelyExperience.title}
                        description={lovelyExperience.description}
                        tag={lovelyExperience.tag}
                        about={lovelyExperience.about}
                        like={lovelyExperience.like}
                        image={lovelyExperience.image}
                        link={lovelyExperience.link}
                        createdAt={lovelyExperience.createdAt}
                    />
                ))}
            </div>
        </div>
    )
}

export default LovelyExperience
