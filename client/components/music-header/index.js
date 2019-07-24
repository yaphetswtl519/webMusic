'use strict';
import './index.scss';
import React, { Component } from 'react';
import { Link } from 'rabjs/router';
import { connect, dispatch } from 'rabjs';
import { Icon } from 'antd';

export default class MusicHeader extends Component {
    render() {
        return (
            <div className="music-header">
                <div className="section-inner">
                    <div className="music-title">
                        <Link to="/">MyPlayer</Link>
                    </div>
                </div>
                <ul className="top-nav">
                    <li className="top-nav-item">
                        <Link to="/">Library</Link>>
                    </li>
                    <li className="top-nav-item">
                        <Link to="/">
                            <div>
                                <Icon type="heart" style={{color: 'red'}}></Icon>
                            </div>
                            <div>(Likes)</div>
                        </Link>>
                    </li>
                    <li className="top-nav-item">
                        <Link to="/">VIP</Link>
                    </li>
                </ul>
                {/* <ul className="top-subnav"></ul> */}
            </div>
        )
    }
}