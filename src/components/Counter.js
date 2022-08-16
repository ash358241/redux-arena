import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/counter/actions';

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
        count: state.counter.value
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
