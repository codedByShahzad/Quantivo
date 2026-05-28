// features/api/authApi.ts

import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    // Signup
    signup: builder.mutation({
      query: (userData) => ({
        url: "/auth/signup",
        method: "POST",
        body: userData,
      }),
    }),

    // Login
    login: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
      }),
    }),

    // logout: builder.mutation({
    //   query: () => ({
    //     url: "/auth/logout",
    //     method: "POST",
    //   }),
    // }),

    // getMe: builder.query({
    //   query: () => ({
    //     url: "/auth/me",
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
//   useLogoutMutation,
//   useGetMeQuery,
} = authApi;