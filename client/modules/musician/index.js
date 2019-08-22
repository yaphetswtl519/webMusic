import React from 'react';
import { call, connect, dispatch } from 'rabjs' ;
import MusicHeader from '../../components/music-header';
import MusicFooter from '../../components/music-footer';
import MusicBar from '../../components/music-bar';
import LoginModule from '../../components/login-module';
import './index.scss';
@connect((state) => ({
    musician: state.index.musician,
    song: state.index.song,
    isLogin: state.index.isLogin,
    isShowLoginModule: state.index.isShowLoginModule,
    songList: state.index.songList
}))
export default class Musician extends React.Component {
    constructor() {
        super();
        this.state = {
            showDetail: false
        };
    }
    componentDidMount() {
        const name = this.props.match.params.name;
        call('index.getMusicianByName', name);
        call('index.getCollectMusic');
    }
    showDetail() {
        this.setState({
            showDetail: !this.state.showDetail
        });
    }
    playHotMusic() {
        const musician = this.props.musician;
        dispatch({
            type: 'index.setState',
            payload: {
                song: {
                    src: 'http://pv1ykrmt7.bkt.clouddn.com/' + encodeURIComponent(musician.songs[0].name) + '.mp3',
                    songName: musician.songs[0].name,
                    name: musician.name,
                    img: musician.img.includes('http') ? musician.img : `http://${musician.img}`
                } 
            }  
        });
    }
    playSelectedSong(e) {
        const data = e.target.dataset;
        dispatch({
            type: 'index.setState',
            payload: {
                song: {
                    src: 'http://pv1ykrmt7.bkt.clouddn.com/' + encodeURIComponent(data.songname) + '.mp3',
                    songName: data.songname,
                    name: data.name,
                    img: data.img.includes('http') ? data.img : `http://${data.img}`
                } 
            }  
        });
    }
    render() {
        const { musician, isShowLoginModule } = this.props;
        return (
            <div className="musician-container">
                <MusicHeader history={this.props.history}></MusicHeader>
                {
                    musician.name ? 
                    <div>
                        <div className="musician-main">
                            <div className="musician-data">
                                <span className="img">
                                    <img src={musician.img.includes('http') ? musician.img : `http://${musician.img}`}/>
                                </span>
                                <div className="content">
                                    <div className="musician-name">
                                        <h1>{musician.name}</h1>
                                    </div>
                                    <div className="musician-desc" onClick={this.showDetail.bind(this)}>
                                        {musician.biography}
                                        {
                                            this.state.showDetail ? 
                                                <div className="musician-desc-popup" >
                                                    <h3>歌手简介</h3>
                                                    {musician.biography}
                                                </div> : ''
                                        }
                                        
                                    </div>
                                    <ul className="musician-statistic">
                                        <li className="musician-statistic-item">
                                            <span>单曲</span>
                                            <strong>{musician.songs.length}</strong>
                                        </li>
                                        <li className="musician-statistic-item">
                                            <span>专辑</span>
                                            <strong>{musician.songs.length}</strong>
                                        </li>
                                        <li className="musician-statistic-item">
                                            <span>mv</span>
                                            <strong>{musician.songs.length}</strong>
                                        </li>
                                    </ul>
                                    <div className="musician-action">
                                        <div className="musician-play" onClick={this.playHotMusic.bind(this)}>播放歌手热门歌曲</div>
                                        <div className="musician-follow">关注 1478.3万</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="musician-list">
                            <div className="list-title">
                                <h2>全部歌曲</h2>
                            </div>
                            <div className="list-body">
                                <ul className="list-header">
                                    <li className="song-name">歌曲</li>
                                    <li className="song-album">专辑</li>
                                    <li className="song-time">时长</li>
                                </ul>
                                <ul className="list">
                                    {
                                        musician.songs.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="item">
                                                        <div className="item-number">{index+1}</div>
                                                        <div className="item-name" data-songname={item.name} data-img={musician.img} data-name={musician.name} onClick={this.playSelectedSong.bind(this)}>{item.name}</div>
                                                        <div className="item-album">暂无</div>
                                                        <div className="item-time">04:50</div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="musician-playlist">
                        <div className="playlist-title">
                            <h2>专辑</h2>
                        </div>
                        <div className="playlist-body">
                            <ul className="playlist-ul">
                                <li>
                                    <div className="playlist-box">
                                        <img src="https://y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000"/>
                                        <h4>不爱我就拉倒</h4>
                                        <div className="playlist-other">2018-05-15</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="playlist-box">
                                        <img src="https://y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000"/>
                                        <h4>不爱我就拉倒</h4>
                                        <div className="playlist-other">2018-05-15</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="playlist-box">
                                        <img src="https://y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000"/>
                                        <h4>不爱我就拉倒</h4>
                                        <div className="playlist-other">2018-05-15</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="playlist-box">
                                        <img src="https://y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000"/>
                                        <h4>不爱我就拉倒</h4>
                                        <div className="playlist-other">2018-05-15</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="playlist-box">
                                        <img src="https://y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000"/>
                                        <h4>不爱我就拉倒</h4>
                                        <div className="playlist-other">2018-05-15</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div> : ''
                }
                {
                    isShowLoginModule ? <LoginModule></LoginModule> : ''
                }
                <MusicFooter></MusicFooter>
                {
                    this.props.song && this.props.song.name ? <MusicBar songList={this.props.songList}></MusicBar> : ''
                }
            </div>
        )
    }
}