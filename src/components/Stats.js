import React from 'react';

const Stats = ({count}) => {
    console.log(count);
    return (
        <div>
            <h3 className="fw-bold">Total Count: {count}</h3>
        </div>
    );
};

export default Stats;