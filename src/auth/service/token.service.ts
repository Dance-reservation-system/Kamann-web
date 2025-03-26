import * as React from "react";
import { http } from "@/app/api/http.ts";
import { ApiError } from "@/app/api/api-error.ts";
import { isAxiosError } from "axios";
import { AuthApi } from "../api";

const LS_KEY = "_t";

export function getToken() {
  return localStorage.getItem(LS_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(LS_KEY, token);
}

export function deleteToken() {
  localStorage.removeItem(LS_KEY);
}

export function useAuthInterceptor({
  setAuthToken,
  deleteAuthToken,
  token,
}: {
  setAuthToken: (token: string) => void;
  deleteAuthToken: () => void;
  token: string | null;
}) {
  React.useEffect(() => {
    if (!token) {
      return;
    }

    http.interceptors.request.use(
      // before request
      function (request) {
        if (token) {
          request.headers.Authorization = `Bearer ${token}`;
        }

        return request;
      },
    );

    http.interceptors.response.use(
      // response status 2xx
      function (response) {
        return response;
      },

      // response status > 2xx
      async function (error: ApiError) {
        if (isAxiosError(error) && error.status === 401) {
          AuthApi.refresh()
            .then((response) => {
              setAuthToken(response.token);
              return;
            })
            .catch(() => {
              deleteAuthToken();
            });
        }

        return Promise.reject(error);
      },
    );
  }, [token, setAuthToken, deleteAuthToken]);
}
