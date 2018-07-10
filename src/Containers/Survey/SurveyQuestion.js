import {Select} from 'antd';
import '../../App.css';
import React, { Component } from 'react';

const Option = Select.Option;

class SurveyQuestion extends Component {

  render() {
    return (
        <Select
        showSearch
        style={{ width: 200 }}
        placeholder={"Select a " +this.props.questionType}
        optionFilterProp="children"
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value={String(this.props.option1)}>{this.props.option1}</Option>
        <Option value={String(this.props.option2)}>{this.props.option2}</Option>
        <Option value={String(this.props.option3)}>{this.props.option3}</Option>
      </Select>
    );
  }
}

export default SurveyQuestion;
