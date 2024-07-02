import AdminLayout from "@/Layouts/Admin/AdminLayout";
import AddHeader from "../Components/Shared/AddHeader";
import List from "../Components/branch/List";
import { useSelector, useDispatch } from "react-redux";
import { openAddModal, closeAddModal } from "@/features/Modalslice";
import { Modal } from "antd";
import Create from "../Components/branch/Create";
import { router } from "@inertiajs/react";
const Branch = ({ branch }) => {
    const addModal = useSelector((state) => state.modal.addModal);
    const dispatch = useDispatch();
    const saveHandler = (data) => {
        router.post("/branch", data, {
            onSuccess: () => {
                dispatch(closeAddModal());
            },
        });
    };
    return (
        <AdminLayout>
            <AddHeader title="Branch" onAdd={() => dispatch(openAddModal())} />
            <Modal
                open={addModal}
                title="Add Branch"
                onCancel={() => dispatch(closeAddModal())}
                footer=""
            >
                <Create onSave={saveHandler} />
            </Modal>
            <List branch={branch} />
        </AdminLayout>
    );
};

export default Branch;
