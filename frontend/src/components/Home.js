import { Button, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getAllExperiences } from '../actions/experienceActions'
import { logoutUser } from '../actions/userActions'
import Card from './Card'
import "./Home.css"

function Home() {

    const {userInfo} = useSelector(state => state.userLogin)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleClickSignout = () => {
        dispatch(logoutUser())
    }

    const {allExperiences, loading, error} = useSelector(state => state.experiences)

    useEffect(() => {
        dispatch(getAllExperiences())
    }, [dispatch])

    return (
        <div className="home">

            <div className="home__container">

            <div>
                <div>
                    <div className="home__containerImage">
                    <div className="home__containerIntro">
                        <h1>Join the ShareCure Community & Spread happiness among people.</h1>
                        <p>A Positive social community help you to know about importance of life and it's aspects. Share your Experiences, your thoughts, Seek help from like minded community people.
                        Read others Life experiences so that you know you are not the one out here.</p>
                        {userInfo ?   <Button className="home__containerButton">Explore</Button> : <Button className="home__containerButton">Sign Up</Button> }
                        </div>
                      
                    </div>
                    
                </div>
                
                <div></div>
            </div>

            {loading ? <CircularProgress /> :  <div className="home__cardContainer">
                
                {allExperiences?.map(experience => (
                    <div>
                        <Card 
                            key={experience._id}
                            id={experience._id}
                            user={experience.user}
                            title={experience.title}
                            description={experience.description}
                            tag={experience.tag}
                            about={experience.about}
                            like={experience.like}
                            image={experience.image}
                            link={experience.link}
                            createdAt={experience.createdAt}
                        />
                    </div>
                ))}
                    
                
                </div>
            }
            <div className="home__thoughtsContainer">
                <div className="home__thoughtsContainerImage">
                    <div>
                        <h1>Thoughts, Just Share It.</h1>
                        <p>We carry your thoughts with us and show it to the world.</p>
                        <Button className="home__containerButton">Explore</Button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
