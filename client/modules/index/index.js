'use strict';
// import './index.scss';
import React, { Component } from 'react';
import MusicHeader from '../../components/music-header';

export default class Index extends Component {
    render() {
        return (
            <div className="index-music-container">
                <MusicHeader></MusicHeader>                
            </div>
        )
    }
}