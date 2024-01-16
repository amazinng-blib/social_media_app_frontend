import React from 'react';
import './ProfileCard.css';
import CoverImage from '../../img/cover.jpg';
import ProfileImage from '../../img/profileImg.jpg';

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={CoverImage} alt="cover image" />
        <img src={ProfileImage} alt="profile image" />
      </div>
      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      {/* followers status */}
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>

              <div className="follow">
                <span>3</span>
                <span>Post</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {ProfilePage ? '' : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
