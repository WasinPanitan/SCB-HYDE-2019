import React from 'react';
import { Button, Form, Input, Icon, Select } from 'antd';
import { map, pick } from 'lodash';
import StepBars from '../Components/StepsBar';
import api from '../Services/api';

import './LoanSearchPage.css';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  labelAlign: 'left',
};

class LoanSearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      steps: 1,
      loanAmount: null,
      occupation: 'Labour',
      salary: null,
      installment: null,
      interest: null,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({ steps: 2 });
      }
    });
  };

  render(){
    const { getFieldDecorator } = this.props.form;
    console.log('this state', this.state);
    return(
      <div className="loanSearchPage">
        <h1>LoanSearch</h1>
        <div className="steps-bar">
          <StepBars current={0} />
        </div>
        {this.state.steps == 1 ? (
          <React.Fragment>
            <h1>
              กรุณากรอกข้อมูลเพื่อค้นหาสินเชื่อสำหรับคุณ
            </h1>
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
              <Form.Item label="วงเงินที่คุณต้องการ">
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  onChange={(e) => this.setState({ loanAmount: e.target.value })}
                  defaultValue={this.state.loanAmount}
                  type="number"
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
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  onChange={(e) => this.setState({ salary: e.target.value })}
                  value={this.state.salary}
                  type="number"
                  placeholder="รายได้ต่อเดือนของท่าน"
                />
              </Form.Item>
              <Form.Item label="จำนวนเงินที่ท่านยินดีผ่อนชำระต่อเดือน" >
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  onChange={(e) => this.setState({ installment: e.target.value })}
                  value={this.state.installment}
                  type="number"
                  placeholder="จำนวนเงินผ่อนต่อเดือน"
                />
              </Form.Item>
              <Form.Item label="ดอกเบี้ย">
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  onChange={(e) => this.setState({ interest: e.target.value })}
                  value={this.state.interest}
                  type="number"
                  placeholder="ดอกเบี้ยที่ท่านต้องการ"
                />
              </Form.Item>
            </Form>
            <Button onClick={this.handleSubmit} primary>Next</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div>
              <h1>ท่านต้องการเงินเร่งด่วนหรือไม่</h1>
              <div><Button onClick={this.handleSubmit}>Yes</Button></div>
              <div><Button>No</Button></div>
            </div>
            <div>
              <Button onClick={() => this.setState({ steps: 1 })}>ย้อนกลับ</Button>
            </div>
          </React.Fragment>
        )}
        <div>
          <Button onClick={api.fetchLoan} primary>Fetch Loan</Button>
        </div>
      </div>
    );
  }
}

const WrappedLoanSearchPage = Form.create({ name: 'loan_search' })(LoanSearchPage);

export default WrappedLoanSearchPage;