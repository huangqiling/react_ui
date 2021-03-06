import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import './index.less';
import MenuList from './menu.json';
import { isArray } from 'util';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      scale: []
    };
    this.renderMenu = this.renderMenu.bind(this);
    this.hasChildren = this.hasChildren.bind(this);
  }

  async componentWillMount() {
    let { scale } = this.state;
    const { groupBy } = await import(/* webpackChunkName: "lodash" */ 'lodash');
    const grouping = groupBy(MenuList.menus, 'levelId');

    for (let key in grouping) {
      scale.push(grouping[key].sort((a, b) => a.sort - b.sort));
    }
    scale.reverse().sort((a, b) => {
      a.forEach(item => {
        b.forEach(Item => {
          if (item.platform === Item.platform) {
            if (!isArray(Item.children)) {
              Item.children = [];
            }
            Item.children.push(item);
          }
        });
      });
    });
    this.setState({ scale: scale[scale.length - 1] });
  }

  onCollapse(collapsed) {
    this.setState({ collapsed });
  }

  hasChildren(children) {
    return (function recursion(data) {
      return (
        <SubMenu
          key={data.id}
          title={
            data.icon ? (
              <span>
                <Icon type={data.icon} />
                <span>{data.name}</span>
              </span>
            ) : (
              data.name
            )
          }>
          {data.children.map(item => {
            return item.children ? (
              recursion(item)
            ) : (
              <Menu.Item key={item.id}>{item.name}</Menu.Item>
            );
          })}
        </SubMenu>
      );
    })(children);
  }

  renderMenu() {
    const { scale } = this.state;
    return (
      <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']}>
        {scale.map(item => {
          return !item.children ? (
            <Menu.Item key={item.id}>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </Menu.Item>
          ) : (
            this.hasChildren(item)
          );
        })}
      </Menu>
    );
  }

  render() {
    return (
      <Layout className="kl-nav">
        <Sider
          className="kl-sider"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse.bind(this)}>
          <div className="kl-logo" />
          {this.renderMenu()}
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content className="kl-content">{this.props.children}</Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
