import React from 'react';
import { map } from 'lodash';
import LoanCard from './LoanCard';
import './CompareLoan.css';

const CompareLoan = (props) => {
  const { onClick, data } = props;
  const cards = [
    {
      onClick,
      title: 'Speedy Loan',
      ...(data && data[0]) ? data[0] : null,
      imageUrl: 'https://www.scb.co.th/content/dam/scb/personal-banking/loans/personal-loans/images/speedy-loan-banner-web.jpg'
    },
    {
      onClick,
      title: 'Super Loan',
      ...(data && data[1]) ? data[1] : null,
      imageUrl: 'https://www.scb.co.th/content/dam/scb/personal-banking/loans/car-loans/images/mcmc-web-banner.jpg'
    },
    {
      onClick,
      title: 'Special Loan',
      ...(data && data[2]) ? data[2] : null,
      imageUrl: 'https://www.scb.co.th/content/dam/scb/personal-banking/loans/personal-loans/images/your-loan-1440x480px.jpg'
    }
  ];
  return (
    <div className="CompareLoan">
    <h2>สินเชื่อสำหรับคุณ</h2>
      <div className="CompareLoanContainer">
        {map(cards, (value, key) => <LoanCard key={key} {...value} />)}
      </div>
    </div>
  );
};

export default CompareLoan;