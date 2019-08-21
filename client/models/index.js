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
        songList: []
    },
    reducers: {
        setState (state, action) {
            return {...state, ...action.payload}
        },
        getAllMusician: {
            success (state, action) {
                console.log(action.payload)
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
                console.log('action', action);
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
            console.log(getState().index, music);
            const res = await fetch(`/collectMusic?key=${music}&username=${getState().index.username}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            console.log(res)
            return res.json();
        }
    } 
};
