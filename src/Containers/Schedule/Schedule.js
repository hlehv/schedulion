import React, { Component } from 'react';
import '../../App.css';
import Square from './Square';
import { Col, Row } from 'antd';

class Schedule extends Component { //make this into a responsive grid eventually
    render() {
      return (
        <div>
            <Row gutter={16}>
                <Col span={8}>
                    <Square semester="Freshman Fall" value={<div><li>Principles of Economics </li> <li> Calc III </li> <li>University Writing</li> <li>LitHum</li></div>}/>
                </Col>
                <Col span={8}>
                    <Square semester="Freshman Spring" value={<div><li>Intro to Psych </li> <li> Macroeconmics </li> <li>FroSci</li> <li>LitHum</li><li>1004</li></div>}/>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Square semester="Sophomore Fall" value={<div><li>Discrete Math</li> <li> Data Structures </li> <li>CC</li> <li>Microeconomics</li><li>French IV</li></div>}/>
                </Col>
                <Col span={8}>
                    <Square semester="Sophomore Spring" value={<div><li>AP </li> <li> Intro to Stats </li> <li>CC</li> <li>Game Theory</li><li>CS Theory</li></div>} />
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Square semester="Junior Fall" value={<div><li>PLT</li> <li> Econometrics </li> <li>Cryotography</li> <li>LinearAlgebra</li><li>AI</li></div>}/>
                </Col>
                <Col span={8}>
                    <Square semester="Junior Spring" value={<div><li>Fundamentals</li> <li> ArtHum </li> <li>GlobalCore1</li> <li>CSElective1</li><li>EconElective1</li></div>} />
                </Col >
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Square semester="Senior Fall" value={<div><li></li> <li> Econ Seminar </li> <li>MusicHum</li> <li>GlobalCore2</li><li>CSElective2</li></div>}/>
                </Col>
                <Col span={8}>
                    <Square semester="Senior Spring" value={<div><li>AP </li> <li> CSElective3 </li> <li>EconElective2</li> <li>EconElective3</li><li>CSElective4</li></div>} />
                </Col>
            </Row>
        </div>
      );
    }
}

export default Schedule;
