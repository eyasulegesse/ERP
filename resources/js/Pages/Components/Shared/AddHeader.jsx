import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
const AddHeader = ({ title, onAdd }) => {
    return (
        <header className="bg-white shadow mb-mediumSpace">
            <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-[#219C90] uppercase">
                    {title}
                </h1>
                <Button
                    onClick={onAdd}
                    className="flex justify-between bg-appfirst-0 rounded-lg hover:bg-appsecond-0"
                >
                    <PlusOutlined
                        style={{
                            color: "white",
                            paddingTop: 5,
                            marginRight: 5,
                        }}
                    />
                    <h3 className="text-appWhite-0">Add New {title}</h3>
                </Button>
            </div>
        </header>
    );
};

export default AddHeader;
