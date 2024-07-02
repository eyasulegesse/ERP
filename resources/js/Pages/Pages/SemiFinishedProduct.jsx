import AdminLayout from "@/Layouts/Admin/AdminLayout";
import AddHeader from "../Components/Shared/AddHeader";
import List from "../Components/semifinishedproduct/List";
import { useSelector, useDispatch } from "react-redux";
import { openAddModal, closeAddModal } from "@/features/Modalslice";
import { Modal } from "antd";
import Create from "../Components/semifinishedproduct/Create";
import { router } from "@inertiajs/react";
const SemiFinishedProduct = ({ UOM, Category, Taxes, semifineshedproduct }) => {
    const addModal = useSelector((state) => state.modal.addModal);
    const dispatch = useDispatch();
    const saveHandler = (data) => {
        router.post("/semi_finished_product", data, {
            onSuccess: () => {
                dispatch(closeAddModal());
                Modal.success({
                    title: "Semi Finished Product",
                    content: "Successfuly Saved",
                });
            },
        });
    };
    return (
        <AdminLayout>
            <AddHeader
                title="Semi Finished Product"
                onAdd={() => dispatch(openAddModal())}
            />
            <Modal
                open={addModal}
                footer=""
                title="Add New Semi Finished Product"
                onCancel={() => dispatch(closeAddModal())}
                width={1000}
            >
                <Create
                    UOM={UOM}
                    Category={Category}
                    Taxes={Taxes}
                    onSave={saveHandler}
                />
            </Modal>
            <List semifineshedproduct={semifineshedproduct} />
        </AdminLayout>
    );
};

export default SemiFinishedProduct;
