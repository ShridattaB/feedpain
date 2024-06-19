import { getTokenFromLocalStorage } from "."

export const isAuthenticated = () => {
    return !!getTokenFromLocalStorage()
}