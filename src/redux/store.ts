import {combineReducers, createStore} from 'redux';
import {counterReducer} from './reducer';
import {loadState, saveState} from '../localStorage/localStorage';

const rootReducer = combineReducers({
    score: counterReducer
})

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        score: store.getState().score
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
