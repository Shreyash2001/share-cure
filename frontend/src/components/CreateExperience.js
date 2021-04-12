import { Button, CircularProgress, FormControlLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "./CreateExperience.css"
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { createExperience } from '../actions/experienceActions';
import { EXPERIENCE_RESET } from '../constants/experienceConstants';

function CreateExperience() {

  const {success, loading, error} = useSelector(state => state.createdExperience)

    const [value, setValue] = useState('');
    const [tag, setTag] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [title, setTitle] = useState("");
    const [images, setImages] = useState("Sample");
    const [description, setDescription] = useState("")
    const [about, setAbout] = useState("")
    const [link, setLink] = useState("Sample")
    
    

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['Title of your experience', 'Small Overview of your experience', 'Describe your Experience', 'Related Info on your Experience'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div className="createExperience__form">
            
                    <div className="createExperience__content">
                    <h3 style={{ marginBottom:"10px"}}>Title</h3>
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    </div>
            </div>
        );
      case 1:
        return (
          <div style={{marginLeft:"300px"}}>
            
            <div className="createExperience__about">
                    <h3 style={{ marginBottom:"10px"}}>Overview</h3>
                    <textarea type="text" placeholder="Overview" value={about} onChange={(e) => setAbout(e.target.value)} required/>
                    
            </div>
            </div>
        );
      case 2:
        return (
          <div style={{paddingLeft:"140px"}}>
            
            <div className="createExperience__description">
                    <h3 style={{ marginBottom:"10px"}}>Description</h3>
                    <textarea type="text" placeholder="Overview" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                    
            </div>
            </div>
        );

        case 3: 
          return (
            <div style={{padding:"20px 0 20px 40px", marginLeft:"300px"}}>
              <h2>Help others by adding articles or books you referred to overcome this experience. Adding Image of book covers also helps users.</h2>
              <RadioGroup aria-label="option" name="options" value={value} onChange={handleChange}>
                <FormControlLabel value="link" control={<Radio style={{color:"orange"}} />} label="Add link" />
                <FormControlLabel value="image" control={<Radio style={{color:"orange"}} />} label="Add Image" />
              </RadioGroup>
              {value === "link" && 
              <div className="createExperience__link">
                <input placeholder="Enter the url" type="text" onChange={(e) => setLink(e.target.value)} />
              </div>}
              {value === "image" && 
              <div className="createExperience__image">
              <input placeholder="Enter the Image url" type="text" onChange={(e) => setImages(e.target.value)} />
              </div>}
              
              <div>
              <h2>Tag that suits your experience</h2>
              <RadioGroup aria-label="option" name="options" value={tag} onChange={handleChangeTag}>
                <FormControlLabel value="love" control={<Radio style={{color:"orange"}} />} label="Love" />
                <FormControlLabel value="hate" control={<Radio style={{color:"orange"}} />} label="Hate" />
                <FormControlLabel value="sad" control={<Radio style={{color:"orange"}} />} label="Sad" />
                <FormControlLabel value="happy" control={<Radio style={{color:"orange"}} />} label="Happy" />
              </RadioGroup>
              </div>
            </div>
          );
      default:
        return 'Unknown step';
    }
  }
    
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


    const dispatch = useDispatch();
    

    const history = useHistory();


  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeTag = (e) => {
    setTag(e.target.value)
  }

    const submitHandler = () => {
        dispatch(createExperience(title, about, description, images, link, tag))
    }

    useEffect(() => {

      if(title.length !== 0 && about.length !== 0 && description.length !== 0 && tag.length !== 0) {
        setBtnDisabled(false)
      }

      if(success) {
        dispatch({type:EXPERIENCE_RESET})
        history.push("/")
      }
    }, [history, success, dispatch, title, about, description, tag])

    return (
        <div>
          <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <>
          <div style={{paddingLeft:"40px", paddingBottom:"55vh", textAlign:"center"}}>
            <Typography>
              <h1 style={{marginBottom:"20px"}}>Ready to Submit the Experience?</h1>
            </Typography>
            <Button onClick={handleReset} style={{marginRight:"40px"}}>
              Reset
            </Button>
            {btnDisabled ? 
              <Button disabled style={{backgroundColor:"gray", color:"white"}}>
              Submit
            </Button>
            :
            <Button onClick={submitHandler} className="createExperience__button">
              Submit
            </Button>
            
            }
            {loading && <CircularProgress style={{color:"orange"}} />}
          </div>
          
          </>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
              <Button disabled={activeStep === 0} onClick={handleBack} style={{width:"100px", textTransform:"inherit"}}>
                Back
              </Button>

              <Button
                onClick={handleNext}
                className="createExperience__button"
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>

        </div>
    )
}

export default CreateExperience