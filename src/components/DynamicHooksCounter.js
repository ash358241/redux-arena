import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/dynamicCounter/actions';

const DynamicHooksCounter = () => {
    const count = useSelector(state => state.dynamicCounter.value);
    const dispatch = useDispatch();

    const incrementHandler = (value) => {
        dispatch(increment(value));
    }

    const decrementHandler = (value) => {
        dispatch(decrement(value));
    }
    return (
        <div className="my-3">
            <h4>Count: {count}</h4>
            <Button variant="primary" className="mx-2" onClick={() => incrementHandler(5)}>Increment</Button>
            <Button variant="danger" className="mx-2" onClick={() => decrementHandler(5)}>Decrement</Button>
        </div>
    );
    
};

export default DynamicHooksCounter;