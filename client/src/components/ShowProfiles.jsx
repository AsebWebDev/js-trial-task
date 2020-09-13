import React, { useState, useEffect } from 'react'
import Card from './Card'
import api from '../api'
import '../styles/ShowProfiles.scss'

export default function ShowProfiles(props) {
    let [currentProfiles, setCurrentProfiles] = useState(null);
    console.log("ShowProfiles -> currentProfiles", currentProfiles)
    let [querySize, setQuerySize] = useState(10)
    let [sorting, setSorting] = useState(props.sorting);
    
    useEffect(() => {
        api.fetchAllData(querySize, sorting).then(res => setCurrentProfiles(res))
    }, [])

    return (
        <div id="show-profiles">
           {currentProfiles && currentProfiles.map( (item, i) => <Card key={i} profile={item} />)}
           {!currentProfiles && <p>Loading...</p>}
        </div>
    )
}
