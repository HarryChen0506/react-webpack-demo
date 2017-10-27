
import React, {Component} from 'react';
import './page1.scss';
import img from './images/seat.png';

export default class Page1 extends Component {
    render(){
        return (
            <div className="box">
                this is Page1!!---
                <div className="url">url：{this.props.match.url}</div>
                <div><img src={img} alt=""/></div>
                <pre>{JSON.stringify(this.props.match)}</pre>
            </div>
        )
    }
}