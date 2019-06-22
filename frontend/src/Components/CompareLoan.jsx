import React from 'react';
import { map } from 'lodash';
import LoanCard from './LoanCard';
import './CompareLoan.css';

const CompareLoan = (props) => {
  const { onClick } = props;
  const mockData = [
    {
      onClick,
      title: 'Plan 1',
      amount: 100000,
      tenor: 24,
      installment: 5000,
      interestRate: 18,
      min: 10000,
      max: 100000,
    },
    {
      onClick,
      title: 'Plan 2',
      amount: 150000,
      tenor: 22,
      installment: 10000,
      interestRate: 15,
      min: 15000,
      max: 150000,
    },
    {
      onClick,
      title: 'Plan 3',
      amount: 200000,
      tenor: 20,
      installment: 12000,
      interestRate: 12,
      min: 12000,
      max: 120000,
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