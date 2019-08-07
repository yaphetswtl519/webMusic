import './index.scss';
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'rabjs/router';
import ArtistItem from '../artist-item';

export default class ArtistList extends React.Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <div className="menu-item active">
                        <span >全部</span>
                        <Icon type="check"></Icon>
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div className="menu-item">
                        <span>男</span>
                        <Icon type="check"></Icon>
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div className="menu-item">
                        <span>女</span>
                        <Icon type="check"></Icon>
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div className="menu-item">
                        <span>组合</span>
                        <Icon type="check"></Icon>
                    </div>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="artist-list-area">
                <div className="list-view">
                    <div className="list-header">
                        <div className="list-title">艺人</div>
                        <div className="tabs">
                            <div className="tab active">全部</div>
                            <div className="tab">华语</div>
                            <div className="tab">欧美</div>
                            <div className="tab">日本</div>
                        </div>
                    </div>
                    <div className="list-select-category">
                        <Dropdown overlay={menu} trigger={['click']}>
                            <div className="list-select-dropdown">
                                全部 <Icon type="down"/>        
                            </div>
                        </Dropdown>
                    </div>
                    <div className="list-container">
                        <div className="adaptive-list">
                            {
                                new Array(10).fill('').map((_, i) => {
                                    return <ArtistItem key={i}></ArtistItem>
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}