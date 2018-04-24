import React, { Component } from 'react';
import { DataStoreConsumer, DataStoreProvider } from './CreateContext';

//创建一个根组件
class DataProvider extends Component {
  // 配置init 的默认props
  static defaultProps = {
    init: {}
  };
  constructor(props) {
    super(props);

    this.state = {
      // state 中的data 用来存储数据
      data: this.props.init,
      // setData用来 更改数据 就是将传入的数据和之前的数据并在一起
      setData: data =>
        this.setState(prevState => ({
          data: Object.assign({}, prevState.data, data)
        })),
      // deleteData用来删除数据，找出要删除的数据然后设置一个result 对象来存储 然后通过setState方法来设置
      // 我觉得我写的这个方法很傻逼 = = 欢迎大佬来指正
      deleteData: data => {
        let result = {};
        [...Object.keys(this.state.data).filter(item => item != data)].map(
          item => (result[item] = this.state.data[item])
        );
        this.setState({ data: result });
      }
    };
  }

  render() {
    return (
      <DataStoreConsumer>
        {// 获取本Dataprovider 上面的数据 context
        context => (
          //-------------------------这里将获取到的父级的数据 跟 本组件的合并起来组成provider 的数据
          <DataStoreProvider
            value={{
              ...this.state,
              data: Object.assign({}, context.data, this.state.data)
            }}>
            {this.props.children}
          </DataStoreProvider>
        )}
      </DataStoreConsumer>
    );
  }
}

export default DataProvider;
