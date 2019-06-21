import React, { Component } from 'react';
import { Button } from 'antd';
import api from '../Services/api';

class HomePage extends Component {
  
  async componentDidMount() {
    console.log(await api.fetchProfile({ test: '' }));
  }

  render () {
    return (<div className="App">
      <h1>Page</h1>
      <Button type="primary" onClick={() => console.log('bobo')}>Test</Button>
    </div>);
  }
}

export default HomePage;