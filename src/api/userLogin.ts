import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./baseUrl";

interface UserLoginParams {
  email: string;
  password: string;
  // other parameters as needed
}
interface UserLogoutParams {
  token: any;
  refresh_token: any;
}
interface RefreshTokenParams {
  refreshtoken: any;
}
export const loginapi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    userLogin: builder.mutation<any, UserLoginParams>({
      query: (params) => ({
        url: "login",
        method: "POST",
        body: params,
      }),
    }),
    userLogout: builder.mutation<any, UserLogoutParams>({
      query: (params) => {
        return {
          url: "logout",
          method: "POST",
          body: params,
          headers: {
            authorizated: `Bearer ${params.token}`, // Corrected header key
          },
        };
      },
    }),
    refreshToken: builder.mutation<any, RefreshTokenParams>({
      query: (params) => ({
        url: "refreshtoken",
        method: "POST",
        headers: {
          authorizated: `Bearer ${params.refreshtoken}`,
        },
      }),
    }),
  }),
});
export const {
  useUserLoginMutation,
  useUserLogoutMutation,
  useRefreshTokenMutation,
} = loginapi;
