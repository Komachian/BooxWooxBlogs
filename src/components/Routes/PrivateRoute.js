import React from 'react'
import { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useUser } from '../Contexts/UserContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user, setShowOverlay } = useUser()
    useEffect(() => {
        if (!user) {
            setShowOverlay(true)
        }
    }, [])

    return (
        <Route
            {...rest}
            render={(routerProps) => {
                return user ? (
                    <Component {...routerProps} />
                ) : (
                    <Redirect to='/' />
                )
            }}
        />
    )
}
export default PrivateRoute
