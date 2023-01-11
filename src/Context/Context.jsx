import { createContext, useEffect, useState } from "react";

export const Context = createContext()
export const ContextProvider = ({children})=> {
    const parses = window.localStorage.getItem("token_cools")
    const [token, setToken] = useState(parses !== null? parses: null)
    useEffect(() => {
        if(token !== null){
            window.localStorage.setItem("token_cools", token)
        }
    },[token])
    const [block, setBlock] = useState(!true)
    let parses_user = window.localStorage.getItem("user_cools")
    const [user, setUser] = useState(parses_user !== null? JSON.parse(parses_user): null)
    useEffect(() => {
        if(user !== null){
            window.localStorage.setItem("user_cools", JSON.stringify(user))
        }
    },[user])
    const parses_posts = window.localStorage.getItem("posts_cools")
    const [posts, setPosts] = useState(parses_posts !== null? JSON.parse(parses_posts): null)
    useEffect(() => {
        if(posts !== null){
            window.localStorage.setItem("posts_cools", JSON.stringify(posts))
        }
    },[posts])
    const [myPosts, mySetPosts] = useState([])
    return(
        <Context.Provider value={{token, posts, myPosts, mySetPosts, setPosts, setToken, block, setBlock, user, setUser}}>
            {children}
        </Context.Provider>
    )
}