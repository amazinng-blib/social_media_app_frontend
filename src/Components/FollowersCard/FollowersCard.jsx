import React from 'react';
import './FollowersCard.css';
import { Followers } from '../../Data/FollowersData';

const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>who is Following You</h3>

      {Followers?.map((follower, index) => {
        return (
          <div className="follower" key={index}>
            <div>
              <img
                src={follower?.img}
                alt="follower image"
                className="followerImg"
              />
              <div className="name">
                <span>{follower?.name}</span>
                <span>@{follower?.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
