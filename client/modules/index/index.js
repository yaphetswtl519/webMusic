'use strict';
import './index.scss';
import React, { Component } from 'react';
import { connect, call } from 'rabjs';
import MusicHeader from '../../components/music-header';
import MusicCarousel from '../../components/music-carousel';
import ArtistList from '../../components/artist-list';
import MusicFooter from '../../components/music-footer';
import Unfinished from './components/unfinished';
import MusicBar from '../../components/music-bar';
import LoginModule from '../../components/login-module';

@connect((state) => ({
    isShowLoginModule: state.index.isShowLoginModule
}))
export default class Index extends Component {
    componentDidMount() {
        call('index.getAllMusician', 'all');
    }
    componentWillReceiveProps(props) {
    }
    render() {
        return (
            <div className="index-music-container">
                <MusicHeader></MusicHeader>
                <MusicCarousel></MusicCarousel>
                <ArtistList></ArtistList>
                <Unfinished></Unfinished>
                <MusicFooter></MusicFooter>
                <MusicBar></MusicBar>
                {
                    this.props.isShowLoginModule ? <LoginModule></LoginModule> : ''
                }
                
            </div>
        )
    }
}