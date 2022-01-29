import React from 'react';
import { useMoralis } from 'react-moralis';
import Image from 'next/image';

function Avatar({ username, logoutOnPress}) {
    const { user, logout } = useMoralis();

    return (
    <Image 
        className='rounded-full bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 cursor-pointer hover:opacity-75'
        src = {`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`}
        onClick={() => logoutOnPress && logout()}
        layout='fill'
    />
    );
}

export default Avatar;
