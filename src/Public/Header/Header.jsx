import { NavLink, Route, Routes } from "react-router-dom"

export const Header = () => {
    return(
        <>
            <header>
            <div className="container">
                <nav className="nav d-flex justify-content-between align-items-center">
                    <h1 className="logo">
                        Logo
                    </h1>
                    <ul className="d-flex justify-content-evenly align-items-center w-50">
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"about"}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"contact"}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/login"}>Login</NavLink>
                        </li>
                    </ul>
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
            <Route path="/about" element={<>
            <div className="container">
                <h1>About</h1>
                <Lorem/>
            </div>
            </>}/>
            <Route path="/contact" element={<>
            <div className="container">
                <h1>Contact</h1>
                <Lorem/>
            </div>
            </>}/>
        </Routes>
        </>
        )
}
export const Lorem = () => {
    return(
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae aliquam magnam cumque necessitatibus, sit ipsa corporis neque sequi quia explicabo nostrum blanditiis id amet possimus beatae voluptatem quod eos nemo aperiam dolorum? Explicabo sit quasi et expedita fugiat voluptatum asperiores a placeat, aspernatur suscipit quae impedit facilis quas corporis rerum non saepe sed error deleniti repellat est eveniet soluta! Sequi, corporis? Quasi eum earum omnis, accusantium fuga rerum consequuntur facere inventore possimus cumque autem aut aperiam iusto doloremque dignissimos. Asperiores consequatur ipsa ex dicta, rem recusandae. Doloribus dolorem, numquam nam aliquam dolores aspernatur, adipisci quo error quasi vitae praesentium. Aspernatur.</p>
    )
}