import AdminLayout from "@/Layouts/Admin/AdminLayout";
import AddHeader from "../Components/Shared/AddHeader";
import { useSelector, useDispatch } from "react-redux";
import { openAddModal, closeAddModal } from "@/features/Modalslice";
import { Modal } from "antd";
import { router } from "@inertiajs/react";
import Add from "../Components/customer/Add";
import List from "../Components/customer/List";
const Customers = ({ customers, taxes }) => {
    const addModal = useSelector((state) => state.modal.addModal);
    const dispatch = useDispatch();
    const saveHandler = (data) => {
        router.post("/customers", data, {
            onSuccess: () => {
                dispatch(closeAddModal());
                Modal.success({
                    title: "Customer",
                    content: "Successfully Registered",
                });
            },
        });
    };
    return (
        <AdminLayout>
            <AddHeader
                title="Customers"
                onAdd={() => dispatch(openAddModal())}
            />
            <Modal
                open={addModal}
                title="Add New Customer"
                footer=""
                onCancel={() => dispatch(closeAddModal())}
            >
                <Add taxes={taxes} onSave={saveHandler} />
            </Modal>
            <List customers={customers} />
        </AdminLayout>
    );
};

export default Customers;
