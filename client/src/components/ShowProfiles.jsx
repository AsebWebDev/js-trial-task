import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { MDBContainer } from 'mdbreact';
import Card from './Card'
import Loading from './Loading';
import api from '../api'
import '../styles/ShowProfiles.scss'

export default function ShowProfiles(props) {
    let [currentProfiles, setCurrentProfiles] = useState(null);
    let [querySize, setQuerySize] = useState(10)
    let [sorting, setSorting] = useState(props.sorting);

    const loadFunc = () => {
        api.fetchAllData(querySize+10, sorting).then(res => {
            setCurrentProfiles(res)
            setQuerySize(querySize+10)
        })
    }

    useEffect(() => setSorting(props.sorting), [props.sorting])

    useEffect(() => {
        api.fetchAllData(querySize, sorting).then(res => setCurrentProfiles(res))
    }, [sorting, querySize])

    return (
        <div id="show-profiles">
           {currentProfiles && <InfiniteScroll
                dataLength={currentProfiles.length} //This is important field to render the next data
                next={loadFunc}
                hasMore={true}
                loader={<div className="spinner-grow text-danger" role="status"><span className="sr-only" /></div>}
                endMessage={
                    <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <MDBContainer id="show-profiles">
                    {currentProfiles && currentProfiles.map( (item, i) => <Card key={i} profile={item} />)}
                </MDBContainer>
            </InfiniteScroll>}
        {!currentProfiles && <Loading />}
        </div>
    )
}
