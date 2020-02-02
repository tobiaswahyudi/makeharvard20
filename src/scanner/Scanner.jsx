import React, { useState } from "react";
import QrReader from 'react-qr-reader';

import './Scanner.css'

const Scanner = ({setScanned}) => {
    const [scannedCode, setScannedCode] = useState('');

    const handleScan = (data) => {
        if (data) {
            setScannedCode(data)
            setScanned(true)
        }
    }

    return (
        <div className='scanner-camera-container'>
            <QrReader
                delay={300}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            <p>{scannedCode? `Scanned "${scannedCode}"` : "Scan a code!"}</p>
        </div>
    )
}

export default Scanner;