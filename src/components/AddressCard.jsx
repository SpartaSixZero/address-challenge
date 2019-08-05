import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

const AddressCard = ({address, addressOnClick}) => {
  const classes = useStyles();

  const renderStreet = () => {
    if (address.street_one && address.street_two) {
      return (
        <div>
          <Typography className={classes.title}>
            {address.street_one}
          </Typography>
          <Typography className={classes.title}>
            {address.street_two}
          </Typography>
        </div>
      );
    }
    return (
      <Typography className={classes.title}>
        {address.street_one}
      </Typography>
    )
  }

  const handleAddressOnClick = () => {
    addressOnClick(address.id);
  }

  return (
    <Card className={classes.card} onClick={handleAddressOnClick}>
      <CardContent>
        {renderStreet()}
        <Typography variant="body2" component="p">
          {address.city} {address.state} {address.zip_code}
        </Typography>
        <Typography variant="body2" component="p">
          {address.country}
        </Typography>
      </CardContent>
    </Card>
  )
}

AddressCard.propTypes = {
  address: PropTypes.shape({
    id: PropTypes.string,
    user_id: PropTypes.string,
    street_one: PropTypes.string,
    street_two: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip_code: PropTypes.string,
    country: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    deleted_at: PropTypes.string
  }),
  addressOnClick: PropTypes.func.isRequired
};

export default AddressCard;

