import React from 'react';

const list = [
    {
        letter: 'a',
        contents: [{
            name: "Accelerator Building",
            type: 'u',
            date: '03/09/2020',
        }]
    }
]

const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]

const KeyListing = ({ name, type, date, icon, extra = [] }) => {
    return (
        <div className='key-listing'>
            {/* <img /> */}
            <div className='listing-text'>
                <span className='listing-title'>{name}</span>
                {type === 'u' &&
                    <div className='listing-content unlimited'>
                        <div className='listing-type'>
                            img Unlimited Entry
                        </div>
                        <div className='listing-time'>
                            {`img ${date}`}
                        </div>
                    </div>
                }
                {type === 't' &&
                    <div className='listing-content token'>
                        <div className='listing-type'>
                            img Token
                        </div>
                        <div className='listing-tokens'>
                            {`img ${extra} left`}
                        </div>
                        <div className='listing-time'>
                            {`img ${date}`}
                        </div>
                    </div>
                }
                {type === 'l' &&
                    <div className='listing-content limited'>
                        <div className='listing-type'>
                            img Limited
                        </div>
                        <div className='listing-expiry'>
                            {`img ${extra} hrs`}
                        </div>
                        <div className='listing-time'>
                            {`img ${date}`}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const KeysPage = () => {
    return (
        <div className='keys-page'>
            <div className='keys-page-listings'>
                {
                    list.map(letter => {
                        return (<div className='keys-letter'>
                            <span className='keys-letter-title'>{letter.letter}</span>
                            <hr className='keys-letter-line' />
                            {letter.contents.map(
                                listing => <KeyListing name={listing.name} type={listing.type} date={listing.date} icon={listing.icon} extra={listing.extra} />
                            )}
                        </div>)
                    })
                }
            </div>
            <div className='keys-page-letters'>
                {
                    letters.map(letter => (
                        <span className={`letter-list${list.find(l => l.letter === letter) ? '-active' : ''}`}>{letter.toLocaleUpperCase}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default KeysPage;