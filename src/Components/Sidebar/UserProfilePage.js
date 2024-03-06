import React, { useEffect, useState } from 'react';
import { getUserData } from './api'; // Import function to fetch user data

const UserProfilePage = ({ userId }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data
        getUserData(userId)
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, [userId]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div className="user-info">
                <img src={userData.avatar} alt="User Avatar" />
                <div>
                    <h3>{userData.username}</h3>
                    <p>{userData.email}</p>
                    {/* Display other user information */}
                </div>
            </div>
            {/* Add other sections such as uploaded videos, playlists, liked videos, etc. */}
        </div>
    );
};

export default UserProfilePage;
