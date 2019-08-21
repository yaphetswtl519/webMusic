import React from 'react';
import { call, connect, dispatch } from 'rabjs' ;
import MusicHeader from '../../components/music-header';
import MusicFooter from '../../components/music-footer';
import MusicBar from '../../components/music-bar';
import LoginModule from '../../components/login-module';
import { Icon } from 'antd';
import './index.scss';
@connect((state) => ({
    song: state.index.song,
    isLogin: state.index.isLogin,
    isShowLoginModule: state.index.isShowLoginModule
}))
export default class Collect extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        if (!this.props.isLogin) {
            this.props.history.push('/');
        }
    }
    tapSong() {

    }
    render() {
        return (
            <div className="music-collect">
                <MusicHeader history={this.props.history}></MusicHeader>
                <div className="music-container">
                    <div className="music-collect-usercenter" style={{backgroundImage: `url(${require('../../images/index/bg_profile.jpg')})`}}>
                        <div className="usercenter-inner">
                            <div className="usercenter-img"> 
                                <img src="https://thirdqq.qlogo.cn/g?b=sdk&k=L83ynEfR9KTYbzQEnibiatLg&s=140&t=1557524344"/>
                            </div>
                            <h1 className="usercenter-nickname">
                                <span>用户昵称</span>
                                <Icon type="sketch-circle" theme="filled" style={{fontSize: '18px', marginLeft: '5px'}}/>
                            </h1>
                            <ul className="usercenter-static">
                                <li className="usercenter-static-watch">
                                    <strong>0</strong>
                                    <span>关注</span>
                                </li>
                                <li className="usercenter-static-fans">
                                    <strong>0</strong>
                                    <span>粉丝</span>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="music-list-container">
                        <div className="usercenter-tab">
                            <div className="usercenter-tab-btn active">我喜欢</div>
                        </div>
                        <div className="music-list">
                            <div className="music-list-content">
                                <ul className="music-list-header">
                                    <li>歌曲</li>
                                    <li>歌手</li>
                                    <li>专辑</li>
                                    <li>时长</li>
                                </ul>
                                <ul className="music-list-songs">
                                    <li onClick={this.tapSong.bind(this)}>
                                        <div className="song-item">
                                            <div>稻香</div>
                                            <div>周杰伦</div>
                                            <div>暂无</div>
                                            <div>04:50</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <MusicFooter></MusicFooter>
                <MusicBar></MusicBar>
                <LoginModule></LoginModule>
            </div>
        )
    }
}