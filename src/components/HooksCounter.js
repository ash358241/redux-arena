import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';

const HooksCounter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment());
    }

    const decrementHandler = () => {
        dispatch(decrement());
    }
    return (
        <div className="my-3">
            <h4>Count: {count}</h4>
            <Button variant="primary" className="mx-2" onClick={incrementHandler}>Increment</Button>
            <Button variant="danger" className="mx-2" onClick={decrementHandler}>Decrement</Button>
        </div>
    );
};


export default HooksCounter;