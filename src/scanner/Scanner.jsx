import React, { useState } from "react";
import QrReader from 'react-qr-reader';

const Scanner = () => {
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
        }
    }
    const handleError = (err) => {
        console.error(err)
    }

    return (
        <div style={{width: '70vh'}}>
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