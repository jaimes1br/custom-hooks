import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [ counter, setCounter ] = useState(initialValue);

    const handleAdd = ( value = 1) =>{
        setCounter( (current) => current + value);
    }

    const handleSub = (value = 1) => {
        if(counter === 0) return;
        setCounter( (current) => current - value);
    }

    const handleReset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        handleAdd,
        handleSub,
        handleReset
    }
}