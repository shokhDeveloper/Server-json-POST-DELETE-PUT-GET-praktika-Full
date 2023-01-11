import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { Context } from "../../Context"

export const Register = () => {
    const [fistError, setFirstError] = useState("Ism kiritish majburiy !!")
    const [firstTouched, setTouched] = useState(false)
    const [lastError, setlastError] = useState("Familya kiritish majburiy !!")
    const [lastTouched, setLastTouched] = useState(false)
    const [emailError, setEmailError] = useState("Email kiritish majburiy !!")
    const [emailTouched, setEmailTouched] = useState(false)
    const [passwordError, setPasswordError] = useState("Parol kiritish majburiy !!")
    const [passwordTouched, setPasswordTouched] = useState(false)
    const {token, setToken} = useContext(Context)
    const navigator = useNavigate()
    function handleBlur(event){
        switch(event.target.id){
            case "firstname":{
                setTouched(true)
            }break;
            case "lastname":{
                setLastTouched(true)
            }break;
            case "email":{
                setEmailTouched(true)
            }break;
            case "password":{
                setPasswordTouched(true)
            }
        }
    }
    const handleKey = (event) => {
     const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        switch(event.target.id){
            case "firstname":{
                if(event.target.value.length > 2){
                    setFirstError("")
                }else{
                    setFirstError("2 ta harfli ism mavjud emas")
                }
            }break;
            case "lastname":{
                if(event.target.value.length > 2){
                    setlastError("")
                }else{
                    setlastError("2 ta harfli familya mavjud emas")
                }
            }break;
            case "email":{
                if(re.test(event.target.value) === true){
                    setEmailError("")
                }else{
                    setEmailError("Email yozilishi xato")
                }
            }break;
            case "password":{
                if(event.target.value.length > 3 && event.target.value.length <8){
                    setPasswordError("")
                }else{
                    setPasswordError("Parol 3 dan katta va 8 dan kichik bo'lishi zarur")
                }
            }
        }
    }
    const {user, setUser} = useContext(Context)
    async function handleSub(event){
        event.preventDefault()
        const data = new FormData(event.target)
        const jsons = await axios({
            method: "POST",
            url: "http://localhost:7777/register",
            data: {firstname: data.get("firstname"),lastname: data.get("lastname"),email: data.get("email"), password: data.get("password")}
        })
        let response = await jsons.data
        if(response){
            const {accessToken, user} = response
            if(accessToken !== undefined && accessToken !== null){
                setToken(accessToken)
                setUser(user)
                navigator("/")
            }
        }
    }
    return(
        <div style={{minHeight: "100vh", display: token !== null? "none": "flex"}}  className=" justify-content-center align-items-center text-center" >
            <form onSubmit={handleSub} className="form-control  mx-auto" style={{width: "30%"}}>
                <h2>Ruyhattan o'ting</h2>
                <input onKeyUp={handleKey} type="text" placeholder="Ism" onBlur={handleBlur} className="form-control mt-3" name="firstname" id="firstname" />
                <span className={`${firstTouched === true? "d-flex text-danger": "d-none"}`}>{fistError}</span>
                <input onKeyUp={handleKey} type="text" onBlur={handleBlur} placeholder="Familya" className="form-control mt-3" name="lastname" id="lastname" />
                <span className={`${lastTouched === true? "d-flex text-danger": "d-none"}`}>{lastError}</span>
                <input onKeyUp={handleKey} type="email" onBlur={handleBlur} placeholder="Email" className="form-control mt-3" name="email" id="email" />
                <span className={`${emailTouched === true? "d-flex text-danger": "d-none"}`}>{emailError}</span>
                <input onKeyUp={handleKey} type="password" onBlur={handleBlur} name="password" placeholder="Parol" className="form-control mt-3" id="password" />
                <span className={`${passwordTouched === true? "d-flex text-danger": "d-none"}`}>{passwordError}</span>
                <button className="btn btn-primary mt-4">Yuborish</button>
            </form>
        </div>
    )
}