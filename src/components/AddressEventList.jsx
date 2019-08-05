import React from 'react';
import PropTypes from 'prop-types';
import AddressEvent from './AddressEvent';

const AddressEventList = ({backButtonOnClick, addressEvents}) => {
  return (
    <div>
      <button onClick={backButtonOnClick}>Back</button>
      {addressEvents.map((item, index) => {
        return <AddressEvent key={item.id} event={item}/>
      })}
    </div>
  )
}

AddressEventList.propTypes = {
  backButtonOnClick: PropTypes.func.isRequired,
  addressEvents: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    meta_data: PropTypes.shape({}),
    payload: PropTypes.shape({}),
    created_at: PropTypes.string,
    url: PropTypes.string
  })).isRequired
};

export default AddressEventList;