import { Button } from "antd"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import { Modal } from "./Modal"
import { MyPosts } from "./MyPosts"
export const Settings  = () => {
    const {block, setBlock, posts, setPosts, user, myPosts, mySetPosts} = useContext(Context)
    
    function handleClick(){
        setBlock(!block)
    }
    let date = new Date()
    let locals = date.toLocaleDateString()
    let hours = date.getHours().toString().padStart(2, "0")
    let minut = date.getMinutes().toString().padStart(2, "0")
    function handleSub(event){
        event.preventDefault()
        let data = new FormData(event.target)
        axios({
            url: "http://localhost:7777/posts",
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            data: {title: data.get("title"), body: data.get("body"), date: locals+"-"+hours+":"+minut+ " "+ "Create-at", user_id: user.id, user: user.firstname+user.lastname }
        }).then((response) => {
            if(response.status === 201){
                setBlock(!block)
            }
            setPosts([response.data])
        })
    }
    const joyida = () => {
        fetch(`http://localhost:7777/posts?user_id=${user.id}`)
        .then((response) => response.json())
        .then((data) => {
        console.log(data)    
        mySetPosts(data)})
    }
    useEffect(() => {        
        joyida()
    },[myPosts]) // joyida bo'lishi uchun shunga quloq solish kerak ammo keyinchalik server tuxtovsiz get qiladi va ogir bulib ketadi 
    return(
        <div className="container">
            <div className="posts">
                <h3 className="text text-center">Settings</h3>
                <Button onClick={handleClick} type="primary">Add +</Button>
            </div>  
            <Modal block={block} setBlock={setBlock}>
            <h3>New Posts</h3>
                <form onSubmit={handleSub} className="d-flex justfy-content-between align-items-center">
                    <input type="text" name="title" className="m-3 form-control" />
                    <input type="text" name="body"  className="m-3 form-control"/>
                    <button className="btn btn-success">Post</button>
                </form>
            </Modal>
            <h3 className="text-center mt-4">Sizning postlaringiz</h3>
            <ul className="w-50 mx-auto text-center">
                {myPosts.length > 0?
                myPosts.map((item) => (
                    <MyPosts id={item.id} joyida={joyida} title={item.title} body={item.body}/>
                ))
                :<h1>Sizning hozircha postlaringiz yuq</h1>}
            </ul>
        </div>
    )
}