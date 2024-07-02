import AdminLayout from "@/Layouts/Admin/AdminLayout";
import AddHeader from "../Components/Shared/AddHeader";
import List from "../Components/category/List";
import { useSelector, useDispatch } from "react-redux";
import { openAddModal, closeAddModal } from "@/features/Modalslice";
import { Modal } from "antd";
import Create from "../Components/category/Create";
import { router } from "@inertiajs/react";
const Branch = ({ category }) => {
    const addModal = useSelector((state) => state.modal.addModal);
    const dispatch = useDispatch();
    const saveHandler = (data) => {
        router.post("/category", data, {
            onSuccess: () => {
                dispatch(closeAddModal());
                Modal.success({
                    title: "Category",
                    content: "Successfuly Saved",
                });
            },
        });
    };
    return (
        <AdminLayout>
            <AddHeader
                title="Category"
                onAdd={() => dispatch(openAddModal())}
            />
            <Modal
                open={addModal}
                title="Add Category"
                onCancel={() => dispatch(closeAddModal())}
                footer=""
            >
                <Create onSave={saveHandler} />
            </Modal>
            <List category={category} />
        </AdminLayout>
    );
};

export default Branch;
