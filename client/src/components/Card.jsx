import React, {useState} from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBView, MDBCardText } from 'mdbreact';
import ReactCardFlip from 'react-card-flip';
import Tag from './Tag'
import moment from 'moment'
import '../styles/Card.scss'

export default function Card(props) {
    const { profile } = props
    const { last_login, name, online_status, picture, is_plus } = profile
    const { distance } = profile.location
    let [isFlipped, setIsFlipped] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped)
    }

    return (
        <div id="card">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                {/* ###### F R O N T ###### */}
                <div className="card-front" onClick={handleClick}>
                    <MDBCard onClick={handleClick}>
                        <div className="card-head">
                            <h3>{name}</h3>
                            <div id="profile-pic">
                                <MDBView hover>
                                    {picture && <MDBCardImage className="img-fluid" src={picture.url} waves /> }      
                                </MDBView>
                            </div>
                            {picture && picture.comment && <div className="comment"><i>"{picture.comment}"</i></div>}
                        </div>
                        <MDBCardBody>
                            <MDBCardText >
                                <div className="statusBox">
                                    <Tag status={distance}/>
                                    <Tag status={online_status}/>
                                    <Tag status={moment(last_login).startOf('hour').fromNow()}/>
                                </div>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>       
                </div>
        
                {/* ###### B A C K ###### */}
                <div className="card-back" onClick={handleClick}>
                    back
                </div>
            </ReactCardFlip>
        </div>
    )
}
