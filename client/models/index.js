'use strict';
import { call, dispatch } from 'rabjs';
export default {
    namespace: 'index',
    state: {
        isShowLoginModule: false,
        isLogin: false,
        isVip: false,
        musicianLoading: false,
        musicians: []
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
        }
    },
    actions: {
        async getAllMusician() {
            dispatch({
                type: 'index.setState',
                payload: {
                    musicianLoading: true
                }
            })
            const res = await fetch('/getAllMusician', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            return res.json();
        }
    } 
};
