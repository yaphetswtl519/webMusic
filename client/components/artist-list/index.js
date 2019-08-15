import './index.scss';
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'rabjs/router';
import { connect, call } from 'rabjs';
import ArtistItem from '../artist-item';

@connect((state) => ({
    musicians: state.index.musicians
}))
export default class ArtistList extends React.Component {
    constructor() {
        super()
        this.state = {
            active: 'all'
        }
    }
    onSelect(e){
        call('index.getAllMusician', e.key);
        this.setState({
            active: e.key
        })
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item onClick={this.onSelect.bind(this)} key="all">
                    <div className={`menu-item ${this.state.active === 'all' ? 'active' : ''}`}>
                        <span >全部</span>
                        <Icon type="check"></Icon>
                    </div>
                </Menu.Item>
                <Menu.Item onClick={this.onSelect.bind(this)} key="Male">
                    <div className={`menu-item ${this.state.active === 'Male' ? 'active' : ''}`}>
                        <span>男</span>
                        <Icon type="check"></Icon>
                    </div>
                </Menu.Item>
                <Menu.Item onClick={this.onSelect.bind(this)} key="Female">
                    <div className={`menu-item ${this.state.active === 'Female' ? 'active' : ''}`}>
                        <span>女</span>
                        <Icon type="check"></Icon>
                    </div>
                </Menu.Item>
                <Menu.Item onClick={this.onSelect.bind(this)} key="Group">
                    <div className={`menu-item ${this.state.active === 'Group' ? 'active' : ''}`}>
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
                            <div className="tab delay-tab">华语</div>
                            <div className="tab delay-tab">欧美</div>
                            <div className="tab delay-tab">日本</div>
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
                                this.props.musicians.map((_, i) => {
                                    return <ArtistItem key={i} musician={_}></ArtistItem>
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}