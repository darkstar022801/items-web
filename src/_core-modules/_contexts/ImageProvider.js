import React, { createContext, useState, useEffect } from 'react'

export const ImageContext = createContext({})

export const ImageProvider = props => {
    const { children } = props

    const [files, setFiles] = useState([])

    return (
        <ImageContext.Provider value={{
            files,
            upload: files => {
                setFiles(files)
            },
            remove: () => {},
        }}>
            {children}
        </ImageContext.Provider>
    )
}
