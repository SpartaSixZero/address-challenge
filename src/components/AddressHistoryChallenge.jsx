import React, { useState } from 'react';
import AddressList from './AddressList';
import AddressEventList from './AddressEventList';

const AddressHistoryChallenge = () => {

  const [userId, setUserId] = useState('');
  const [currentView, setCurrentView] = useState('addressList');
  const [addresses, setAddresses] = useState([]);
  const [addressEvents, setAddressEvents] = useState([]);

  const fetchButtonOnClick = () => {
  fetch(`http://localhost:5000/users/${userId}/addresses`)
    .then(res => res.json())
    .then(
      (result) => {
        setAddresses(result)
      }
    )
  } 

  const userIdInputOnChange = (event) => {
    console.log('It go into this method');
    console.log('event is', event);
    console.log('event.target.value is', event.target.value);
    setUserId(event.target.value);
  }

  const backButtonOnClick = () => {
    setCurrentView('addressList');
    setAddressEvents([]);
  }

  const addressOnClick = (addressId) => {
    fetch(`http://localhost:5000/addresses/${addressId}/events`)
    .then(res => res.json())
    .then(
      (result) => {
        setAddressEvents(result)
      }
    )

    setCurrentView('addressEventsList');
  }

  const renderAddressHistoryChallenge = () => {
    if (currentView === 'addressList') {
      return (
        <div>
          <p>Please enter a user id</p>
          <input onChange={userIdInputOnChange} value={userId}></input>
          <button onClick={fetchButtonOnClick}>Fetch</button>
          <AddressList addresses={addresses} addressOnClick={addressOnClick}/>
        </div>
      )
     } else {
      return <AddressEventList addressEvents={addressEvents} backButtonOnClick={backButtonOnClick}/>;
    }
  }

  return (
    <div>
      {renderAddressHistoryChallenge()}
    </div>
  )
}

export default AddressHistoryChallenge;