import { useUserStore } from "~/stores/user";
import type { NitroFetchRequest } from 'nitropack'

declare type Fetch = typeof globalThis.fetch;
declare type RequestInfo = globalThis.RequestInfo;
declare type RequestInit = globalThis.RequestInit;
declare type Response = globalThis.Response;

interface ResponseMap {
  blob: Blob;
  text: string;
  arrayBuffer: ArrayBuffer;
  stream: ReadableStream<Uint8Array>;
}
declare type ResponseType = keyof ResponseMap | 'json';
declare type MappedType<R extends ResponseType, JsonType = any> = R extends keyof ResponseMap ? ResponseMap[R] : JsonType;

interface CreateFetchOptions {
  defaults?: FetchOptions;
  fetch: Fetch;
  Headers: typeof Headers;
}
declare type FetchRequest = RequestInfo;
interface FetchResponse<T> extends Response {
  _data?: T;
}
interface SearchParams {
  [key: string]: any;
}
interface FetchContext<T = any, R extends ResponseType = ResponseType> {
  request: FetchRequest;
  options: FetchOptions<R>;
  response?: FetchResponse<T>;
  error?: Error;
}
interface FetchOptions<R extends ResponseType = ResponseType> extends Omit<RequestInit, 'body'> {
  baseURL?: string;
  body?: RequestInit['body'] | Record<string, any>;
  params?: SearchParams;
  query?: SearchParams;
  parseResponse?: (responseText: string) => any;
  responseType?: R;
  response?: boolean;
  retry?: number | false;
  onRequest?(ctx: FetchContext): Promise<void>;
  onRequestError?(ctx: FetchContext & {
    error: Error;
  }): Promise<void>;
  onResponse?(ctx: FetchContext & {
    response: FetchResponse<R>;
  }): Promise<void>;
  onResponseError?(ctx: FetchContext & {
    response: FetchResponse<R>;
  }): Promise<void>;
}

const refreshToken = async () => {
  try {
    return await $fetch('/api/auth/refresh-token', {
      method: 'post',
    })
  } catch (requestError) {
    throw requestError
  }
}

export const Fetch2 = async (request: NitroFetchRequest, opt?: FetchOptions<ResponseType>) => {
  // const doRequest = async (request, opt = undefined) => {
    // const { authClient, refreshSession, invalidateSession } = useAuthProxyClient()
    // const client = authClient.create({ baseURL: <our API url> })
  
    const token = useCookie('token')
    const userStore = useUserStore()
  
    if (token.value) {
      opt = { ...opt,
        headers: {
          ...opt?.headers,
          'Authorization': `Bearer ${token.value}` }
        }
    }
    
    try {
      return await $fetch(request, opt)
    } catch (requestError) {
      // const refresh_token = useCookie('refresh_token')
      
      if (requestError.response?.status === 401) {
        // Legitimate 4xx-5xx error, abort
        throw requestError
      }
      
      try {
        await refreshToken()
        // call function recursively after refreshSession has done a request to /api/oauth/refresh API route and updated the cookie
        return await $fetch(request, opt)
      } catch (refreshError) {
        throw refreshError
      }
    }
  // }
  
  // return {
  //   doRequest(request, opt)
  // }
}

// export const useAuthProxyClient = () => {
//   const authClient = $fetch.create({ retry: 0 })
//   const authCookie = useCookie('auth')
  
//   const refreshSession = async refreshToken => 
//     authClient('/api/oauth/refresh', { method: 'post', body: { refreshToken, ... } })
//       .then(response => {
//         return { <access and refresh token values from response> }
//       })
//       .then(tokens => { authCookie.value = tokens })
//   const invalidateSession = async () => 
//     authClient('/api/oauth/revoke', { method: 'post', body: { ... } })
//       .then(() => { // ignore errors })
  
//   return {
//     authClient,
//     refreshSession,
//     invalidateSession
//   }
// }