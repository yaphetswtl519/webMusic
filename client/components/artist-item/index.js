import './index.scss';
import React from 'react';
import { Link } from 'rabjs/router';
export default class ArtistItem extends React.Component {
    render() {
        let { musician } = this.props;
        musician.img = musician.img.includes('http:') ? musician.img : `http://${musician.img}`;
        return (
            <div className="artist-item">
                <Link to="/">
                    <div className="artist-img" style={{backgroundImage: `url(${musician.img})`}}></div>
                </Link>
                <div className="artist-info">
                    <div className="artist-name">{musician.name}</div>
                    <div className="artist-tag">
                        <a>#{musician.biography}</a>
                    </div>
                </div>
            </div>
        )
    }
}