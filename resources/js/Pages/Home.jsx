import AdminLayout from "@/Layouts/Admin/AdminLayout";

const Home = () => {
    return (
        <AdminLayout>
            <header className="bg-white shadow mb-mediumSpace">
                <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-[#219C90] uppercase">
                        Dashboard
                    </h1>
                </div>
            </header>
        </AdminLayout>
    );
};

export default Home;
