import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage:React.FC = () => {

    const history = useHistory()
    return(
        <>
            <h2>AboutPage</h2>
            <button className="btn"
            onClick={ () => history.push('/')}
            >return to todos</button>
        </>
    )
}