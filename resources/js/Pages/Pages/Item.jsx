import AdminLayout from "@/Layouts/Admin/AdminLayout";
import AddHeader from "../Components/Shared/AddHeader";
import List from "../Components/item/List";
import { useSelector, useDispatch } from "react-redux";
import { openAddModal, closeAddModal } from "@/features/Modalslice";
import { Modal } from "antd";
import Create from "../Components/item/Create";
import { router } from "@inertiajs/react";
const Item = ({ UOM, Category, Taxes, items }) => {
    const addModal = useSelector((state) => state.modal.addModal);
    const dispatch = useDispatch();
    const saveHandler = (data) => {
        router.post("/item", data, {
            onSuccess: () => {
                dispatch(closeAddModal());
                Modal.success({
                    title: "Item",
                    content: "Successfuly Saved",
                });
            },
        });
    };
    return (
        <AdminLayout>
            <AddHeader title="Item" onAdd={() => dispatch(openAddModal())} />
            <Modal
                open={addModal}
                footer=""
                title="Add New Item"
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
            <List items={items} />
        </AdminLayout>
    );
};

export default Item;
