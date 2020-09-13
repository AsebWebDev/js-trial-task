import React from 'react'
import romeoLogo from '../media/logo.png'
import '../styles/Header.scss'

export default function Header() {
    return (
        <div id="header">
            <img src={romeoLogo} alt="Romeo-Logo"/>
            <h1>Romeo Romance</h1>
        </div>
    )
}
