import React from 'react';
import Moment from 'moment';
import { NavLink } from 'react-router-dom';
import { Badge, Button } from 'reactstrap';

const PayPeriodSubHeader = (props) => {
  const { name, balance, startDate, endDate } = props.selectedPayPeriod;
  let balanceState = null;

  if (balance > 0) {
    balanceState = 'success'
  } else if (balance < 0) {
    balanceState = 'danger'
  }

  console.log(Moment(endDate).format());

  return (
    <div className="pay-period-sub-header container-fluid">
      <div className="row align-items-center">
        <div className="info col">
          <h2>{name}</h2>
        </div>
        <div className="dates col"><h5>{startDate} - {endDate}</h5></div>
        <span>This pay period has passed! <Button size="sm" color="danger">Roll over!</Button></span>
        <div className="balance col">
          <h2 className="text-right">
            <Badge
              color={balanceState || 'default'}
            >
              {balance}
            </Badge>
          </h2>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col" style={{ marginTop: '25px' }}>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to={'/dashboard/budget'} className="nav-link">Budget</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/dashboard/transactions'} className="nav-link">Transactions</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/dashboard/reports'} className="nav-link">Reports</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PayPeriodSubHeader;
