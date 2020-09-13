import React, { useState, useEffect } from 'react'
import '../styles/ShowProfiles.scss'

export default function ShowProfiles() {
    let [currentProfiles, setCurrentProfiles] = useState(null);
    
    useEffect(() => {
        
    }, [])

    return (
        <div id="show-profiles">
           {currentProfiles && <p>Profiles exists</p>} 
           {!currentProfiles && <p>Loading...</p>}
        </div>
    )
}
