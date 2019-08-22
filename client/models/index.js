'use strict';
import { call, dispatch } from 'rabjs';
import { stat } from 'fs';
export default {
    namespace: 'index',
    state: {
        isShowLoginModule: false,
        isLogin: false,
        isVip: false,
        musicianLoading: false,
        musicians: [],
        musician: {},
        song: {},
        collect: [],
        username: '',
        songList: [],
        collectList: []
    },
    reducers: {
        setState (state, action) {
            return {...state, ...action.payload}
        },
        getAllMusician: {
            success (state, action) {
                return {
                    ...state,
                    ...action.payload,
                    musicianLoading: false,
                }
            },
            throw () {

            }
        },
        getMusicianByName: {
            success (state, action) {
                return {
                    ...state,
                    musician: {
                        ...action.payload.res
                    }
                }
            },
            throw() {

            }
        },
        collectMusic: {
            success(state, action) {
                return {
                    ...state,
                    songList: [...new Set([...action.payload.songList])]
                }
            }
        },
        getCollectMusic: {
            success(state, action) {
                return {
                    ...state,
                    songList: [...new Set([...action.payload.songList])],
                    collectList: [...new Set([...action.payload.collectList])]
                }
            }
        },
        buyvip: {
            success(state, action) {
                return {
                    ...state,
                    isVip: action.payload.isVip
                }
            }
        }
    },
    actions: {
        async getAllMusician(key) {
            dispatch({
                type: 'index.setState',
                payload: {
                    musicianLoading: true
                }
            })
            const res = await fetch(`/getAllMusician?key=${key}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            return res.json();
        },
        async getMusicianByName(name) {
            const res = await fetch(`/getMusician?key=${name}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            return res.json();
        },
        collectMusic: (music) => async ({getState}) => {
            const res = await fetch(`/collectMusic?key=${music}&username=${getState().index.username}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            return res.json();
        },
        getCollectMusic: (isCollect = 1) => async ({getState}) => {
            const res = await fetch(`/getCollectMusic?username=${getState().index.username}&isCollect=${isCollect}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            return res.json();
        },
        buyvip: () => async ({getState}) => {
            const res = await fetch(`/buyvip?username=${getState().index.username}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            return res.json();
        }
    } 
};
