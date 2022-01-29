import React from 'react';
import { useMoralis } from 'react-moralis';

function ChangeUsername() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUsername = () => {
        const username = prompt(`Enter your new Username (current: ${user.getUsername()})`);

        if(!username) return;

        setUserData({
            username,    
        })
    }

    return (
        <div className='text-sm absolute top-5 right-5 text-white font-bold'>
            <button 
                disabled = {isUserUpdating}
                onClick = { setUsername } className='hover:animate-pulse bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 hover:opacity-75 rounded-full p-3 font-bold'
            >
                CHANGE YOUR USERNAME
            </button>
        </div>
    );
}

export default ChangeUsername;
