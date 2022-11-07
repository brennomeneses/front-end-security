import { Input, Form, Button, message, Card } from "antd";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../../api/loginService";
import { LoginContent, MainLayout } from "./style";

const LoginPage: FunctionComponent = () => {

    const navigate = useNavigate();

    function onSubmit(values: ILoginValues) {
        console.log(values);
        loginService.login(values).then(({data: jwtToken})=>{
                console.log(jwtToken);
                sessionStorage.setItem("@app:Token", jwtToken);  
                navigate("/dashboard"); 
            }
        ).catch(err => message.error("E-mail ou senha incorretos"));
    }

    return (
    <MainLayout>
        <LoginContent>
        <Card title="Login Page">
            <Form
                onFinish={onSubmit}
            >
                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[{ required: true, message: 'Insira seu email' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Senha"
                    name="password"
                    rules={[{ required: true, message: 'Insira sua senha' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Entrar
                    </Button>
                    <Button type="link">
                        <Link to="/singup">
                            Cadastrar-se
                        </Link>
                    </Button>
                </Form.Item>
            </Form>
        </Card>
        </LoginContent>        
    </MainLayout>
    );
}
 
export default LoginPage;