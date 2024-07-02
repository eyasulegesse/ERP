import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";

const List = ({ customers }) => {
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
            title: "Trade Name",
            dataIndex: "trade_name",
            key: "trade_name",
        },
        {
            title: "Tax",
            dataIndex: ["tax", "name"],
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

    return <Table columns={columns} dataSource={customers} />;
};

export default List;
