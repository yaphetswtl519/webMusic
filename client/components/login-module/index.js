import React from 'react';
import { dispatch } from 'rabjs';
import './index.scss';
export default class LoginModule extends React.Component {
    constructor() {
        super();
        this.state = {
            showLogin: true
        }
    }
    clickLogin() {
        this.setState({
            showLogin: true
        });
    }
    clickRegister() {
        this.setState({
            showLogin:false
        });
    }
    clickLoginMask() {
        dispatch({
            type: 'index.setState',
            payload: {
                isShowLoginModule: false
            }
        });
    }
    render() {
        return (
            <div className="login-popup" onClick={this.clickLoginMask.bind(this)}>
                <div className="login-inner">
                    {/* <div className="login-movie"></div> */}
                    <div className="login-content">
                        <div className="login-wrapper">
                            <div className="login-tab">
                                <span className="login-tab-login login-tab-active" onClick={this.clickLogin.bind(this)}>登陆</span>
                                <span className="login-tab-register" onClick={this.clickRegister.bind(this)}>注册</span>
                            </div>
                            {
                                this.state.showLogin ? (
                                    <form className="login-form">
                                        <div className="account-login">
                                            <div className="form-block">
                                                <label htmlFor="account">账号</label>
                                                <input id="account" type="text" placeholder="请输入账号"/>
                                            </div>
                                            <div className="form-block">
                                                <label htmlFor="password">密码</label>
                                                <input id="password" type="password" placeholder="请输入密码"/>
                                            </div>
                                            <div className="form-block">
                                                <button id="account-login" disabled>登陆</button>
                                            </div>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="register">
                                        <div className="register-title">新用户注册</div>
                                        <form>
                                            <div className="register-content">
                                                <div className="form-block">
                                                    <label htmlFor="register-account">账号</label>
                                                    <input id="register-account" type="text" placeholder="请输入账号"/>
                                                </div>
                                                <div className="form-block">
                                                    <label htmlFor="register-password">密码</label>
                                                    <input id="register-password" type="password" placeholder="请输入密码"/>
                                                </div>
                                                <div className="form-block">
                                                    <button id="account-register" disabled>注册</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                )
                            }
                            
                            
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}