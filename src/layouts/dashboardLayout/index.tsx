import { Button, Layout } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { FunctionComponent } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { LeftHeader, RightHeader, SiteLayoutContent } from "./style";
 
const DashboardLayout: FunctionComponent = () => {
    const { Header, Content, Footer } = Layout;
    const navigate = useNavigate();

    function logout() {
        sessionStorage.removeItem("@app:Token");
        navigate("/");
    }

    return (
    <Layout>
        <Header>
            <LeftHeader>
                <Link to="/">
                    SISTEMA SEGURO
                </Link>
            </LeftHeader>
            <RightHeader>
                <Button
                    type="primary"
                    danger
                    icon={<LogoutOutlined />}
                    onClick={logout}
                >
                    Logout
                </Button>
            </RightHeader>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <SiteLayoutContent>
                <Outlet/>
            </SiteLayoutContent>
        </Content>
        <Footer>
            Um trabalho do grupo: Brenno Araujo, Eduardo Ribeiro e Anderson Neumann.
        </Footer>
    </Layout>
    );
}
 
export default DashboardLayout;