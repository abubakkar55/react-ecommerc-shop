import React from 'react'
import { Redirect, Route } from 'react-router'
import useCustomContext from '../../hooks/useCustomContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { firebase: { user: { email, displayName }, isLoading } } = useCustomContext();

    if (isLoading) {
        return <div className="flex h-screen items-center justify-center">
            <img className="w-72" src="https://cdn.dribbble.com/users/5484/screenshots/2145786/for_dribbble.gif" alt="loading-img" />
        </div>
    }

    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                    email || displayName ?
                        (
                            children
                        ) :

                        (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: location }
                                }}
                            />
                        )
            }
        >

        </Route>
    )
}

export default PrivateRoute
