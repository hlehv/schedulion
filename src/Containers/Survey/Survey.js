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
            <MultiChoiceQuestion questionType="major"
                options={["Math", "Economics", "Computer Science"]}
            /> <br /> <br />
            <p> What class are you? </p>
            <SurveyQuestion questionType="year"
                options = {["2018", "2019", "2020", "2021", "2022"]}
            />
            <br /> <br />
            <p> What classes have you taken? </p>
            <MultiChoiceQuestion
                options = {["1004", "3137", "Intro to Psych"]}
            />
            <br /> <br />
            <p> How many classes (at most) would you take per semester? </p>
            <SurveyQuestion questionType="number of classes"
                options = {["2", "3", "4", "5", "6", "7"]}
            />
            <br /> <br />
            <Button className="start-schedulizing" type="primary" size="large" onClick={this.props.onClick}>SCHEDULE</Button>
        </div>
    );
  }
}

export default Survey;
