import React, { Component } from 'react';
import '../../App.css';
import SurveyQuestion from './SurveyQuestion.js';
import MultiChoiceQuestion from './MultiChoiceQuestion.js';
import { Button } from 'antd'

class Survey extends Component {
  render() {
    return (
        <div className="Survey">
            <p> What is your major or intended major? </p>
            <SurveyQuestion questionType="major"
                options={["Math", "Economics", "Computer Science"]}
            /> <br /> <br />
            <p> What year are you? </p>
            <SurveyQuestion questionType="major"
                options = {["Freshman", "Sophomore", "Junior", "Senior"]}
            />
            <br /> <br />
            <p> What classes have you taken? </p>
            <MultiChoiceQuestion
                options = {["1004", "3137", "Intro to Psych"]}
            />
            <br /> <br />
            <Button className="start-schedulizing" type="primary" size="large" onClick={this.props.onClick}>SCHEDULE</Button>
        </div>
    );
  }
}

export default Survey;
