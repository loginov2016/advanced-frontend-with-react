import React, { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount( count + 1 );
    }

    return (
        <div className={styles.button}>
            <h2>{count}</h2>
           <button onClick={increment} >Increment</button>
        </div>
    );
};

export default Counter;