const AUTH_KEY = 'isAuthenticated'

export const setAuthenticated = () => {
  sessionStorage.setItem(AUTH_KEY, 'true')
}

export const clearAuthenticated = () => {
  sessionStorage.removeItem(AUTH_KEY)
}

export const isAuthenticated = () => {
  return sessionStorage.getItem(AUTH_KEY) === 'true'
}
