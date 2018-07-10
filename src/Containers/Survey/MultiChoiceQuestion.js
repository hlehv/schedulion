import {Select} from 'antd';
import '../../App.css';
import React, { Component } from 'react';

const Option = Select.Option;

class MultiChoiceQuestion extends Component {
    createOption = (option) => {
        return <Option value={option} key={option}> {option} </Option>;
    }

    addOptions = () => {
        return this.props.options.map(this.createOption);
    }
    render(){
        return (
              <Select
                mode="multiple"
                style={{ width: 200 }}
                placeholder="Please select"
              >
                {this.addOptions()}
              </Select>
        );
    }
}


export default MultiChoiceQuestion;
