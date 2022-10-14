import { useUserStore } from "~/stores/user";

export const useFetch2 = async (request, opt?) => {  
  return useState('foo', () => 'bar')
}

export const useAPIClient = (request, opt?) => {
  const doRequest = async (request, opt?) => {
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
        .catch(requestError => {
          requestError.data
        })
    } catch (requestError) {
      const refresh_token = useCookie('refresh_token')
      
      if (!requestError.response?.status === 401 || !refresh_token) {
        // Legitimate 4xx-5xx error, abort
        throw requestError
      }
      
      try {
        await refreshSession(refreshToken)
        // call function recursively after refreshSession has done a request to /api/oauth/refresh API route and updated the cookie
        return await doRequest(method, endpoint, config)
      } catch (refreshError) {
        await invalidateSession()
        await navigateTo('/login')
      }
    }
  }
  
  return {
    doRequest(request, opt)
  }
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