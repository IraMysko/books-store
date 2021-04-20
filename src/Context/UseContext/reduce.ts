// @ts-ignore
import uuid from 'react-uuid';

export function todoReducer(state: any, action: any) {
    switch (action.type) {
        case 'ADD': {
            const text = action.payload
            return [
                ...state,
                { id: uuid(), text, isComplete: false }
            ]
        }
        case 'MOVE': {
            const { id, isComplete } = action.payload
            return state.map((todo: any) => todo.id === id ? { ...todo, isComplete } : todo)
        }

        case 'DELETE': {
            const id = action.payload
            return state.filter((todo: any) => todo.id !== id)

        }

        case 'EDIT': {
            const { id, text } = action.payload
            return state.map((todo: any) => todo.id === id ? { ...todo, text } : todo)
        }

        default:
            return state;
    }
};

