import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";

const List = ({ semifineshedproduct }) => {
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Item",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Category",
            dataIndex: ["category", "name"],
            key: "category",
        },
        {
            title: "Cost",
            dataIndex: "cost",
            key: "cost",
        },
        {
            title: "Tax",
            dataIndex: ["tax", "name"],
            key: "category",
        },

        {
            title: "Action",
            Icon: <EditOutlined />,
            render: ({ record }) => {
                return (
                    <>
                        <EditOutlined />
                        <DeleteOutlined />
                    </>
                );
            },
        },
    ];
    return <Table columns={columns} dataSource={semifineshedproduct} />;
};

export default List;
