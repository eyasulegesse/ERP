import AdminLayout from "@/Layouts/Admin/AdminLayout";
import AddHeader from "../Components/Shared/AddHeader";
import { useSelector, useDispatch } from "react-redux";
import { openAddModal, closeAddModal } from "@/features/Modalslice";
import { Modal } from "antd";
import List from "../Components/Tax/List";
import Create from "../Components/Tax/Create";
import { router } from "@inertiajs/react";
const Tax = ({ tax }) => {
    const addModal = useSelector((state) => state.modal.addModal);
    const dispatch = useDispatch();
    const saveHandler = (data) => {
        router.post("/tax", data, {
            onSuccess: () => {
                dispatch(closeAddModal());
                Modal.success({
                    title: "Tax",
                    content: "Successfuly Saved",
                });
            },
        });
    };
    return (
        <AdminLayout>
            <AddHeader title="Tax" onAdd={() => dispatch(openAddModal())} />
            <Modal
                footer=""
                title="Add Tax"
                open={addModal}
                onCancel={() => dispatch(closeAddModal())}
            >
                <Create onSave={saveHandler} />
            </Modal>
            <List tax={tax} />
        </AdminLayout>
    );
};

export default Tax;
