import React from 'react';
import ScannerHeader from './ScannerHeader'
import Scanner from './Scanner'

import lightscan from "../img/lightscan.png"
import viewfinder from "../img/viewfinder.png"
import "../base.css"
import './ScannerPage.css'

const ScannerPage = () => {
    return (
        <div className="scanner-page-container">
            <ScannerHeader />
            <img src={lightscan} className="lightscan" alt="light scan"/>
            <img src={viewfinder} className="viewfinder" alt="view finder"/>
            <Scanner />
            <div className="scanner-bottom-vignette">
                <span>Use camera to scan QR Code and enter</span>
            </div>
        </div>
    )
}

export default ScannerPage;