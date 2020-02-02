import React, { useState } from 'react';
import BigViewNav from './BigViewNav';
import AccountPage from './account/AccountPage';
import KeysPage from './keys/KeysPage';
import HistoryPage from './history/HistoryPage';

const BigView = () => {
    const [tab, setTab] = useState(1);

    return (
        <div className='bigView container'>
            <BigViewNav tab={tab} setTab={setTab} />
            {tab === 0 && <AccountPage />}
            {tab === 1 && <KeysPage />}
            {tab === 2 && <HistoryPage />}
        </div>
    )
}

export default BigView;