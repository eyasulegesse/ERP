import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
const TopHeader = ({ title }) => {
    return (
        <header className="bg-white shadow mb-mediumSpace">
            <div className=" mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-[#219C90] uppercase">
                    {title}
                </h1>
            </div>
        </header>
    );
};

export default TopHeader;
