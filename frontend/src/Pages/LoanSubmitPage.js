import React from 'react';
import { withRouter } from 'react-router';
import { Form, Input, Icon, Select } from 'antd';
import StepBars from '../Components/StepsBar';
import './LoanSubmitPage.css';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  labelAlign: 'left',
};

class LoanSubmitPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      steps: 1,
      loanAmount: 1000000,
      occupation: 'Labour',
      salary: 65000,
      installment: 15000,
      interest: 7,
    };
  }

  handleNextStep = () => this.props.history.push('/loan-summary');

  handleBackStep = () => this.props.history.push('/loan-compare');

  render(){
    return(
      <div className="LoanSubmitPage">
        <h1>กรอกข้อมูล</h1>
        <div className="steps-bar">
          <StepBars current={3} />
        </div>
        <div className="loan-submit-body">
          <h1>
            ส่งคำขอสินเชื่อ
          </h1>
          <Form {...formItemLayout} onSubmit={this.handleNextStep}>
            <Form.Item label="วงเงินที่คุณต้องการ">
              <Input
                prefix={<Icon type="dollar" style={{ color: 'rgba(0,0,0,.25)' }} />}
                onChange={(e) => this.setState({ loanAmount: e.target.value })}
                defaultValue={this.state.loanAmount}
                type="number"
                addonAfter=" บาท"
                placeholder="จำนวนเงินที่ท่านต้องการขอสินเชื่อ"
              />
            </Form.Item>
            <Form.Item label="อาชีพของท่าน">
              <Select
              placeholder="Select a option and change input text above"
              onChange={(value) => this.setState({ occupation: value})}
              value={this.state.occupation}
              >
                <Option value="Labour">พนักงานประจำ</Option>
                <Option value="Owner">ผู้ประกอบการ</Option>
              </Select>
            </Form.Item>
            <Form.Item label="รายได้ต่อเดือน">
              <Input
                prefix={<Icon type="dollar" style={{ color: 'rgba(0,0,0,.25)' }} />}
                onChange={(e) => this.setState({ salary: e.target.value })}
                value={this.state.salary}
                type="number"
                addonAfter=" บาท"
                placeholder="รายได้ต่อเดือนของท่าน"
              />
            </Form.Item>
            <Form.Item label="จำนวนเงินที่ท่านยินดีผ่อนชำระต่อเดือน" >
              <Input
                prefix={<Icon type="dollar" style={{ color: 'rgba(0,0,0,.25)' }} />}
                onChange={(e) => this.setState({ installment: e.target.value })}
                value={this.state.installment}
                type="number"
                addonAfter=" บาท / เดือน"
                placeholder="จำนวนเงินผ่อนต่อเดือน"
              />
            </Form.Item>
            <Form.Item label="อัตราดอกเบี้ย">
              <Input
                prefix={<Icon type="dollar" style={{ color: 'rgba(0,0,0,.25)' }} />}
                onChange={(e) => this.setState({ interest: e.target.value })}
                value={this.state.interest}
                type="number"
                placeholder="ดอกเบี้ยที่ท่านต้องการ"
                addonAfter=" % ต่อปี"
              />
            </Form.Item>
          </Form>
          <button className="next-button" onClick={this.handleNextStep}>ถัดไป</button>
          <button className="back-button" onClick={this.handleBackStep}>ถัดไป</button>
        </div>
      </div>
    );
  }
}

const WrappedLoanSubmitPage = Form.create({ name: 'loan_submit' })(LoanSubmitPage);

export default withRouter(WrappedLoanSubmitPage);