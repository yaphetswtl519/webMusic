import './index.scss';
import React from 'react';

export default class MusicFooter extends React.Component {
    render() {
        return (
            <div className="music-footer">
                <div className="music-section-inner">
                    <div className="footer-info">
                        <div className="footer-about">
                            <p>About Music</p>
                            <div className="about-list">
                                <div className="about-item">Feedback</div>
                                <div className="about-item">Contact us</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p className="copyright-text">Copyright © 2019 YY. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}