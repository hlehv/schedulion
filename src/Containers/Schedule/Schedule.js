import React, { Component } from 'react';
import '../../App.css';
import Square from './Square';

class Schedule extends Component {
    render() {
      return (
        <div>
            Freshman<br />
            <Square value={<div><li>Principles of Economics </li> <li> Calc III </li> <li>University Writing</li> <li>LitHum</li></div>}/>
            <Square value={<div><li>Intro to Psych </li> <li> Macroeconmics </li> <li>FroSci</li> <li>LitHum</li><li>1004</li></div>}/>

            <br /> <br /> <br /> <br /><br />
            Sophomore<br />
            <Square value={<div><li>Discrete Math</li> <li> Data Structures </li> <li>CC</li> <li>Microeconomics</li><li>French IV</li></div>}/>
            <Square value={<div><li>AP </li> <li> Intro to Stats </li> <li>CC</li> <li>Game Theory</li><li>CS Theory</li></div>} />

            <br /> <br /> <br /> <br /><br />
            Junior <br />
            <Square value={<div><li>PLT</li> <li> Econometrics </li> <li>Cryotography</li> <li>LinearAlgebra</li><li>AI</li></div>}/>
            <Square value={<div><li>Fundamentals</li> <li> ArtHum </li> <li>GlobalCore1</li> <li>CSElective1</li><li>EconElective1</li></div>} />

            <br /> <br /> <br /> <br /><br />
            Senior <br />
            <Square value={<div><li></li> <li> Econ Seminar </li> <li>MusicHum</li> <li>GlobalCore2</li><li>CSElective2</li></div>}/>
            <Square value={<div><li>AP </li> <li> CSElective3 </li> <li>EconElective2</li> <li>EconElective3</li><li>CSElective4</li></div>} />
            <br /> <br /> <br />
        </div>
      );
    }
}

export default Schedule;
