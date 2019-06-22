import React from 'react';
import { withRouter } from 'react-router'
import CompareLoan from '../Components/CompareLoan';
import StepBars from '../Components/StepsBar';
import './LoanComparePage.css';

class LoanComparePage extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    return(
      <div className="loanComparePage">
        <h1>เปรียบเทียบสินเชื่อที่คุณต้องการ</h1>
        <div className="steps-bar">
          <StepBars current={1} />
        </div>
        <CompareLoan />
        <div className="loan-compare-body">
          <button
            className="back-button"
            onClick={() => this.props.history.push('./loan-search')}
          >
            ย้อนกลับ
          </button>
        </div>
      </div>
    )
  }
};

export default withRouter(LoanComparePage);