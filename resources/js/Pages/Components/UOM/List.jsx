import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";

const List = ({ uom }) => {
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "UOM Name",
            dataIndex: "name",
            key: "name",
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
    return <Table columns={columns} dataSource={uom} />;
};

export default List;
