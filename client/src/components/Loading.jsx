import React from 'react'
import '../styles/Loading.scss'

export default function Loading() {
    return (
        <div id="loading-jumbo">
            <div className="spinner-grow text-danger" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}
