import React from 'react';
import './HomePage.css';
import ProfileSide from '../../Components/ProfileSide/ProfileSide';
import PostSide from '../../Components/PostSide/PostSide';
import RightSide from '../../Components/RightSide/RightSide';

const HomePage = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default HomePage;
