import React from 'react';
import { Button } from 'react-bootstrap';

const Counter = ({ id, count, increment, decrement }) => {
    return (
        <div className="my-3">
            <h4>Count: {count}</h4>
            <Button variant="primary" className="mx-2" onClick={() => increment(id)}>Increment</Button>
            <Button variant="danger" className="mx-2" onClick={() => decrement(id)}>Decrement</Button>
        </div>
    );
};

export default Counter;