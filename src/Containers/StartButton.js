import React, { Component } from 'react';
import {Button} from 'antd';
import '../App.css';

class StartButton extends Component {
  render() {
    return (
      <div style={{background: '#fff', padding: '15%', minHeight: 280, textAlign: 'center'}}>
        <Button className="start-button" type="primary" size="large" onClick={this.props.onClick}>START</Button>
        </div>
    );
  }
}

export default StartButton;
