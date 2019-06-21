import React, { Component } from 'react';
import { Button } from 'antd';
import api from '../Services/api';

import './HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
  }

  async componentDidMount() {
    this.setState({ data: await api.fetchProfile() });
  }

  render () {
    return (<div className="App">
      <h1>Page</h1>
      <div>{JSON.stringify(this.state.data, null, 2)}</div>
      <Button type="primary" onClick={() => console.log('bobo')}>Test</Button>
    </div>);
  }
}

export default HomePage;