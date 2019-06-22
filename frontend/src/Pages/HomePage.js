import React, { Component } from 'react';
import { get, map, pick } from 'lodash';
import { Button, Input, Form } from 'antd';
import api from '../Services/api';
import StepBars from '../Components/StepsBar';
import CompareLoan from '../Components/CompareLoan';
import './HomePage.css';


function onChange(a, b, c) {
  console.log(a, b, c);
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }

  async componentDidMount() {
    const result = await api.fetchProfile();
    this.setState({ data: get(result, ['data', 'profile'], {}) });
  }

  renderFormItem = (label, value) => (
    <Form.Item key={label} label={label}>
      <Input value={value}/>
    </Form.Item>
  );

  render () {
    const rows = pick(this.state.data, [
      'citizenID',
      'thaiFirstName',
      'thaiLastName',
      'engFirstName',
      'engLastName',
      'birthDate',
      'genderCode',
      'mobile',
      'email',
    ]);
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      labelAlign: 'left',
    };
    return (
      <div>
        <h1>HOME</h1>
        <h1><a href='/loan-compare'>loan_compare</a></h1>
        <h1><a href='/loan-search'>loan_search</a></h1>
        <h1><a href='/profile'>profile</a></h1>
        <Button onClick={api.fetchLoan} primary>Fetch Loan</Button>
      </div>
    );
  }
}

export default HomePage;