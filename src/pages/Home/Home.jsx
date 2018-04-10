import React, { Component } from 'react';
import { Button } from 'antd';

class Home extends Component {
  async componentWillMount() {
    const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
    console.log(_.merge({ a: 1 }, { b: 2 }));
  }

  render() {
    return <Button>ok</Button>;
  }
}

export default Home;
