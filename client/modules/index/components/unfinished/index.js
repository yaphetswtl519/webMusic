import './index.scss';
import React from 'react';
export default class Unfinished extends React.Component {
    render() {
        return (
            <div className="unfinished-wrapper">
                <a href="https://www.sessiontown.com/en/blog/free-virtual-musical-instruments-online">
                    <div className="online-musical-instruments">
                        <div className="online-musical-instruments-title">Online Musical Instruments</div>
                        <p className="online-musical-instruments-introduce">
                            不认识这些乐器的声音？<br/>
                            在线体验钢琴、吉他、卡林巴拇指琴、编钟、竖琴、定音鼓等乐器。<br/>
                            按住你的鼠标，然后滑动这些乐器，你会听到不一样的声音。<br/>
                        </p>
                        <div className="online-musical-instruments-link">
                            <div className="online-musical-instruments-link-btn">Comming Soon</div>
                        </div>
                        <img src={require(`../../../../images/index/instruments.svg`)} className="online-musical-instruments-img"/>
                    </div>
                </a>
                <a href="https://musiclab.chromeexperiments.com/Song-Maker/">
                    <div className="music-maker">
                        <div className="music-maker-title">Music-Maker</div>
                        <p className="music-maker-introduce">
                            想快速制作自己喜欢的音乐节奏 or 音乐片段？<br/>
                            不需要下载任何软件，一个网页帮你搞定。<br/>
                            制作完成后，在线播放，随时导出。<br/>
                        </p>
                        <div className="music-maker-link">
                            <div className="music-maker-link-btn">Comming Soon</div>
                        </div>
                        <img src={require(`../../../../images/index/music-maker.svg`)} className="music-maker-img"/>
                    </div>
                </a>
            </div>
        )
    }
}