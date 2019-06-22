import React from 'react';
import { Card, Icon } from 'antd';
import { get } from 'lodash';
import './LoanCard.css';

const LoanCard = (props) => (
  <Card title={props.title} onClick={get(props, 'onClick', () => {})}>
    <div><Icon className="LoadCardIcon" type={get(props, 'icon', 'dollar')} theme="twoTone" twoToneColor="#4e2B82" /></div>
     <div className="LoanCardDescription">
        <div>amount: {get(props, 'amount', '')}</div>
        <div>Tenor: {get(props, 'tenor', '')}</div>
        <div>installment: {get(props, 'installment', '')}</div>
        <div>interestRate: {get(props, 'interest', '')}</div>
        <div>min: {get(props, 'min', '')}</div>
        <div>max: {get(props, 'max', '')}</div>
    </div>
  </Card>
  // <div className="LoanCard" key={props.key} onClick={get(props, 'onClick', () => {})}>
  //   <h3>{get(props, 'title', '')}</h3>
  //   <div><Icon className="LoadCardIcon" type={get(props, 'icon', 'dollar')} theme="twoTone" twoToneColor="#4e2B82" /></div>
  //   <div className="LoanCardDescription">
  //     <div>min: {get(props, 'min', '')}</div>
  //     <div>max: {get(props, 'max', '')}</div>
  //   </div>
  // </div>
);

export default LoanCard;