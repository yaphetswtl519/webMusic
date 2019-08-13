'use strict';
import './index.scss';
import React, { Component } from 'react';
import { Link } from 'rabjs/router';
import { connect, dispatch } from 'rabjs';
import { Icon } from 'antd';

@connect((state) => ({
    isLogin: state.index.isLogin,
    isVip: state.index.isVip
}))
export default class MusicHeader extends Component {
    toggleLogin() {
        dispatch({
            type: 'index.setState',
            payload: {
                isShowLoginModule: true
            }
        })
    }
    toggleLogout() {
        dispatch({
            type: 'index.setState',
            payload: {
                isLogin: false,
                isVip: false,
                isShowLoginModule: false
            }
        });
        alert('登出成功')
    }
    render() {
        const { isVip } = this.props;
        return (
            <div className="music-header">
                <div className="section-inner">
                    <div className="music-title">
                        <Link to="/">MyPlayer</Link>
                    </div>
                    <ul className="top-nav">
                        <li className="top-nav-item top-nav-library">
                            <Link to="/">Library</Link>
                        </li>
                        <li className="top-nav-item">
                            <Link to="/" className="top-nav-like">
                                <div className="top-nav-like-icon">
                                    <Icon type="heart" style={{color: '#ff410f', 'fontSize': '30px'}} theme="filled"></Icon>
                                </div>
                                <div className="top-nav-like-txt">(Likes)</div>
                            </Link>
                        </li>
                        <li className={`top-nav-item ${isVip ? 'is-vip' : ''}`}>
                            <Link to="/">VIP</Link>
                        </li>
                    </ul>
                    <ul className="top-subnav">
                        <li className="top-subnav-item"><Link to="/">Home</Link></li>
                        <li className="top-subnav-item"><Link to="/">Artists</Link></li>
                        <li className="top-subnav-item"><Link to="/">List</Link></li>
                    </ul>
                    <div className="music-search">
                        <input type="text" className="music-search-input" placeholder="搜索音乐、MV、歌单、用户"/>
                        <button className="music-search-btn">
                            <Icon type="search"></Icon>
                            {/* <span className="music-search-icon-txt">搜索</span> */}
                        </button>
                    </div>
                    {
                        this.props.isLogin ?
                            <div className="login-module" onClick={this.toggleLogout}>
                                <span className="logout">登出</span>
                            </div>
                            :
                            <div className="login-module" onClick={this.toggleLogin}>
                                <span className="login">登陆</span>
                                <span className="register">注册</span>
                            </div>
                    }
                </div>
            </div>
        )
    }
}