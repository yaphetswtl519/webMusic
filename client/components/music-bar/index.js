import './index.scss';
import React from 'react'
import { connect, dispatch, call } from 'rabjs';
import { Link } from 'rabjs/router';
import { Icon, Slider } from 'antd';
@connect((state) => ({
    song: state.index.song,
    isLogin: state.index.isLogin,
    songList: state.index.songList
}))
export default class MusicBar extends React.Component {
    constructor() {
        super();
        this.state = {
            isPlay: false,
            volume: 10,
            isSilence: false
        };
    }
    componentDidMount() {
        this.refs.audio.addEventListener('canplaythrough', (e) => {
            this.refs.audio.play();
            this.setState({
                isPlay: true
            });
        })
    }
    toggleSong() {
        const audio = this.refs.audio;
        if (this.state.isPlay) {
            audio.pause();
            this.setState({
                isPlay: false
            });
        } else {
            audio.play();
            this.setState({
                isPlay: true
            });
        }
    }
    onChange = (e) => {
        this.setState({
            volume: e
        });
        this.refs.audio.volume = e / 10;
    }
    tapSilence() {
        this.setState({
            isSilence: !this.state.isSilence
        });
    }
    collect() {
        if (this.props.isLogin) {
            call('index.collectMusic', this.props.song.songName)
        } else {
            this.refs.audio.pause();
            this.setState({
                isPlay: false
            });
            dispatch({
                type: 'index.setState',
                payload: {
                    isShowLoginModule: true
                }
            })
        }
    }
    render() {
        const {song, songList, isLogin} = this.props;
        return (
            <div className="music-bar">
                <div className="audio-progress"></div>
                <div className="play-bar">
                    <div className="music">
                        <Link to="/">
                            <img src={song.img}/>
                        </Link>
                        <div className="info">
                            <div className="title">{song.songName}</div>
                            <div className="singer">{song.name}</div>
                        </div>
                        <div className="select">
                            <div className="quality-selector">HQ</div>
                        </div>
                        <div className="favorite" onClick={this.collect.bind(this)}>
                            <Icon type="heart" theme="filled" style={{color: `${songList.indexOf(song.songName) !== -1 && isLogin ? 'red' : ''}`}}></Icon>
                        </div>
                    </div>
                    <div className="main-control">
                        <div className="prev">
                            <Icon type="step-backward"></Icon>
                        </div>
                        <div className="play-btn" onClick={this.toggleSong.bind(this)}>
                            {
                                this.state.isPlay ? <Icon type="pause-circle"/> : <Icon type="play-circle"/>
                            }
                        </div>
                        <div className="next">
                            <Icon type="step-forward"></Icon>
                        </div>
                    </div>
                    <div className="tunings">
                        <div className="volume-control">
                            <div className="sound" onClick={this.tapSilence.bind(this)}>
                                {
                                    this.state.isSilence ? <Icon type="customer-service"/> : <Icon type="sound"/>
                                }
                            </div>
                            <Slider min={0} max={10} onChange={this.onChange} value={this.state.volume}/>
                        </div>
                        <div className="play-mode-control"></div>
                        <Icon type="menu-unfold" className="menu-unfold"/>
                        <Icon type="arrows-alt"/>
                    </div>
                </div>
                <audio ref="audio" src={song.src} volume={this.state.volume / 10} muted={this.state.isSilence}/>
            </div>
        )
    }
}