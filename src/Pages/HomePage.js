import React from 'react';
import { Button } from 'antd';

const HomePage = () => (
  <div className="App">
    <h1>Page</h1>
    <Button type="primary" onClick={() => console.log('bobo')}>Test</Button>
  </div>
);

export default HomePage;