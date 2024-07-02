import AdminLayout from "@/Layouts/Admin/AdminLayout";
import AddHeader from "../Components/Shared/AddHeader";
import List from "../Components/Product/List";
import { useSelector, useDispatch } from "react-redux";
import { openAddModal, closeAddModal } from "@/features/Modalslice";
import { Modal } from "antd";
import Create from "../Components/Product/Create";
import { router } from "@inertiajs/react";
const Product = ({ UOM, Category, Taxes, products }) => {
    const addModal = useSelector((state) => state.modal.addModal);
    const dispatch = useDispatch();
    const saveHandler = (data) => {
        router.post("/product", data, {
            onSuccess: () => {
                dispatch(closeAddModal());
                Modal.success({
                    title: "Product",
                    content: "Successfuly Saved",
                });
            },
        });
    };
    return (
        <AdminLayout>
            <AddHeader title="Product" onAdd={() => dispatch(openAddModal())} />
            <Modal
                open={addModal}
                footer=""
                title="Add New Product"
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
            <List items={products} />
        </AdminLayout>
    );
};

export default Product;
