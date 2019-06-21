import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

import SCBLogo from '../images/scb-logo.jpg';
import './Header.css';


class Header extends React.Component {
  componentDidMount() {
    console.log('mount');
    // To disabled submit button at the beginning.
  }

  render() {
    return (
      <div className="Header">
        <img className="scb-logo" src={SCBLogo} />
      </div>
    );
  }
}

const WrappedHeader = Form.create({ name: 'horizontal_login' })(Header);

export default WrappedHeader;
