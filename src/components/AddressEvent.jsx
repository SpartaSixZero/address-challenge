import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { bigIntLiteral } from '@babel/types';

const AddressEvent = ({event}) => {
  const renderTime = () => {
    let time;
    const dateTimeFormat = 'MM/DD/YYYY, h:mm:ss a';
    switch (event.type) {
      case 'ADDRESS_CREATED':
      case 'ADDRESS_UPDATED':
        time = moment(event.created_at).format(dateTimeFormat);
        break;
      case 'ADDRESS_DELETED':
        time = moment(event.payload.deleted_at).format(dateTimeFormat);
        break;
      case 'ADDRESS_RESTORED':
        time = moment(event.payload.restored_at).format(dateTimeFormat);
        break;
      default:
        time = moment().format(dateTimeFormat);
        break;
    }
    return <p>Time of event: {time}</p>
  }

  const renderEventType = () => {
    let type;
    switch (event.type) {
      case 'ADDRESS_CREATED':
        type = 'created';
        break;
      case 'ADDRESS_UPDATED':
        type = 'updated';
        break;
      case 'ADDRESS_DELETED':
        type = 'deleted';
        break;
      case 'ADDRESS_RESTORED':
        type = 'restored';
        break;
      default:
        type = 'unknown';
        break;
    }
    return <p>Event type: {type}</p>
  }
  
  return (
    <div>
      <p>{event.type}</p>
      {renderTime()}
      {renderEventType()}
    </div>
  )
}

AddressEvent.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    meta_data: PropTypes.shape({}),
    payload: PropTypes.shape({}),
    created_at: PropTypes.string,
    url: PropTypes.string
  })
}

export default AddressEvent;