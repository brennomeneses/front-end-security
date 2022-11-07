import { Button, Card, Form, Input } from "antd";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import usersServices from "../../api/usersServices";
import { MainLayout } from "../loginPage/style";
import { SingUpLayout } from "./style";

const SingUpPage: FunctionComponent = () => {

    function singUpFormRegistration(values: IFormSubmission) {
        usersServices.singUp(values);
    }

    return ( 
    <MainLayout>
        <SingUpLayout>
            <Card title="Singup Page">
                <Form onFinish={singUpFormRegistration}>
                    <Form.Item
                        label="Nome"
                        name="name"
                        rules={[{ required: true, message: 'Insira seu nome' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="E-mail"
                        name="email"
                        rules={[
                            { required: true, message: 'Insira seu email' }]}
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
                    <Form.Item
                        label="Confirme sua senha"
                        name="confirmPassword"
                        dependencies={["password"]}
                        rules={[
                            { required: true, message: 'Insira sua senha' },
                            ({getFieldValue})=>({
                                validator(_, value){
                                    return(!value || getFieldValue('password') === value ?
                                    Promise.resolve()
                                    : Promise.reject(new Error("As senhas não coincidem")));
                                }
                            })
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Cadastrar-se
                        </Button>
                        <Button type="link">
                            <Link to="/">
                                Logar
                            </Link>
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </SingUpLayout>
    </MainLayout>
    );
}
 
export default SingUpPage;