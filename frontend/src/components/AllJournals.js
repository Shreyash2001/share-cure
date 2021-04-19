import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJournals } from '../actions/journalAction'
import "./AllJournals.css"
import Interweave from "interweave"
import { CircularProgress, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';

function AllJournals() {


    const dispatch = useDispatch()
    const {loading, journals, error} = useSelector(state => state.allJournals)
    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    useEffect(() => {
        dispatch(getAllJournals())
    }, [dispatch])
    return (
        <div className="allJournals">
        {loading && <CircularProgress style={{color:"orange", width:"100px", height:"100px", margin:"100px 600px 100px 600px"}} />}
        {error && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{error}</Alert></Snackbar>}
            {journals?.journal?.map(userJournal => (
                <div className="allJournals__info">
                <div style={{borderBottom:"1px solid lightgray"}}>
                <h2 style={{color:"orange"}}>{userJournal?.title}</h2>
                <div className="allJournals__infoReadmore">
                <Interweave content={userJournal.description} />
                </div>
                </div>

                
                </div>
            ))}

            
        </div>
    )
}

export default AllJournals
