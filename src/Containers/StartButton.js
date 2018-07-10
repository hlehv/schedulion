import React, { Component } from 'react';
import {Button} from 'antd';
import '../App.css';

class StartButton extends Component {
  render() {
    return (
        <Button className="start-button" type="primary" size="large" onClick={this.props.onClick}>START</Button>
    );
  }
}

export default StartButton;
