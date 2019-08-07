'use strict';
import './index.scss';
import React, { Component } from 'react';
import { Link } from 'rabjs/router';
import { connect, dispatch } from 'rabjs';
import { Carousel } from 'antd';

export default class MusicCarousel extends Component {
    render() {
        return (
            <div className="index-tile">
                <div className="carousel-area">
                    <Carousel autoplay>
                        {
                            [1, 2, 3].map((_, i) => {
                                return (
                                    <div key={i} className="music-carousel-item-wrapper">
                                        <img className="music-carousel-item" src={require(`../../images/index/carousel-${_}.png`)}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        )
    }
}