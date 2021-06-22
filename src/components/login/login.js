import React from 'react';
import {ReactComponent as ReactLogo} from '../../logo.svg';
import './form.css'
import LoginForm from './form';

export class Login extends React.Component {
    
    render() {
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <ReactLogo />
                    <h4>Employee Managment System</h4>
                </div>
            </div>
            <LoginForm />
        </div>
    }
}