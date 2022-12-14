import { Label } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange}></input>
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
