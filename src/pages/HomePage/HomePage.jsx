import React from 'react';
import './HomePage.css';
import ProfileSide from '../../Components/ProfileSide/ProfileSide';

const HomePage = () => {
  return (
    <div className="Home">
      <div className="profileSide">
        <ProfileSide />
      </div>
      <div className="postSide">Post</div>
      <div className="rightSide">Right side</div>
    </div>
  );
};

export default HomePage;
