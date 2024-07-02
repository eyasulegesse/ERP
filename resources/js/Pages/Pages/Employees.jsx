import AdminLayout from "@/Layouts/Admin/AdminLayout";

import AddLinkHeader from "../Components/Shared/AddLinkHeader";
import List from "../Components/employee/List";

const Employees = ({ employees }) => {
    return (
        <AdminLayout>
            <AddLinkHeader title="Employees" url="/employee_add_form" />
            <List employees={employees} />
        </AdminLayout>
    );
};

export default Employees;
