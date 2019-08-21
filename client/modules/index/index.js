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
    isShowLoginModule: state.index.isShowLoginModule,
    song: state.index.song
}))
export default class Index extends Component {
    componentDidMount() {
        call('index.getAllMusician', 'all');
    }
    componentWillReceiveProps(props) {
    }
    render() {
        const { isShowLoginModule, song } = this.props;
        return (
            <div className={`index-music-container ${song.name ? 'index-music-padding' : ''}`}>
                <MusicHeader history={this.props.history}></MusicHeader>
                <MusicCarousel></MusicCarousel>
                <ArtistList></ArtistList>
                <Unfinished></Unfinished>
                <MusicFooter></MusicFooter>
                {
                    song.name ? <MusicBar></MusicBar> : ''
                }
                {
                    isShowLoginModule ? <LoginModule></LoginModule> : ''
                }
                
            </div>
        )
    }
}