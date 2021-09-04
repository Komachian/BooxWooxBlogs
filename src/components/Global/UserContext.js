import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState(undefined)
    const [userpic, setUserpic] = useState(undefined)

    const uploadBlog = async ({
        title,
        description,
        content,
        featureImg,
        status,
    }) => {
        const response = await axios({
            method: 'POST',
            url: process.env.REACT_APP_WRITE_BLOG_ENDPOINT,
            headers: {
                token: `bearer ${process.env.REACT_APP_AUTH_TOKEN}`
            },
            data: {
                Author: 'hello',
                Title: title,
                Description: description,
                Content: content,
                Feature_Img: featureImg,
                Status: status,
            },
            withCredentials: true
        })

        return response.data.message === `item added successfully`
    }

    const value = { username, userpic, setUsername, setUserpic, uploadBlog }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
