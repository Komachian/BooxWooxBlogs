import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'

export default function BasicRoute({ component: Component, ...rest }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />
      }}
    />
  )
}
