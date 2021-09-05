import React from 'react'
import { Route } from 'react-router-dom'

const LoginRoute = ({ component: Component, ...rest }) => {
    const { user } = useUser()
    return (
        <Route
            {...rest}
            render={(routerProps) => {
                !user ? <Component {...routerProps} /> : <Redirect to='/' />
            }}
        />
    )
}

export default LoginRoute
