import React from 'react';
import { map } from 'lodash';
import LoanCard from './LoanCard';
import './CompareLoan.css';

const CompareLoan = () => {
  const onClick = () => {};
  const mockData = [
    {
      onClick,
      title: 'Plan 1',
      min: 10000,
      max: 100000,
    },
    {
      onClick,
      title: 'Plan 2',
      min: 15000,
      max: 150000,
    },
    {
      onClick,
      title: 'Plan 3',
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