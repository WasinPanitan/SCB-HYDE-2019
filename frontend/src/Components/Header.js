import React from 'react';
import { Form, Button, Modal } from 'antd';
import { isUndefined } from 'lodash';
import api from '../Services/api';
import LoginForm from './LoginForm';

import SCBLogo from '../images/scb-logo.jpg';
import './Header.css';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bearerToken: undefined, visible: false, loading: false }
  }

  componentDidMount() {
    console.log('mount');
    // To disabled submit button at the beginning.
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  setBearerToken = (value) => {
    this.setState({ bearerToken: value });
  }

  render() {
    console.log(this.state);
    const { visible, loading, bearerToken } = this.state;

    return (
      <div className="Header">
        <a href='/'><img className="scb-logo" src={SCBLogo} /></a>
        <React.Fragment>
          {this.state.bearerToken ? (
            <div className="login-button-span">
              <div>Token: {bearerToken.accessToken}</div>
              <Button className="login-button" onClick={() => this.setBearerToken(null)}>
                Logout
              </Button>
            </div>
          ) : (
            <React.Fragment>
              <Button type="primary" className="login-button" onClick={this.showModal}>
                Login
              </Button>
              <Modal
                visible={visible}
                title="Title"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
              >
                <LoginForm closeModal={this.handleCancel} setBearerToken={this.setBearerToken} />
              </Modal>
            </React.Fragment>
          )}
        </React.Fragment>
      </div>
    );
  }
}

const WrappedHeader = Form.create({ name: 'login' })(HeaderComponent);

export default WrappedHeader;
