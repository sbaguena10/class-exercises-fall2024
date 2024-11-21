import React, { useState } from "react";

export default function ButtonCount({ initialValue = 0 }) {
    const [count, setCount] = useState(initialValue);

    function addOne() {
        setCount(count + 1);
    }

    function resetCounter() {
        setCount(initialValue);
    }

    return (
        <div>
            <button onClick={addOne}>You have clicked {count} times</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
}