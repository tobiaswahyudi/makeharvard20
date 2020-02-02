import React from 'react';
import ScannerHeader from './ScannerHeader'
import Scanner from './Scanner'

const ScannerPage = () => {
    return (
        <div className="scanner-page-container">
            <ScannerHeader />
            <Scanner />
        </div>
    )
}

export default ScannerPage;