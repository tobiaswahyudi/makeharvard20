import React, { useState } from 'react';
import ScannerHeader from './ScannerHeader'
import Scanner from './Scanner'

import lightscan from "../img/lightscan.png"
import viewfinder from "../img/viewfinder.png"
import "../base.css"
import './ScannerPage.css'
import UnlockedModal from '../modals/UnlockedModal';

const ScannerPage = ({ setPage }) => {
    const [scanned, setScanned] = useState(false);

    return (
        <div className="scanner-page-container">
            <ScannerHeader setPage={setPage} />
            <img src={lightscan} className="lightscan" alt="light scan" />
            <img src={viewfinder} className="viewfinder" alt="view finder" />
            <Scanner setScanned={setScanned} />
            <div className="scanner-bottom-vignette">
                <span>Use camera to scan QR Code and enter</span>
            </div>
            {scanned && <UnlockedModal setScanned={setScanned} />}
        </div>
    )
}

export default ScannerPage;