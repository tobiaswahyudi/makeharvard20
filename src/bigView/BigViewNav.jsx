import React from 'react';
import './BigViewNav.css';

import scan from '../img/scan.png';

const BottomNavChoice = ({ tabNumber, content, tab, setTab }) => {
    return (
        <button className='bottom-nav-choice-button' onClick={() => setTab(tabNumber)}>
            <div className={`bottom-nav-choice ${tabNumber === tab ? 'selected' : ''}`}>
                <h3 className='bottom-nav-choice-text'>{content}</h3>
                <hr className='bottom-nav-choice-line' />
            </div>
        </button>
    )
}

const BigViewNav = ({ tab, setTab }) => {
    return (
        <div className='big-view-nav nav'>
            <div className='top-nav-container'>
                <span className='nav-title'>Profile</span>
                <button className='nav-button-scanner'>
                    <img src={scan} alt="scan" />
                </button>
            </div>
            <div className='bottom-nav-container'>
                <BottomNavChoice tabNumber={0} content={"Account"} tab={tab} setTab={setTab} />
                <BottomNavChoice tabNumber={1} content={"Keys"} tab={tab} setTab={setTab} />
                <BottomNavChoice tabNumber={2} content={"History"} tab={tab} setTab={setTab} />
            </div>
        </div>
    )
}

export default BigViewNav;