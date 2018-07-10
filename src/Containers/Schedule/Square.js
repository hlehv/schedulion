import React from 'react';
import '../../App.css';
import { Popover } from 'antd';

function Square(props) {
    return (
    <Popover content={props.value} title="Options">
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
      </Popover>
    );
  }

  export default Square;