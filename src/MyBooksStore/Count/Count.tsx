import React from 'react';
type Props = {
    increaseCount: VoidFunction;
    decreaseCount: VoidFunction;
    count: number;
}

const Count: React.FC<Props> = ({ increaseCount, decreaseCount, count }) => {
    return (
        <div>
            <div onClick={decreaseCount}>-</div>
            <div>{count}</div>
            <div onClick={increaseCount}>+</div>
        </div>
    )
};

export default React.memo(Count);