import React from 'react';
import PropTypes from 'prop-types';
import AddressCard from './AddressCard';
import './AddressList.css';

const AddressList = ({ addresses, addressOnClick }) => {
  return (
    <div className='address-list'>
      {addresses.map((item, index) => {
        if (item.deleted_at) { return; } 
        return <AddressCard key={item.id} address={item} addressOnClick={addressOnClick}/>
      })}
    </div>
  )
}

AddressList.propTypes = {
  addresses: PropTypes.arrayOf(PropTypes.shape({})),
  addressOnClick: PropTypes.func.isRequired
};

AddressList.defaultProps = {
  addresses: []
};

export default AddressList;
