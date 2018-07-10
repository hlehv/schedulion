import React, { Component } from 'react';
import './App.css';
import Survey from './Containers/Survey/Survey'
import StartButton from './Containers/StartButton'
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stage: 'start',
    }
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  handleStartClick(){
    this.setState({
      stage: 'survey',
    });
  }

  render() {
    return (
      <div className="App">
          <Header style={{background: '#fff',}}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ fontFamily: 'Space Mono', fontSize: 12, paddingTop: 2, paddingLeft: 0}}
            >
              <Menu.Item key="1">HOME</Menu.Item>
              <Menu.Item key="2">SETTINGS</Menu.Item>
              <Menu.Item key="3">SCHEDULE</Menu.Item>
            </Menu>
          </Header>
          <Content style={{padding: '0 50px' }}>
            <div>
              {this.state.stage==="start" && 
              <StartButton onClick={this.handleStartClick} />
              }
              {this.state.stage==="survey" &&
              <Survey />
              }
            </div>
          </Content>
      </div>
    );
  }
}

export default App;





/*        <Layout>
  `         <Header 
              className='header'
              style={{
                position: 'fixed', zIndex: 1, width: '100'
              }}>
  `          <div className="logo" />
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{lineHeight: '64px'}}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="1">Settings</Menu.Item>
              <Menu.Item key="1">Schedule</Menu.Item>
            </Menu>
            </Header>
          <Content style = {{padding: '0 50px', marginTop: 64}}>

          </Content>
        </Layout>*/

        