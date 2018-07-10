import {Select} from 'antd';
import '../../App.css';
import React, { Component } from 'react';

const Option = Select.Option;

class SurveyQuestion extends Component {

    createOption = (option) => {
        return <Option value={option} key={option}> {option} </Option>;
    }

    addOptions = () => {
        return this.props.options.map(this.createOption);
    }

  render() {
    return (
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder={"Select a " +this.props.questionType}
        optionFilterProp="children"
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {this.addOptions()}
      </Select>
    );
  }
}

export default SurveyQuestion;
