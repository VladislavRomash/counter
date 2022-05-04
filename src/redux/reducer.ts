import {ScoreType} from '../App';

export type ActionType = CounterINCType
    | CounterRESType
    | CounterSettingType
    | ChangeCurrentValue

const initialState: ScoreType =
    {
        title: 'Counter App', currentScore: 0, startScore: 0, maxScore: 5
    }


export const counterReducer = (state = initialState, action: ActionType): ScoreType => {
    switch (action.type) {
        case 'CLICK-BUTTON-INC': {
            return {...state, currentScore: state.currentScore + 1}
        }
        case 'CLICK-BUTTON-RES': {
            return {...state, currentScore: state.startScore}
        }
        case 'CLICK-BUTTON-SET': {
            return {
                ...state,
                startScore: Number(action.startValue),
                maxScore: Number(action.maxValue),
            }
        }
        case 'CHANGE-CURRENT-VALUE': {
            return {...state, currentScore: state.startScore}
        }
        default:
            return state

    }
}


type CounterINCType = ReturnType<typeof counterIncAC>
export const counterIncAC = () => {
    return {
        type: 'CLICK-BUTTON-INC',
    } as const
}

type CounterRESType = ReturnType<typeof counterResAC>
export const counterResAC = () => {
    return {
        type: 'CLICK-BUTTON-RES',
    } as const
}

type CounterSettingType = ReturnType<typeof counterSettingAC>
export const counterSettingAC = (startValue: number, maxValue: number) => {
    return {
        type: 'CLICK-BUTTON-SET', startValue: startValue, maxValue: maxValue,

    } as const
}

type ChangeCurrentValue = ReturnType<typeof changeCurrentValue>
export const changeCurrentValue = () => {
    return {
        type: 'CHANGE-CURRENT-VALUE',
    } as const
}




