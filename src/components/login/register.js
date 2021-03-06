import React from 'react';
import {ReactComponent as ReactLogo} from '../../logo.svg';
import './LogInPage.css'

export class Register extends React.Component {

    render() {
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <ReactLogo />
                    <h4>Employee Managment System</h4>
                </div>
                <div className="form">
                    <div className="form-group">
                        <input type="text" name="username" placeholder="username"></input>
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="email"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="password"></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                Register
                </button>
            </div>
        </div>
    }
}