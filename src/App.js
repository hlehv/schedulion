import React, { Component } from 'react';
import './App.css';
import Survey from './Containers/Survey/Survey'
import Schedule from './Containers/Schedule/Schedule'
import StartButton from './Containers/StartButton'
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stage: 'schedule',
    }
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleScheduleClick = this.handleScheduleClick.bind(this);
  }

  handleStartClick(){
    this.setState({
      stage: 'survey',
    });
  }

  handleScheduleClick(){
    this.setState({
      stage: 'schedule',
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
              <Survey onClick={this.handleScheduleClick}/>
              }
              {this.state.stage==="schedule" &&
              <Schedule />
              } 
            </div>
          </Content>
      </div>
    );
  }
}

export default App;