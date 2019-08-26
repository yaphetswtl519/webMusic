import React from 'react';
import { call, connect, dispatch } from 'rabjs' ;
import MusicHeader from '../../components/music-header';
import MusicFooter from '../../components/music-footer';
import MusicBar from '../../components/music-bar';
import LoginModule from '../../components/login-module';
import { Icon } from 'antd';
import './index.scss';
const bg = [
    'http://pwneo6hav.bkt.clouddn.com/bg_profile1.jpg',
    'http://pwneo6hav.bkt.clouddn.com/bg_profile4.jpeg',
    'http://pwneo6hav.bkt.clouddn.com/bg_profile5.jpeg',
    'http://pwneo6hav.bkt.clouddn.com/WechatIMG50330.jpeg'
];
@connect((state) => ({
    song: state.index.song,
    isLogin: state.index.isLogin,
    isShowLoginModule: state.index.isShowLoginModule,
    collectList: state.index.collectList,
    songList: state.index.songList,
    isVip: state.index.isVip
}))
export default class Collect extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundImage: bg[0]
        }
    }
    componentDidMount() {
        if (!this.props.isLogin) {
            this.props.history.push('/');
        } else {
            call('index.getCollectMusic', 2);
        }
    }
    tapSong(e) {
        const { name, musician, img } = e.target.dataset;
        dispatch({
            type: 'index.setState',
            payload: {
                song: {
                    src: 'http://pwuovqgwc.bkt.clouddn.com/' + encodeURIComponent(name) + '.mp3',
                    songName: name,
                    name: musician,
                    img: img.includes('http') ? img : `http://${img}`
                } 
            }  
        });   
    }
    changeBg() {
        if (!this.props.isVip || !this.props.isLogin) {
            alert('not vip');
            return;
        } else {
            this.setState({
                backgroundImage: bg[parseInt(Math.random() * 10) % 4]
            })
        }
    }
    buyVip(e) {
        if (!this.props.isVip) {
            call('index.buyvip');
        }
        e.stopPropagation();
    }
    render() {
        return (
            <div className="music-collect">
                <MusicHeader history={this.props.history}></MusicHeader>
                <div className="music-container">
                    <div className="music-collect-usercenter" onClick={this.changeBg.bind(this)} style={{backgroundImage: `url(${this.state.backgroundImage})`}}>
                        <div className="usercenter-inner">
                            <div className="usercenter-img"> 
                                <img src="https://thirdqq.qlogo.cn/g?b=sdk&k=L83ynEfR9KTYbzQEnibiatLg&s=140&t=1557524344"/>
                            </div>
                            <h1 className="usercenter-nickname">
                                <span>用户昵称</span>
                                <Icon type="sketch-circle" theme="filled" onClick={this.buyVip.bind(this)} style={{fontSize: '18px', marginLeft: '5px', color: this.props.isVip ? '#31c27c' : '', outline: 'none'}}/>
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
                                    {
                                        this.props.collectList.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <div className="song-item">
                                                        <div data-name={item.name} data-musician={item.musician} data-img={item.img} onClick={this.tapSong.bind(this)}>{item.name}</div>
                                                        <div>{item.musician}</div>
                                                        <div>暂无</div>
                                                        <div>04:50</div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <MusicFooter></MusicFooter>
                {
                    this.props.song && this.props.song.name ? <MusicBar songList={this.props.songList}></MusicBar> : ''
                }
                {
                    this.props.isShowLoginModule ? <LoginModule></LoginModule> : ''
                }
            </div>
        )
    }
}