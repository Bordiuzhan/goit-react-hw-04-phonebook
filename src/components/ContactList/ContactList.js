import { List, Item, Text, Btn } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ items, onDeleteContact }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <Text>
            {item.name}: {item.number}
          </Text>
          <Btn onClick={() => onDeleteContact(item.id)}>Delete</Btn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
