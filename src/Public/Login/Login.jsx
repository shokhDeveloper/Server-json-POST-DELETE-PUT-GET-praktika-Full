import { Button, Col, Form, Input, Row , Typography} from "antd"
import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Context } from "../../Context"
const {Title} = Typography
export const Login  =() => {
    const {user, setUser,token, setToken} = useContext(Context)
    const navigator = useNavigate()
    function handleSub(event){
        fetch("http://localhost:7777/login",{
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({email: event.email, password: event.password})
        }).then((response) => response.json())
        .then((data) => {
            if(data){
                const {accessToken, user} = data
                setToken(accessToken)
                setUser(user)
                navigator("/")
            }
        }).catch((error) => {
            console.log(error)
        })
    }
    return(
        <Row style={{minHeight: "100vh", display: token!== null? "none": "flex"}} align="middle" justify={"center"}>
            <Col>
                <Title level={2}>
                    Login
                </Title>
                <Form onFinish={handleSub}>
                    <Form.Item name={"email"} rules={[
                        {
                            type: "text",
                            message: "Email"
                        },
                        {
                            required: true,
                            message: "Email kiritish majburiy"
                        }
                    ]} hasFeedback>
                        <Input placeholder="Email">
                        </Input>
                    </Form.Item>
                    <Form.Item name={"password"} rules={[
                        {
                            type: "password",
                            message: "Password kiriting"
                        },
                        {
                            required:true,
                            message: "Passwordingizni kiriting"
                        }
                    ]}>
                        <Input placeholder="password"></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Yuborish</Button>
                    </Form.Item>
                    <Form.Item>
                        <NavLink to={"/register"}>Ruyhattan o'tish</NavLink>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
}