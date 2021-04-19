import React, { useEffect, useRef, useState } from 'react'
import JoditEditor from "jodit-react";
import "./CreateJournal.css"
import { Button, CircularProgress, FormControlLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { createJournal } from '../actions/journalAction';
import { CREATE_JOURNAL_RESET } from '../constants/journalConstants';


function CreateJournal() {

    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));
    const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [tag, setTag] = useState("Sample")
  const [title, setTitle] = useState("Sample")

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const editor = useRef(null)
	const [content, setContent] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    const {success, loading} = useSelector(state => state.createdJournal)

    const handleClick = () => {
        dispatch(createJournal(title, content, tag))
    }

    const handleChangeTag = (e) => {
        setTag(e.target.value)
      }

      useEffect(() => {
        if(success) {
            history.push("/digital-journaling")
            dispatch({type: CREATE_JOURNAL_RESET})
        }
      }, [success, history, dispatch])
    return (
        <div className="createjournal">
        <div className="digitaljournaling">
            <div className="digitaljournaling__header">
             <Link to="/"><img src="https://see.fontimg.com/api/renderfont4/PxlZ/eyJyIjoiZnMiLCJoIjo2NiwidyI6MTI1MCwiZnMiOjUzLCJmZ2MiOiIjRURBMjJGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U2hhcmUtQ3VyZQ/quick-kiss-personal-use.png" alt="share-cure" /></Link>
                <div>
                <Button onClick={handleOpen} style={{textTransform:"inherit"}}><LocalOfferOutlinedIcon style={{width:"20px", height:"20px"}} /> Tags</Button>
                <Button style={{textTransform:"inherit"}}><img style={{width:"20px", height:"20px", marginRight:"5px", marginBottom:"5px"}} src="https://res.cloudinary.com/cqn/image/upload/v1618208201/journal_qjyrkr.png" alt="" /> New Journal</Button>
                </div>
            </div>
            </div>
            <div>
            <label>Title</label>
              <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div style={{marginTop:"20px"}}>
       <JoditEditor
        ref={editor}
        value={content}
        onChange={newContent => setContent(newContent)}
        />
        </div>
        <Button onClick={handleClick}>Submit</Button>
        <div>
        {loading && <CircularProgress style={{color:"orange", width:"200px", height:"200px"}} />}
        </div>
        <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <RadioGroup aria-label="option" name="options" value={tag} onChange={handleChangeTag}>
                <FormControlLabel value="love" control={<Radio style={{color:"orange"}} />} label="Love" />
                <FormControlLabel value="hate" control={<Radio style={{color:"orange"}} />} label="Hate" />
                <FormControlLabel value="sad" control={<Radio style={{color:"orange"}} />} label="Sad" />
                <FormControlLabel value="happy" control={<Radio style={{color:"orange"}} />} label="Happy" />
              </RadioGroup>
              <Button variant="outlined" onClick={handleClose} style={{textTransform:"inherit", marginRight:"40px", marginTop:"20px"}}>Apply</Button>
              
          </div>
        </Fade>
      </Modal>
    </div>
    </div>

    )
}

export default CreateJournal
