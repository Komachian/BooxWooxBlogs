import axios from 'axios'
import React, { createContext, useContext } from 'react'
import { useUser } from './UserContext'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const { setUser } = useUser()

    const login = async (number) => {
        const response = await axios({
            method: 'POST',
            data: {
                phoneNumber: number,
            },
            url: 'hmm.com',
            withCredentials: true,
        })

        const data = response.data

        if (data.success) {
            // smth not-sure
            // perhaps: setUser({ ...data.user })
        }
    }

    const logout = () => {
        setUser(null)
    }

    const value = { login, logout }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
