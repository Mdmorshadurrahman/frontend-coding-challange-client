import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
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
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
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

// export const counterApi = createApi({
//     baseQuery: fetchBaseQuery({ baseUrl: '/' }),
//     endpoints: (build) => ({
//       getMessages: build.query({
//         query: (data) => `messages`,
//         async onCacheEntryAdded(
//           arg,
//           { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
//         ) {
//           // create a websocket connection when the cache subscription starts
//           const ws = new WebSocket('ws://localhost:5000')
//           try {
//             // wait for the initial query to resolve before proceeding
//             await cacheDataLoaded
  
//             // when data is received from the socket connection to the server,
//             // if it is a message and for the appropriate channel,
//             // update our query result with the received message
//             const listener = (event) => {
//               const data = JSON.parse(event.data)
//               if (!isMessage(data) || data.channel !== arg) return
  
//               updateCachedData((draft) => {
//                 draft.push(data)
//               })
//             }
  
//             ws.addEventListener('message', listener)
//           } catch {
//             // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
//             // in which case `cacheDataLoaded` will throw
//           }
//           // cacheEntryRemoved will resolve when the cache subscription is no longer active
//           await cacheEntryRemoved
//           // perform cleanup steps once the `cacheEntryRemoved` promise resolves
//           ws.close()
//         },
//       }),
//     }),
//   });

//   export const {useGetMessagesQuery} = counterApi;