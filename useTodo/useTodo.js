import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' )) || [];
}

export const useTodo = () => {

    const [ todos, dispatchTodo ] = useReducer( todoReducer, [], init )

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify( todos ));
    }, [ todos ])



    const handleAddNewTodo = ( newTodo ) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        }

        dispatchTodo(action);
    }

    const handleRemoveTodo = ( id ) => {
        dispatchTodo({
            type: '[TOOD] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatchTodo({
            type: '[TOOD] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleAddNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    }
}