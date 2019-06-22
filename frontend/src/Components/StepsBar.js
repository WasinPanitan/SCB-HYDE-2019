import React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

class StepsBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('this.props. step', this.props.current);
    return (
      <div>
        <Steps progressDot current={this.props.current}>
          <Step title="กรอกข้อมูล">1</Step>
          <Step title="เปรียบเทียบสินเชื่อที่คุณต้องการ">2</Step>
          <Step title="ส่งคำขอสินเชื่อ">3</Step>
        </Steps>
      </div>
    )
  }
};

export default StepsBar;