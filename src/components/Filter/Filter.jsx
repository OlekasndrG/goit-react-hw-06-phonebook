import React from 'react';
// import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
// import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './FIlter.styled';
import { useDispatch, useSelector } from 'react-redux';

import { filter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.value);
 const onChangeFilterValue = evt => {
   dispatch(filter(evt.target.value));
 };

  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <FilterInput
        type="input"
        name="filter"
        value={filterValue}
        onChange={onChangeFilterValue}
      />
    </FilterLabel>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChangeFilterValue: PropTypes.func.isRequired,
// };

export default Filter;
