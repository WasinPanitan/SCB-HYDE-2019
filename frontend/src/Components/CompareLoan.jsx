import React from 'react';
import { map } from 'lodash';
import LoanCard from './LoanCard';
import './CompareLoan.css';

const CompareLoan = (props) => {
  const { onClick } = props;
  const mockData = [
    {
      onClick,
      title: 'Speedy Loan',
      amount: 100000,
      tenor: 24,
      installment: 5000,
      interestRate: 18,
      min: 10000,
      max: 100000,
      imageUrl: 'https://www.scb.co.th/content/dam/scb/personal-banking/loans/personal-loans/images/speedy-loan-banner-web.jpg'
    },
    {
      onClick,
      title: 'Super Loan',
      amount: 150000,
      tenor: 22,
      installment: 10000,
      interestRate: 15,
      min: 15000,
      max: 150000,
      imageUrl: 'https://www.scb.co.th/content/dam/scb/personal-banking/loans/car-loans/images/mcmc-web-banner.jpg'
    },
    {
      onClick,
      title: 'Special Loan',
      amount: 200000,
      tenor: 20,
      installment: 12000,
      interestRate: 12,
      min: 12000,
      max: 120000,
      imageUrl: 'https://www.scb.co.th/content/dam/scb/personal-banking/loans/personal-loans/images/your-loan-1440x480px.jpg'
    }
  ];

  return (
    <div className="CompareLoan">
    <h2>สินเชื่อสำหรับคุณ</h2>
      <div className="CompareLoanContainer">
        {map(mockData, (value, key) => <LoanCard key={key} {...value} />)}
      </div>
    </div>
  );
};

export default CompareLoan;