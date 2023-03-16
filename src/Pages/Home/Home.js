import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/counter/counterSlice';

function Home() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    console.log(count);
    return (
        <div className='bg-gray-500 min-h-screen flex justify-center items-center'>
            <div>
                COUNTER: 
            </div>
            <div  >
            <button className='mx-2'
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            >
            -
            </button>
            <span className='border-2 border-black px-1'>{count}</span>
            <button
            className='mx-2'
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            >
            +
            </button>
            </div>
        </div>
    )
}

export default Home
