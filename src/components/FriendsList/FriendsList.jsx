import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import style from './FriendsList.module.css';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={style.friendsList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendsListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
