import React, { createContext, useState, useEffect } from 'react'

export const HomeContext = createContext({})

export const HomeProvider = props => {
    const { children } = props

    return (
        <HomeContext.Provider value={{}}>
            {children}
        </HomeContext.Provider>
    )
}
