import AdminLayout from "@/Layouts/Admin/AdminLayout";
import AddHeader from "../Components/Shared/AddHeader";
import List from "../Components/organization/List";
import { useSelector, useDispatch } from "react-redux";
import { openAddModal, closeAddModal } from "@/features/Modalslice";
import { Modal } from "antd";
import Create from "../Components/organization/Create";
import { router } from "@inertiajs/react";
const Organization = ({ organization }) => {
    const addModal = useSelector((state) => state.modal.addModal);
    const dispatch = useDispatch();
    const saveHandler = (organization) => {
        router.post("/organization", datawarehouse, {
            onSuccess: () => {
                dispatch(closeAddModal());
            },
        });
    };
    return (
        <AdminLayout>
            <AddHeader
                title="Organization"
                onAdd={() => dispatch(openAddModal())}
            />
            <Modal
                open={addModal}
                title="Add Organization"
                onCancel={() => dispatch(closeAddModal())}
                footer=""
            >
                <Create onSave={saveHandler} branch={branch} />
            </Modal>
            <List organization={organization} />
        </AdminLayout>
    );
};

export default Organization;
