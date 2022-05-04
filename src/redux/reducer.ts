import {ScoreType} from '../App';

export type ActionType = CounterINCType
    | CounterRESType
    | CounterSettingType
    | ChangeStartValue
    | ChangeMaxValue

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
                currentScore: Number(state.startScore)
            }
        }
        case 'CHANGE-START-VALUE': {
            return {...state, startScore: Number(action.startValue)}
        }
        case 'CHANGE-MAX-VALUE': {
            return {...state, maxScore: Number(action.maxValue)}
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
export const counterSettingAC = () => {
    return {
        type: 'CLICK-BUTTON-SET',

    } as const
}

type ChangeStartValue = ReturnType<typeof changeStartValue>
export const changeStartValue = (value: string) => {
    return {
        type: 'CHANGE-START-VALUE', startValue: value
    } as const
}

type ChangeMaxValue = ReturnType<typeof changeMaxValue>
export const changeMaxValue = (value: string) => {
    return {
        type: 'CHANGE-MAX-VALUE', maxValue: value
    } as const
}




