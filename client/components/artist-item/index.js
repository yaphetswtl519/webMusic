import './index.scss';
import React from 'react';
import { Link } from 'rabjs/router';
export default class ArtistItem extends React.Component {
    render() {
        return (
            <div className="artist-item">
                <Link to="/">
                    <div className="artist-img" style={{backgroundImage: 'url(http://pic.xiami.net/images/artistlogo/24/15196381554524.jpg?x-oss-process=image/resize,m_fill,s_350/quality,q_80)'}}></div>
                </Link>
                <div className="artist-info">
                    <div className="artist-name">邓紫棋</div>
                    <div className="artist-tag">
                        <a>#国语流行</a>
                        <a>#粤语流行</a>
                        <a>#国语流行</a>
                    </div>

                </div>
            </div>
        )
    }
}