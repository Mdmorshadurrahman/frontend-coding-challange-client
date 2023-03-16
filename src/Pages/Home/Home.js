import React from 'react'
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import {useGetMessagesQuery, useSendCountMutation } from '../../features/api/apiSlice';
import CounterValue from '../../Component/CounterValue';
import { w3cwebsocket }from "websocket"


function Home() {
    const count = useSelector((state) => state.counter.value);
    const [counterState, {data}] = useSendCountMutation();
    // const scene = new THREE.Scene();
    // const geometry = new THREE.SphereGeometry( 15, 32, 16 );
    // const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    // const sphere = new THREE.Mesh( geometry, material );
    // scene.add( sphere );
    return (
        <div className=' font-semibold text-2xl bg-gray-500 min-h-screen flex justify-center items-center'>
            <div className='border-4 border-white rounded-lg py-10 px-20'>
            <div className='text-white cursor-pointer mr-2 mb-5'>
                COUNTER : 
            </div>
            <div  className='flex  justify-center' >
            <button className='mx-2 hover:text-white'
            aria-label="Decrement value"
            onClick={() => counterState("decrement")}
            >
            -
            </button>
            <CounterValue/>
            <button
            className='mx-2 hover:text-white'
            aria-label="Increment value"
            onClick={() => counterState('increment')}
            >
            +
            </button>
            </div>
            </div>
        </div>
    )
}

export default Home
