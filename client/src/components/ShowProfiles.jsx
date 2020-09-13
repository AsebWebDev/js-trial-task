import React, { useState, useEffect } from 'react'
import Card from './Card'
import Loading from './Loading';
import api from '../api'
import '../styles/ShowProfiles.scss'

export default function ShowProfiles(props) {
    let [currentProfiles, setCurrentProfiles] = useState(null);
    let [querySize, setQuerySize] = useState(10)
    let [sorting, setSorting] = useState(props.sorting);

    useEffect(() => setSorting(props.sorting), [props.sorting])

    useEffect(() => {
        api.fetchAllData(querySize, sorting).then(res => setCurrentProfiles(res))
    }, [sorting])

    return (
        <div id="show-profiles">
           {currentProfiles && currentProfiles.map( (item, i) => <Card key={i} profile={item} />)}
           {!currentProfiles && <Loading />}
        </div>
    )
}
