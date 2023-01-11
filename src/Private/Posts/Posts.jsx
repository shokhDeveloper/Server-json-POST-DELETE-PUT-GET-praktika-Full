import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import { PostsCard } from "./PostsCard"

export const Posts = () => {
    let [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("http://localhost:7777/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data))
    },[])
    return(
        <>
        <div className="container">
        {posts?.length > 0?
            <div className="posts d-flex flex-wrap justify-content-evenly">
                {posts?.map((item) => (
                    <PostsCard id={item.id} title={item.title} body={item.body} author={item.user}/>
                ))}
            </div>
        :<h1>Hozircha postlar yuq</h1>}
        </div>
        </>
    )
}