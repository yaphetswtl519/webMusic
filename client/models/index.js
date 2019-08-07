'use strict';
import { call } from 'rabjs';
export default {
    namespace: 'index',
    state: {
        isShowLoginModule: false
    },
    reducers: {
        setState (state, action) {
            return {...state, ...action.payload}
        },
    },
    actions: {

    } 
};
