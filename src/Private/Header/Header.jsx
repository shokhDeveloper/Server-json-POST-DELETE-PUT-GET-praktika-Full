import { Button, Dropdown } from "antd"
import { useContext } from "react"
import { Link, NavLink, Route, Routes } from "react-router-dom"
import { Context } from "../../Context"
import { Posts } from "../Posts"
import { Settings } from "../Settings"

export const Header=  () => {
    const {setToken} = useContext(Context)
    function handleClick(){
        setToken(null)
        window.localStorage.clear()
    }
    const items = [
        {
            key: 1,
            label: <Link onClick={handleClick}>Logout</Link>
        },
        {
            key: 2,
            label: <NavLink to={"settings"}>Settings</NavLink>
        }
    ]
    const {user} = useContext(Context)
    return(
        <>
        <header>
            <div className="container">
                <nav className="nav d-flex align-items-center justify-content-between">
                    <div className="nav__align w-50 d-flex">
                    <h1>Home Page</h1>
                    <ul className=" w-25 nav__ul d-flex align-items-center pt-3 justify-content-evenly list-unstyled">
                        <li>
                            <NavLink className={(params) => params.isActive? "text-decoration-none text-secondary": "text-dark text-decoration-none"}  to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={(params) => params.isActive? "text-decoration-none text-secondary": "text-dark text-decoration-none"}  to={"posts"}>Posts</NavLink>
                        </li>
                    </ul>
                    </div>
                    <Dropdown menu={{items}}>
                    <Button>{user.firstname.charAt(0)+user.lastname.charAt(0)}</Button>
                    </Dropdown> 
                </nav>
            </div>
        </header>        
        <Routes>
            <Route index element={<>
            <div className="container">
            <h1>Home</h1>
            <Lorem/>
            </div>
            </>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/settings" element={<Settings/>}/>
        </Routes>
        </>
    )
}
export const Lorem = () => {
    return(
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi quisquam tempore obcaecati deleniti nihil officiis explicabo repellendus reiciendis iste soluta ex praesentium consectetur dolorum, in saepe aliquam optio qui? Atque natus laborum, qui reiciendis voluptate repellat placeat distinctio sequi.</p>
    )
}