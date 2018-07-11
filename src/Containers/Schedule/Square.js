import React from 'react';
import '../../App.css';
import { Popover, Card } from 'antd';

function Square(props) {
    return (
      <Card bordered={false} hoverable style={{fontSize: "70%", title: 10}} onClick={props.onClick}>
        <b> {props.semester} </b> <br /> <br />
        {props.value}
      </Card>
    );
  }

  export default Square;