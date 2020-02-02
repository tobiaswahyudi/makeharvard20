import React from 'react';
import '../base.css'
import './ScannerHeader.css'

import backChevron from '../img/chevron-left.png';

const ScannerHeader = () => {
    return (
        <div className="scanner-nav-overflow">
            <div className="scanner-nav">
                <button className="scanner-nav-back">
                    <img src={backChevron} alt="back"/>
                </button>
                <span className="scanner-nav-title">QR Scan</span>
            </div>
        </div>
    )
}

export default ScannerHeader;