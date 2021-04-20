import { useContext, useState } from "react";
import { todoContext } from "../CreateContext/context";
import Todo from "./Todo";



const CreateTodo = () => {
    const context = useContext(todoContext);
    const dispatch = context?.dispatchTODO;


    // const inputRef = useRef<HTMLInputElement>(null);
    const [text2, setText2] = useState('');

    const f = (event: any) => setText2(event.target.value)

    const handleAddTask = () => {
        dispatch({ type: 'ADD', payload: text2 })
    };

    return (
        <div>
            <input
                // ref={inputRef}
                onChange={f}
                type="text" />
            <button onClick={handleAddTask}>submit</button>
            <Todo />
        </div>

    )
};

export default CreateTodo;