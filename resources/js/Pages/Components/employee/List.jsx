import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";

const List = ({ employees }) => {
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
        },

        {
            title: "First Name",
            dataIndex: "first_name",
            key: "first_name",
        },
        {
            title: "Middle Name",
            dataIndex: "middle_name",
            key: "middle_name",
        },
        {
            title: "Last Name",
            dataIndex: "last_name",
            key: "last_name",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
        },
        {
            title: "Nationality",
            dataIndex: "nationality",
            key: "nationality",
        },
        {
            title: "Action",
            Icon: <EditOutlined />,
            render: (record) => {
                return (
                    <>
                        <DeleteOutlined
                            style={{ color: "red", paddingRight: 4 }}
                        />
                        <EditOutlined />
                    </>
                );
            },
        },
    ];

    return <Table columns={columns} dataSource={employees} />;
};

export default List;
