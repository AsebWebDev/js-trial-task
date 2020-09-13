import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import '../styles/Card.scss'

export default function Card() {
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
                        front   
                </div>
        
                {/* ###### B A C K ###### */}
                <div className="card-back" onClick={handleClick}>
                    back
                </div>
            </ReactCardFlip>
        </div>
    )
}
