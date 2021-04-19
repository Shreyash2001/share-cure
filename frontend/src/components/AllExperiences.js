import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllExperiences } from '../actions/experienceActions'
import "./AllExperiences.css"
import Card from './Card'

function AllExperiences() {

    const {allExperiences, loading, error} = useSelector(state => state.experiences)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllExperiences())
    }, [dispatch])
    return (
        <div className="allExperiences">
        {loading && <CircularProgress style={{color:"orange"}} />}
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
    )
}

export default AllExperiences
