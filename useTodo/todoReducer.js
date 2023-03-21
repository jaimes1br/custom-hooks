export const todoReducer = ( state = [], action ) =>{


    switch (action.type) {
        case '[TODO] Add Todo':
            return [...state, action.payload];
            

        case '[TOOD] Remove Todo':
            return state.filter( todo => todo.id !== action.payload );

        case '[TOOD] Toggle Todo':
            return state.map( todo =>{
                
                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            })

        default:
            return state
    }


}