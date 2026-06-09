import { baseApi } from "./baseApi";

export const shopApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({

        createShop: builder.mutation({
            query: (shopData)=>({
                url: "/shop/createshop",
                method: "POST",
                body: shopData
            })
        }),

        getAllShops: builder.query({
            query: ()=>({
                url: "/shop/getAllShops",
                method: "GET",
            })
        })

    })
})

export const {
    useCreateShopMutation,
    useGetAllShopsQuery
} = shopApi