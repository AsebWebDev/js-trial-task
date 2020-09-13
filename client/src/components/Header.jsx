import React from 'react'
import { MDBAnimation } from 'mdbreact';
import romeoLogo from '../media/logo.png'
import '../styles/Header.scss'

export default function Header() {
    return (
        <div id="header">
            <MDBAnimation type="flipInX">
                <img src={romeoLogo} alt="Romeo-Logo"/>
            </MDBAnimation>
            <h1>Romeo Romance</h1>
        </div>
    )
}
