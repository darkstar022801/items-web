import React, { createContext, useState, useEffect } from 'react'

export const ItemContext = createContext({})

export const ItemProvider = props => {
    const { children } = props

    return (
        <ItemContext.Provider value={{}}>
            {children}
        </ItemContext.Provider>
    )
}
