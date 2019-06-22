import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { get, map } from 'lodash';
import CompareLoan from '../Components/CompareLoan';
import StepBars from '../Components/StepsBar';
import api from '../Services/api';
import './LoanComparePage.css';

class LoanComparePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  async componentDidMount () {
    const data = await Promise.all([
      api.fetchCalculateLoan({ totalRequestAmount: 1000000, installmentAmount: 25000 }),
      api.fetchCalculateLoan({ totalRequestAmount: 1300000, installmentAmount: 50000 }),
      api.fetchCalculateLoan({ totalRequestAmount: 1250000, installmentAmount: 40000 }),
    ]);
    const result = map(data, (value, key) => get(value, 'data.loan', {}));
    this.setState({ data: result });
  }

  handleOnClickLoan = () => this.props.history.push('/loan-submit');

  render() {
    return(
      <Fragment>
        <div className="loanComparePage">
          <div className="steps-bar">
            <StepBars current={1} />
          </div>
        </div>
        <CompareLoan onClick={this.handleOnClickLoan} data={this.state.data} />
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