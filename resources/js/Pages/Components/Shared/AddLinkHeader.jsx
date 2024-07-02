import { PlusOutlined } from "@ant-design/icons";
import { Link } from "@inertiajs/react";

const AddLinkHeader = ({ title, url }) => {
    return (
        <header className="bg-white shadow mb-mediumSpace">
            <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-[#219C90] uppercase">
                    {title}
                </h1>
                <Link href={url} as="button">
                    <div className="flex justify-between px-6 py-2 bg-appfirst-0 rounded-lg hover:bg-appsecond-0">
                        <PlusOutlined
                            style={{
                                color: "white",
                                paddingTop: 5,
                                marginRight: 5,
                            }}
                        />
                        <h3 className="text-appWhite-0">Add New {title}</h3>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default AddLinkHeader;
