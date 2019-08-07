import './index.scss';
import React from 'react'
import { Link } from 'rabjs/router';
import { Icon, Slider } from 'antd';
export default class MusicBar extends React.Component {
    state = {
        value: 0
    };
    render() {
        const { value } = this.state;
        return (
            <div className="music-bar">
                <div className="audio-progress"></div>
                <div className="play-bar">
                    <div className="music">
                        <Link to="/">
                            <img src="http://pic.xiami.net/images/album/img64/638864/59996761562638864.jpg?x-oss-process=image/resize,limit_0,s_144,m_fill"/>
                        </Link>
                        <div className="info">
                            <div className="title">缘分一道桥</div>
                            <div className="singer">王力宏</div>
                        </div>
                        <div className="select">
                            <div className="quality-selector">HQ</div>
                        </div>
                        <div className="favorite">
                            <Icon type="heart"></Icon>
                        </div>
                    </div>
                    <div className="main-control">
                        <div className="prev">
                            <Icon type="step-backward"></Icon>
                        </div>
                        <div className="play-btn">
                            <Icon type="play-circle"></Icon>
                        </div>
                        <div className="next">
                            <Icon type="step-forward"></Icon>
                        </div>
                    </div>
                    <div className="tunings">
                        <div className="volume-control">
                            <div className="sound">
                                <Icon type="sound"/>
                            </div>
                            {/* <div className="bar"> */}
                                <Slider value={value}/>
                            {/* </div> */}
                        </div>
                        <div className="play-mode-control"></div>
                        <Icon type="menu-unfold" className="menu-unfold"/>
                        <Icon type="arrows-alt"/>
                    </div>
                </div>
            </div>
        )
    }
}