import React, { useState } from "react";
import QrReader from 'react-qr-reader';

import './Scanner.css'

const Scanner = ({setScanned}) => {
    const [scannedCode, setScannedCode] = useState('');
    // const [requestedMedia, setRequestedMedia] = useState(false)

    /*useEffect(() => {
        console.log(navigator, navigator && navigator.getUserMedia)
        if(!requestedMedia && navigator && navigator.getUserMedia) {
            navigator.getUserMedia({ video: true }, () => setRequestedMedia(true), err => console.error(err))
        }
    })*/

    const handleScan = (data) => {
        console.log("try", data)
        if (data) {
            setScannedCode(data)
            setScanned(true)
        }
    }
    const handleError = (err) => {
        console.error(err)
    }

    return (
        <div className='scanner-camera-container'>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
            />
            <p>{scannedCode? `Scanned "${scannedCode}"` : "Scan a code!"}</p>
        </div>
    )
}

export default Scanner;