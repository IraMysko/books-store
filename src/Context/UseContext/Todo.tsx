import React, { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import './todos.css';
import { todoContext } from '../CreateContext/context';



const Container = styled.div`
display: flex;

justify-content: space-around;
`

const Todo = () => {
    const context = useContext(todoContext)
    const completed = context?.todoState.filter(({ isComplete }) => isComplete === true)
    const unfinished = context?.todoState.filter(({ isComplete }) => isComplete === false)

    const dispatch = context?.dispatchTODO;

    console.log(333, context?.todoState);

    const [inputEditId, setInputEditId] = useState<number | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const makeHandleShowInput = (id: number) => () => {
        setInputEditId(id);
    };

    const handleEditTask = (id: number) => () => {
        const value = inputRef.current?.value || '';
        dispatch({ type: 'EDIT', payload: { id, text: value } })
        setInputEditId(null);
    };

    const handleDeleteTask = (id: number) => () => {
        dispatch({ type: 'DELETE', payload: id })
    };

    const handleCheckTask = (id: number) => (event: any) => {
        dispatch({ type: 'MOVE', payload: { id, isComplete: event.target.checked } })
    };

    return (
        <>
            <Container>
                <div>
                    <div>WILL DO</div>
                    {unfinished?.map(({ text, id, isComplete }: any) => (
                        <>
                            {inputEditId === id
                                ? <>
                                    <input
                                        defaultValue={text}
                                        ref={inputRef}
                                        type="text"
                                    />
                                    <span onClick={handleEditTask(id)}>OK</span>
                                </>
                                : <div>{text}</div>
                            }
                            <span className="checkbox">
                                <input checked={isComplete} onChange={handleCheckTask(id)} className="custom-checkbox" type="checkbox" id={`todo-${id}`} name={`todo-${id}`} />
                                <label htmlFor={`todo-${id}`}></label>
                            </span>
                            <span onClick={handleDeleteTask(id)} className='button-delete'></span>
                            <span onClick={makeHandleShowInput(id)} className='button-edit'></span>
                        </>
                    ))
                    }
                </div>
                <div>
                    <div>DONE</div>
                    {completed?.map(({ text }: any) => (
                        <>
                            <div>{text}</div>
                            <div className='button-delete'></div>
                        </>
                    ))}

                </div>

            </Container>
        </>
    )
};

export default Todo;