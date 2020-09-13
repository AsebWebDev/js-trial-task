import React from 'react'
import '../styles/Tag.scss'

export default function DiffTag(props) {
    const { status } = props
    let badgeColor, icon

    switch(status) {
        case "ONLINE": badgeColor = "badge badge-success"; icon="fas fa-toggle-on"; break;
        case "OFFLINE": badgeColor = "badge badge-danger"; icon="fas fa-toggle-off"; break;
        case "DATE": badgeColor = "badge badge-secondary"; icon="fas fa-heart"; break;
        default:    if (typeof(status) === 'number') { badgeColor = "badge badge-info"; icon="fas fa-location-arrow";}
                    else { badgeColor = "badge badge-light"; icon="";}
    }
    
    return (
        <span id="tag" className={badgeColor}><i className={icon} aria-hidden="true"></i> {status}</span>
    )
}