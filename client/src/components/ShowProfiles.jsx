import React, { useState, useEffect } from 'react'
import api from '../api'
import '../styles/ShowProfiles.scss'

export default function ShowProfiles(props) {
    let [currentProfiles, setCurrentProfiles] = useState(null);
    let [querySize, setQuerySize] = useState(10)
    let [sorting, setSorting] = useState(props.sorting);
    
    useEffect(() => {
        api.fetchAllData(querySize, sorting)
        // .then(res => setCurrentProfiles(res))
    }, [])

    return (
        <div id="show-profiles">
           {currentProfiles && <p>Profiles exists</p>} 
           {!currentProfiles && <p>Loading...</p>}
        </div>
    )
}
