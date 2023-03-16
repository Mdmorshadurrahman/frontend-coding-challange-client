import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// console.log(data)
// const jsonRpc = ({data,counterType}) => ({
//     if(counterType = "increment"){
//         return {
//         "jsonrpc": "2.0",
//         "method": counterType,
//         "params": {data},
//         "id": 1
//         };
//     },
//     if(counterType = "decrement"){
//         return {
//             "jsonrpc": "2.0",
//             "method": counterType,
//             "params": {data},
//             "id": 1
//         }
//     }
    
// }); 


export const counterApi = createApi({
    reducerPath: "counterApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/"}),
    tagTypes: ["Count"],
    endpoints: (builder) => ({

        getCount: builder.query({
            query: () => ({
                url: "/home",
            }),
            providesTags:["Count"],
        }),
        sendCount: builder.mutation({
            query: (data) => ({
                url: "/home",
                method: "POST",
                // headers: {
                //     'content-type': 'application/json-rpc',
                // },
                body:{method:data},
            }),
            invalidatesTags: ["Count"],
        }),
    }),
});

export const {useSendCountMutation, useGetCountQuery} = counterApi;