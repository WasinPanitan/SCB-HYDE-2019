import React from 'react';
import { Button } from 'antd';
import StepBars from '../Components/StepsBar';
import api from '../Services/api';

class LoanSearchPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <h1>LoanSearch</h1>
      <div className="steps-bar">
        <StepBars current={2} />
      </div>
      <Button onClick={api.fetchLoan} primary>Fetch Loan</Button>
    </div>
    );
  }
}

export default LoanSearchPage;