import React, { Component } from 'react';
import '../../App.css';
import SurveyQuestion from './SurveyQuestion.js';

class Survey extends Component {
  render() {
    return (
        <SurveyQuestion questionType="major"
            option1="Math"
            option2="Computer Science"
            option3="Economics"
        />
    );
  }
}

export default Survey;
