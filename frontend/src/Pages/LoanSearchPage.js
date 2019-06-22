import React from 'react';
import { Button, Form, Input, Icon } from 'antd';
import StepBars from '../Components/StepsBar';
import api from '../Services/api';

import './LoanSearchPage.css';


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

class LoanSearchPage extends React.Component {
  constructor(props){
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render(){
    const { getFieldDecorator } = this.props.form
    return(
      <div className="loanSearchPage">
        <h1>LoanSearch</h1>
        <div className="steps-bar">
          <StepBars current={0} />
        </div>
        <h1>
          กรุณากรอกข้อมูลเพื่อค้นหาสินเชื่อสำหรับคุณ
        </h1>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
          <Form.Item label="วงเงินที่คุณต้องการ">
            {getFieldDecorator('loanAmount', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="number"
                placeholder="จำนวนเงินที่ท่านต้องการขอสินเชื่อ"
              />,
            )}
          </Form.Item>
          <Form.Item label="รายได้ต่อเดือน">
            {getFieldDecorator('salary', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="number"
                placeholder="รายได้ต่อเดือนของท่าน"
              />,
            )}
          </Form.Item>
          <Form.Item label="จำนวนเงินที่ท่านยินดีผ่อนชำระต่อเดือน" >
            {getFieldDecorator('installment', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="number"
                placeholder="จำนวนเงินผ่อนต่อเดือน"
              />,
            )}
          </Form.Item>
        </Form>
        <Button onClick={this.handleSubmit} primary>Next</Button>
        <Button onClick={api.fetchLoan} primary>Fetch Loan</Button>
      </div>
    );
  }
}

const WrappedLoanSearchPage = Form.create({ name: 'loan_search' })(LoanSearchPage);

export default WrappedLoanSearchPage;