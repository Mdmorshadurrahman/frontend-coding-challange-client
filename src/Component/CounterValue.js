import React from 'react'
import { useGetCountQuery } from '../features/api/apiSlice'

function CounterValue() {
    const {data} = useGetCountQuery(null, {refetchOnMountOrArgChange: true});
    console.log(data)
    return (
        <div>
            <span className='border-2 border-black px-1'>{data?data.payload:0}</span>
        </div>
    )
}

export default CounterValue
