import React from 'react'
import { Menu, Icon, Input } from 'antd'
const { Search } = Input;

class HeaderComponent extends React.Component {
    render() {
        return (
            <>
                <div className='logo' style={{ float: 'left',color:'#fff' }} > 
                    <Icon type="tag" />
                        CNODE
                </div>
                <div className='search' style={{ float: 'left',marginLeft:'20px',marginRight:'520px' }}>
                    <Search placeholder="input search text" style={{ width: 200 }}/>
                </div>
                <Menu mode='horizontal' theme="dark" defaultSelectedKeys='index'  style={{ lineHeight: '64px' }}>
                    <Menu.Item key="index">
                        <a href="/"><Icon type="appstore" />首页</a>
                    </Menu.Item>
                    <Menu.Item key="into">
                        <a href="#/into"><Icon type="appstore" />新手入门</a>
                    </Menu.Item>
                    <Menu.Item key="api">
                        <a href="#/api"><Icon type="appstore" />API</a>
                    </Menu.Item>
                    <Menu.Item key="about">
                        <a href="#/about"><Icon type="appstore" />关于</a>
                    </Menu.Item>
                    <Menu.Item key="reg">
                        <a href="#/reg"><Icon type="appstore" />注册</a>
                    </Menu.Item>
                    <Menu.Item key="login">
                        <a href="#/login"><Icon type="appstore" />登录</a>
                    </Menu.Item>
                </Menu>
            </>
        )
    }
}

export default HeaderComponent