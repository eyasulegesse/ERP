import AdminLayout from "@/Layouts/Admin/AdminLayout";
import AddLinkHeader from "../Components/Shared/AddLinkHeader";
import { useSelector, useDispatch } from "react-redux";
import { openAddModal, closeAddModal } from "@/features/Modalslice";
import AddHeader from "../Components/Shared/AddHeader";
import { Modal } from "antd";
import Add from "../Components/supplier/Add";
import { router } from "@inertiajs/react";
import List from "../Components/supplier/List";
const Supplier = ({ supplier, taxes }) => {
    const addModal = useSelector((state) => state.modal.addModal);
    const disptach = useDispatch();

    const saveHandler = (data) => {
        router.post("/supplier", data, {
            onSuccess: () => {
                disptach(closeAddModal());
                Modal.success({
                    title: "Supplier",
                    content: "Successfully Registered",
                });
            },
        });
    };
    return (
        <AdminLayout>
            <AddHeader
                title="Supplier"
                onAdd={() => disptach(openAddModal())}
            />
            <Modal
                open={addModal}
                title="Add New Supplier"
                onCancel={() => disptach(closeAddModal())}
                footer=""
            >
                <Add taxes={taxes} onSave={saveHandler} />
            </Modal>
            <List supplier={supplier} />
        </AdminLayout>
    );
};

export default Supplier;
