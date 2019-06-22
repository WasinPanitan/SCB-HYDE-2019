import React from 'react';
import { format } from 'currency-formatter';
import { Card } from 'antd';
import { get } from 'lodash';
import './LoanCard.css';

const formatter = (text) => (!text) ? '' : format(text, { code: 'TH', precision: 0 })

const LoanCard = (props) => (
  <Card
    style={{ width: 280 }}
    hoverable
    cover={<img className="LoanCardImage" alt="example" src={props.imageUrl} width="250" height="130" />}
    onClick={get(props, 'onClick', () => {})}
  >
    <Card.Meta
      title={props.title}
      description={
        <div className="LoanCardDescription">
          <div>ยอดกู้: {formatter(get(props, 'amount', ''))}</div>
          <div>ระยะเวลาผ่อน: {get(props, 'tenor', '')} เดือน</div>
          <div>ยอดผ่อน: {formatter(get(props, 'installment', ''))} บาท</div>
          <div>อัตราดอกเบี้ย: %{get(props, 'interestRate', '')}</div>
          <div>ยอดกู้ต่ำสุด: {formatter(get(props, 'min', ''))}</div>
          <div>ยอดกู้สูงสุด: {formatter(get(props, 'max', ''))}</div>
        </div>
      }
    />
  </Card>
);

export default LoanCard;