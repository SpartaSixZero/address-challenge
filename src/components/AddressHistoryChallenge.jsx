import React from 'react';
import AddressList from './AddressList';
import AddressEventList from './AddressEventList';

class AddressHistoryChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      currentView: "addressList",
      addresses: [],
      addressEvents: []
    };
  }

   fetchButtonOnClick = () => {
    fetch(`http://localhost:5000/users/${this.state.userId}/addresses`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({addresses: result})
        }
      )
  } 

  userIdInputOnChange = (event) => {
    this.setState({userId: event.target.value});
  }

  backButtonOnClick = () => {
    this.setState({currentView: 'addressList'});
    this.setState({addressEvents: []});
  }

  addressOnClick = (addressId) => {
    fetch(`http://localhost:5000/addresses/${addressId}/events`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({addressEvents: result})
      }
    )

    this.setState({currentView: 'addressEventsList'});
  }

  render() {
    if (this.state.currentView === 'addressList') {
      return (
        <div>
          <p>Please enter a user id</p>
          <input onChange={this.userIdInputOnChange} value={this.state.userId}></input>
          <button onClick={this.fetchButtonOnClick}>Fetch</button>
          <AddressList addresses={this.state.addresses} addressOnClick={this.addressOnClick}/>
        </div>
      )
    } else {
      return <AddressEventList addressEvents={this.state.addressEvents} backButtonOnClick={this.backButtonOnClick}/>;
    }
  }
}

export default AddressHistoryChallenge;