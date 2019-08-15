'use strict';
import { call, dispatch } from 'rabjs';
export default {
    namespace: 'index',
    state: {
        isShowLoginModule: false,
        isLogin: false,
        isVip: false,
        musicianLoading: false,
        musicians: [],
        musician: {}
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
                    musicianLoading: false
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
        }
    } 
};
