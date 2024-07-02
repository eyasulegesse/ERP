import AdminLayout from "@/Layouts/Admin/AdminLayout";
import AddHeader from "../Components/Shared/AddHeader";
import { useSelector, useDispatch } from "react-redux";
import { openAddModal, closeAddModal } from "@/features/Modalslice";
import { Modal } from "antd";
import List from "../Components/UOM/List";
import Create from "../Components/UOM/Create";
import { router } from "@inertiajs/react";
const UOM = ({ uom }) => {
    const addModal = useSelector((state) => state.modal.addModal);
    const dispatch = useDispatch();
    const saveHandler = (data) => {
        router.post("/uom", data, {
            onSuccess: () => {
                dispatch(closeAddModal());
                Modal.success({
                    title: "Unit of Measurement",
                    content: "Successfuly Saved",
                });
            },
        });
    };
    return (
        <AdminLayout>
            <AddHeader title="UOM" onAdd={() => dispatch(openAddModal())} />
            <Modal
                footer=""
                title="Add UOM"
                open={addModal}
                onCancel={() => dispatch(closeAddModal())}
            >
                <Create onSave={saveHandler} />
            </Modal>
            <List uom={uom} />
        </AdminLayout>
    );
};

export default UOM;
