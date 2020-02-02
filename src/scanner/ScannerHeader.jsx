import React from 'react';
import './ScannerHeader.css'

const ScannerHeader = () => {
    return (
        <div className="scanner-nav">
            <button className="scanner-nav-back">
                {"<"}
            </button>
            <span className="scanner-nav-title">QR Scan</span>
        </div>
    )
}

export default ScannerHeader;