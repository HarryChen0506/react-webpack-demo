
import React, {Component} from 'react';

export default class Page1 extends Component {
    render(){
        return (
            <div>
                this is Page1!!---
                <div>url：{this.props.match.url}</div>
                <pre>{JSON.stringify(this.props.match)}</pre>
            </div>
        )
    }
}