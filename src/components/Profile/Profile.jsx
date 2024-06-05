import style from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.followers}>
            {Number(stats.followers).toLocaleString('en')}
          </span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.views}>
            {Number(stats.views).toLocaleString('en')}
          </span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.likes}>
            {Number(stats.likes).toLocaleString('en')}
          </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
