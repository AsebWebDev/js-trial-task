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
    const { anal_position } = profile.sexual
    const { age, body_hair, body_type, eye_color, relationship, smoker, weight, height } = profile.personal
    
    let [isFlipped, setIsFlipped] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped)
    }

    return (
        <div id="card">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                {/* ###### F R O N T ###### */}
                <div className="card-front">
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
                <div className="card-back">
                    <MDBCard onClick={handleClick}>
                        <div id="profile-pic">
                            {picture && <img className="img-fluid" src={picture.url} waves />}
                        </div>
                        <MDBCardBody>
                            <div className="user-data-personal">
                                <h4>{name}</h4>
                                <ul>
                                    <li><b>Anal Position:</b>  {anal_position}</li>
                                    <li><b>Body Hair:</b> {body_hair}</li>
                                    <li><b>Age:</b> {age}</li>
                                    <li><b>Body Type:</b> {body_type}</li>
                                    <li><b>Eye Color:</b> {eye_color}</li>
                                    <li><b>Relationship:</b> {relationship}</li>
                                    <li><b>Smoker:</b> {smoker}</li>
                                    <li><b>Weight:</b> {weight.kg}kg</li>
                                    <li><b>Height:</b> {height.cm}cm</li>
                                </ul>
                                
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </ReactCardFlip>
        </div>
    )
}
