import React, { createContext, useState, useEffect } from 'react'

export const LocationContext = createContext({})

export const LocationProvider = props => {
    const { children } = props

    return (
        <LocationContext.Provider value={{}}>
            {children}
        </LocationContext.Provider>
    )
}
