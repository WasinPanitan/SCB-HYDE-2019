import React from 'react';
import { withRouter } from 'react-router';
import { Form, Input, Icon, Select } from 'antd';
import StepBars from '../Components/StepsBar';
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
      loanAmount: 1000000,
      occupation: 'Labour',
      salary: 65000,
      installment: 15000,
      interest: 7,
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

  handleNextStep = () => this.props.history.push('/loan-compare');

  render(){
    const { getFieldDecorator } = this.props.form;
    console.log('this state', this.state);
    return(
      <div className="loanSearchPage">
        <div className="steps-bar">
          <StepBars current={0} />
        </div>
        {this.state.steps === 1 ? (
          <div className="loan-search-body">
            <h1>
              กรุณากรอกข้อมูลเพื่อค้นหาสินเชื่อสำหรับ
            </h1>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
            <button className="next-button" onClick={this.handleSubmit}>ถัดไป</button>
          </div>
        ) : (
          <React.Fragment>
            <div>
              <h1>ท่านต้องการเงินเร่งด่วนหรือไม่</h1>
              <div><button className="next-button" onClick={this.handleNextStep}>ใช่</button></div>
              <div><button className="next-button" onClick={this.handleNextStep}>ไม่</button></div>
            </div>
            <div>
              <button className="back-button" onClick={() => this.setState({ steps: 1 })}>ย้อนกลับ</button>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const WrappedLoanSearchPage = Form.create({ name: 'loan_search' })(LoanSearchPage);

export default withRouter(WrappedLoanSearchPage);