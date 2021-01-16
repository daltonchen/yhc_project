import logo from './logo.svg';
import { Layout, Menu } from 'antd';
import {Component} from 'react'
import 'antd/dist/antd.css';
import './secondWebpage.css';

const { Header, Content} = Layout;

class secondWebpage extends Component{

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    // WHEN USER CLICK THE TITLE BAR, REDIRECT TO OTHER PAGES.
    onClick(data){
        if(data.key == 1){
            this.props.history.push({pathname:'/'})
        }

        console.log(data.key);
    }


    render(){
        return (
            <body>
            <Layout>
                <Header>
                    <div className="logo" />
                    <Menu theme="dark"
                          mode="horizontal"
                          defaultSelectedKeys={['2']}
                          onClick={this.onClick}
                    >
                        <Menu.Item key="1">菜单1</Menu.Item>
                        <Menu.Item key="2">菜单2</Menu.Item>
                        <Menu.Item key="3">菜单3</Menu.Item>
                    </Menu>
                </Header>
            </Layout>
            <Layout
                className = {"textArea"}
            >
                <Layout
                    style={{padding: '48px 72px 72px'}}
                >
                    <Content
                        style={{padding:25, margin:0, minHeight:1000}}
                        className = "dashboard_style"
                    >
                        <p>内容二</p>
                    </Content>
                </Layout>
            </Layout>
            </body>
        );
    }

}

export default secondWebpage;
