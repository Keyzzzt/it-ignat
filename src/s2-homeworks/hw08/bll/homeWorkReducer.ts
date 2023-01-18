import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    const sorted = [...state].sort((a, b) => {
        if(a.name > b.name) return -1
        if(a.name < b.name) return 1
        else return 0
    })
    switch (action.type) {

        case 'sort': { // by name
            return action.payload === 'down' ? sorted : sorted.reverse()
        }
        case 'check': {
            return [...state].filter(u => u.age >= 18) // need to fix
        }
        default:
            return state
    }
}
