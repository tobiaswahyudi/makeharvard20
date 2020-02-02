import React, { useState } from "react";
import QrReader from 'react-qr-reader';
import axios from 'axios';

import './Scanner.css'

const Scanner = ({setScanned}) => {
    const [scannedCode, setScannedCode] = useState('');
    //var xhr = new XMLHttpRequest()
    const handleScan = (data) => {
        if (data) {
            setScannedCode(data)
            setScanned(true)
            axios.post(
                'https://qrentry-makeharvard-2020.appspot.com/gate',
                {},
                {
                    headers: {
                        email: 'bruh1@math.harvard.edu',
                        gateID: 420
                    }
                }
            )
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