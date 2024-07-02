import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";

const List = ({ tax }) => {
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Tax Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Tax Rate",
            dataIndex: "rate",
            key: "rate",
        },

        {
            title: "Action",
            Icon: <EditOutlined />,
            render: (record) => {
                return (
                    <>
                        <EditOutlined />
                        <DeleteOutlined
                            style={{ color: "red", marginLeft: 6 }}
                        />
                    </>
                );
            },
        },
    ];
    return <Table columns={columns} dataSource={tax} />;
};

export default List;
