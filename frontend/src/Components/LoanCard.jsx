import React from 'react';
import { Icon } from 'antd';
import { get } from 'lodash';
import './LoanCard.css';

const LoanCard = (props) => (
  <div className="LoanCard" key={props.key} onClick={get(props, 'onClick', () => {})}>
    <h3>{get(props, 'title', '')}</h3>
    <div><Icon className="LoadCardIcon" type={get(props, 'icon', 'rise')} /></div>
    <div className="LoanCardDescription">
      <div>min: {get(props, 'min', '')}</div>
      <div>max: {get(props, 'max', '')}</div>
    </div>
  </div>
);

export default LoanCard;