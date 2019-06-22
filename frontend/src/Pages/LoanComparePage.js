import React from 'react';
import CompareLoan from '../Components/CompareLoan';
import StepBars from '../Components/StepsBar';

class LoanComparePage extends React.Component {
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div>
        <StepBars current={1} />
        <CompareLoan />
      </div>
    )
  }
};

export default LoanComparePage;