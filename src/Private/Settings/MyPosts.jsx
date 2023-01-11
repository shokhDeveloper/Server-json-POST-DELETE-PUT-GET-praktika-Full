import axios from "axios"
import { useContext, useState } from "react"
import { Context } from "../../Context"
import { Modal } from "./Modal"

export const MyPosts = ({title, body ,id, joyida}) => {
    const [block, setBlock] = useState(!true) 
    const {myPosts, mySetPosts, user} = useContext(Context)
    let date = new Date()
    let locals = date.toLocaleDateString()
    let hours = date.getHours().toString().padStart(2, "0")
    let minut = date.getMinutes().toString().padStart(2, "0")
    async function handleSub(event){
        event.preventDefault()
        let data = new FormData(event.target)
        let jsons = await axios({
            url: `http://localhost:7777/posts/${id}`,
            method: "PUT",
            data:{
                title: data.get("title"),
                body: data.get("body"),
                user: user.firstname + user.lastname,
                user_id: user.id,
                date: locals+"-"+hours+":"+minut+ " "+ "Update-at",
                status: "published"
            }
        })
        let response = await jsons.data
        console.log(response)
        joyida()
        mySetPosts((array) => [...array, response])
    }
    const handleClick = () => {
        axios({
            url:`http://localhost:7777/posts/${id}`,
            method: "DELETE"
        }).then((response) => {
            if(response.status === 200){
                alert("Muvaffaqiyatli o'chirildi saytni yangilang")
                console.log(response)
            }
        })
          
    }
    return(
        <>
        <li className="post d-flex justify-content-between align-items-center">
            <div className="post-text">
            <h4>{title}</h4>
            <p>{body}</p>
            </div>
            <button onClick={() => setBlock(!block)}  className="post-btn btn btn-success">
            Edit
            </button>
        </li>
        {title !== ""? <Modal  block={block} setBlock={setBlock}>
            <>
                <h3>Who this updated posts ?</h3>
                <form onSubmit={handleSub} className="d-flex justfy-content-between align-items-center">
                    <input type="text" name="title" className="m-3 form-control" />
                    <input type="text" name="body"  className="m-3 form-control"/>
                    <button className="btn btn-success">Post</button>
                    <button onClick={handleClick} type="button" className="btn danger">Delete</button>
                </form>
            </>
        </Modal> : false}
        </>
    )
}