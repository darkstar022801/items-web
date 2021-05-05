import React, { createContext, useState, useEffect } from 'react'

export const FeedContext = createContext({})

export const FeedProvider = props => {
    const { children } = props

    return (
        <FeedContext.Provider value={{}}>
            {children}
        </FeedContext.Provider>
    )
}
