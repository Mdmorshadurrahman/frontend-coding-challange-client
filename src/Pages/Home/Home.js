import React from 'react'
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import {useSendCountMutation } from '../../features/api/apiSlice';
import CounterValue from '../../Component/CounterValue';

function Home() {
    const count = useSelector((state) => state.counter.value);
    const [counterState, {data}] = useSendCountMutation();
    // const scene = new THREE.Scene();
    // const geometry = new THREE.SphereGeometry( 15, 32, 16 );
    // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    // const sphere = new THREE.Mesh( geometry, material );
    // scene.add( sphere );
    return (
        <div className='bg-gray-500 min-h-screen flex justify-center items-center'>
            <div>
                COUNTER: 
            </div>
            <div  className='flex ' >
            <button className='mx-2'
            aria-label="Decrement value"
            onClick={() => counterState("decrement")}
            >
            -
            </button>
            <CounterValue/>
            <button
            className='mx-2'
            aria-label="Increment value"
            onClick={() => counterState('increment')}
            >
            +
            </button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home
