import React from 'react';

function Dashboard(props) {
  return (
    <div className="Dashboard">
      <h3>Your Perfect Day Dashboard!</h3>
      <div className="choice-group">
        <div className="choice">Food: {props.food}</div>
        <div className="choice">Show: {props.show}</div>
        <div className="choice">Activity: {props.activity}</div>
        <div className="choice">Book: {props.book}</div>
      </div>
    </div>
  );
}

export default Dashboard;
