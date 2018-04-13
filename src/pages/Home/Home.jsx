import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import addTodo from './action';

class Home extends Component {
  onClick() {
    this.props.addTodo();
  }
  render() {
    return (
      <div style={{ height: 1200 }}>
        <Button onClick={this.onClick.bind(this)}>
          {this.props.loginInfo}
        </Button>
      </div>
    );
  }
}

export default connect(
  state => {
    return { loginInfo: state.todo };
  },
  { addTodo }
)(Home);
