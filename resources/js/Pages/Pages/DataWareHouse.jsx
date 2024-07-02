import AdminLayout from "@/Layouts/Admin/AdminLayout";
import AddHeader from "../Components/Shared/AddHeader";
import List from "../Components/datawarehouse/List";
import { useSelector, useDispatch } from "react-redux";
import { openAddModal, closeAddModal } from "@/features/Modalslice";
import { Modal } from "antd";
import Create from "../Components/datawarehouse/Create";
import { router } from "@inertiajs/react";
const DataWareHouse = ({ datawarehouse, branch }) => {
    console.log(branch);
    const addModal = useSelector((state) => state.modal.addModal);
    const dispatch = useDispatch();
    const saveHandler = (datawarehouse) => {
        router.post("/datawarehouse", datawarehouse, {
            onSuccess: () => {
                dispatch(closeAddModal());
                Modal.success({
                    title: "Warehouse",
                    content: "Successfuly Saved",
                });
            },
        });
    };
    return (
        <AdminLayout>
            <AddHeader
                title="Warehouse"
                onAdd={() => dispatch(openAddModal())}
            />
            <Modal
                open={addModal}
                title="Add Warehouse"
                onCancel={() => dispatch(closeAddModal())}
                footer=""
            >
                <Create onSave={saveHandler} branch={branch} />
            </Modal>
            <List datawarehouse={datawarehouse} />
        </AdminLayout>
    );
};

export default DataWareHouse;
