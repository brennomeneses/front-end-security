import { Button, Table } from "antd";
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import { ColumnsType } from "antd/lib/table/interface";
import { FunctionComponent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usersServices from "../../api/usersServices";

interface DataType {
    name: string;
    email: string;
}
 
const ShowUsers: FunctionComponent = () => {

    const [loadingFetch, setLoadingFetch] = useState<boolean>(true);
    const [usersData, setUsersData] = useState<IFormSubmission[] | undefined>(undefined);

    useEffect(()=>{
        const token = sessionStorage.getItem("@app:Token");
        if(token){
            usersServices.getUsers(token).then(response => {
                setUsersData(response.data);
                return setLoadingFetch(!loadingFetch)
            }).catch(error => useNavigate()("/"));
        }
    },[]);

    const columns: ColumnsType<IFormSubmission> = [
        {
            title: "Nome",
            dataIndex: "name",
            key: "name"
        },{
            title: "E-mail",
            dataIndex: "email",
            key: "email"
        },{
            title: "",
            dataIndex: "id",
            render: (element)=> {
                return (
                <>
                    <Link to={`/users/${element}`}>
                        <Button size="large" type="link">
                            <EditOutlined />
                        </Button>
                    </Link>
                    <Button size="large" type="link" danger>
                        <CloseOutlined />
                    </Button>
                </>)
            }
        }
    ];

    return (
    <>
        <Table
            loading={loadingFetch}
            dataSource={usersData}
            columns={columns}
            pagination={false}
        />
    </>
    );
}
 
export default ShowUsers;