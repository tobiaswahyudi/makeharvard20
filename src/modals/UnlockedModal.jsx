import React from 'react'
import BackgroundBlur from './BackgroundBlur'

import unlocked from '../img/unlocked.png'

import './UnlockedModal.css'

const UnlockedModal = ({ setScanned }) => {
    return (
        <div>
            <BackgroundBlur>
                <div className="modal unlocked-modal" >
                    <img src={unlocked} alt="unlocked!" />
                    <span className="unlocked-modal-title">Entry Granted!</span>
                    <span className="unlocked-modal-content">Welcome to Northwest Labs.</span>
                    <span className="unlocked-modal-timestamp">January 22, 2019 04.32 PM</span>
                    <button className="unlocked-modal-dismiss" onClick={() => setScanned(false)}>Dismiss</button>
                </div>
            </BackgroundBlur>
        </div>
    )
}

export default UnlockedModal;