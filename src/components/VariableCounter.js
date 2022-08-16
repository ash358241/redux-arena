import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';
import { decrement as dDecrement, increment as dIncrement } from '../redux/dynamicCounter/actions';

const Counter = ({ count, increment, decrement }) => {
    // console.log(count);
    return (
        <div className="my-3">
            <h4>Count: {count}</h4>
            <Button variant="primary" className="mx-2" onClick={increment}>Increment</Button>
            <Button variant="danger" className="mx-2" onClick={decrement}>Decrement</Button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: ownProps.dynamic ? (value) => dispatch(dIncrement(5)) : () => dispatch(increment()),
        decrement: ownProps.dynamic ? (value) => dispatch(dDecrement(2)) : () => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
