import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import { Table } from "antd";

const List = ({ datawarehouse }) => {
    console.log(datawarehouse);
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Branch",
            dataIndex: ["branch", "name"],
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

    return <Table columns={columns} dataSource={datawarehouse} />;
};

export default List;
