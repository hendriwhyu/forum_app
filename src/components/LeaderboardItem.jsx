import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem(props) {
  const { user, score, index } = props;
  return (
    <div className="leaderboard-item flex  h-auto items-start flex-shrink-0 w-full">
      <div className="rank flex w-auto h-auto pr-8 py-13 justify-center items-center flex-shrink-0 self-center">
        <div className="avatar placeholder">
          <div className="w-6 bg-primary rounded-full text-white">
            <span>{index}</span>
          </div>
        </div>
      </div>
      <div className="profile grow flex flex-row gap-3  flex-shrink-0 text-center">
        <img
          src={user?.avatar}
          alt="profile"
          className="rounded-full w-8 h-8"
        />
        <h3 className="flex items-center">{user?.name}</h3>
      </div>
      <div className="flex justify-end items-center p-1">
        <span className="text-primary font-normal">{score}</span>
      </div>
    </div>
  );
}
const userShape = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

LeaderboardItem.propTypes = {
  index: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
