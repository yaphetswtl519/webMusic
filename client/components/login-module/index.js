import React from 'react';
import { dispatch } from 'rabjs';
import './index.scss';
import $ from 'jquery';
export default class LoginModule extends React.Component {
    constructor() {
        super();
        this.state = {
            showLogin: true,
            registerAccount: '',
            registerPassword: '',
            loginAccount: '',
            loginPassword: '',
            isRegisterDisable: true,
            isLoginDisable: true
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
    clickLoginMask(e) {
        if (e.target.className === 'login-popup') {
            dispatch({
                type: 'index.setState',
                payload: {
                    isShowLoginModule: false
                }
            });
        }
    }
    async loginSubmit(e) {
        e.preventDefault();
        const { loginAccount, loginPassword } = this.state;
        if (loginAccount && loginPassword) {
            let data = await fetch('/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: loginAccount,
                    password: loginPassword
                }),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            data = await data.json();
            // alert(data.msg);
            if (data.code === 200) {
                dispatch({
                    type: 'index.setState',
                    payload: {
                        isShowLoginModule: false,
                        isLogin: true,
                        isVip: data.isVip,
                        username: loginAccount
                    }
                });
            }
        }
    }
    handleLoginAccountChange(e) {
        this.setState({
            loginAccount: e.target.value,
            isLoginDisable: !(this.state.loginPassword && e.target.value)
        });
    }
    handleLoginAccountPassword(e) {
        this.setState({
            loginPassword: e.target.value,
            isLoginDisable: !(this.state.loginAccount && e.target.value)
        });
    }
    handleRegisterAccountChange(e) {
        this.setState({
            registerAccount: e.target.value,
            isRegisterDisable: !(this.state.registerPassword && e.target.value)
        });
    }
    handleRegisterPasswordChange(e) {
        this.setState({
            registerPassword: e.target.value,
            isRegisterDisable: !(this.state.registerAccount && e.target.value)
        });
    }
    async registerSubmit(e) {
        e.preventDefault();
        const {
            registerAccount,
            registerPassword
        } = this.state;
        if (registerAccount && registerPassword) {
            let data = await fetch('/register', {
                method: 'POST',
                body: JSON.stringify({
                    username: registerAccount,
                    password: registerPassword
                }),
                headers:{
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            data = await data.json();
            alert(data.msg);
            if (data.code === 200) {
                this.setState({
                    showLogin: true
                });
            }
        }
    }
    render() {
        return (
            <div className="login-popup" onClick={this.clickLoginMask.bind(this)}>
                <div className="login-inner">
                    {/* <div className="login-movie"></div> */}
                    <div className="login-content">
                        <div className="login-wrapper">
                            <div className="login-tab">
                                <span className={`login-tab-login ${this.state.showLogin ? 'login-tab-active' : ''} `} onClick={this.clickLogin.bind(this)}>登陆</span>
                                <span className={`login-tab-register ${this.state.showLogin ? '' : 'login-tab-active'}`} onClick={this.clickRegister.bind(this)}>注册</span>
                            </div>
                            {
                                this.state.showLogin ? (
                                    <form className="login-form" onSubmit={this.loginSubmit.bind(this)}>
                                        <div className="account-login">
                                            <div className="form-block">
                                                <label htmlFor="account">账号</label>
                                                <input id="account" type="text" placeholder="请输入账号" onChange={this.handleLoginAccountChange.bind(this)}/>
                                            </div>
                                            <div className="form-block">
                                                <label htmlFor="password">密码</label>
                                                <input id="password" type="password" placeholder="请输入密码" onChange={this.handleLoginAccountPassword.bind(this)}/>
                                            </div>
                                            <div className="form-block">
                                                <button id="account-login" disabled={this.state.isLoginDisable ? true : false}>登陆</button>
                                            </div>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="register">
                                        <div className="register-title">新用户注册</div>
                                        <form onSubmit={this.registerSubmit.bind(this)}>
                                            <div className="register-content">
                                                <div className="form-block">
                                                    <label htmlFor="register-account">账号</label>
                                                    <input id="register-account" type="text" placeholder="请输入账号" onChange={this.handleRegisterAccountChange.bind(this)}/>
                                                </div>
                                                <div className="form-block">
                                                    <label htmlFor="register-password">密码</label>
                                                    <input id="register-password" type="password" placeholder="请输入密码" onChange={this.handleRegisterPasswordChange.bind(this)}/>
                                                </div>
                                                <div className="form-block">
                                                    <button id="account-register" disabled={this.state.isRegisterDisable ? true : false}>注册</button>
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