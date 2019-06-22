import React, { Fragment } from 'react';
import { withRouter } from 'react-router'
import CompareLoan from '../Components/CompareLoan';
import StepBars from '../Components/StepsBar';
import './LoanComparePage.css';

class LoanComparePage extends React.Component {
  handleOnClickLoan = () => this.props.history.push('/loan-submit');

  render() {
    return(
      <Fragment>
        <div className="loanComparePage">
          <div className="steps-bar">
            <StepBars current={1} />
          </div>
        </div>
        <CompareLoan onClick={this.handleOnClickLoan} />
        <div className="loan-compare-body">
          <button
            className="back-button"
            onClick={() => this.props.history.push('./loan-search')}
          >
            ย้อนกลับ
          </button>
        </div>
      </Fragment>
    )
  }
};

export default withRouter(LoanComparePage);