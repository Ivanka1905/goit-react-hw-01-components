import PropTypes from 'prop-types'; // ES6
import {
  ListItem,
  Status,
  ListName,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <Status statusOfFriend={isOnline}>{isOnline}</Status>
      <img src={avatar} alt="User avatar" width="48" />
      <ListName>{name}</ListName>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
