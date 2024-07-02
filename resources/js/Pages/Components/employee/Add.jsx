import { Form, Input, Modal, Select } from "antd";

import FooterButton from "../Shared/FooterButton";
import AdminLayout from "@/Layouts/Admin/AdminLayout";
import TopHeader from "../Shared/TopHeader";
import { router } from "@inertiajs/react";

const Add = ({ taxes, branches, onSave }) => {
    const saveHandler = (data) => {
        router.post("/employees", data, {
            onSuccess: () => {
                Modal.success({
                    title: "Employee",
                    content: "Successfuly Registered",
                    onOk() {
                        router.get("/employees");
                    },
                });
            },
        });
    };
    return (
        <AdminLayout>
            <TopHeader title="Add New Employee" />
            <Form layout="vertical" onFinish={saveHandler}>
                <div className="grid grid-cols-2 gap-9">
                    <div>
                        <Form.Item label="Code" name="code">
                            <Input placeholder="Enter Code " />
                        </Form.Item>
                        <Form.Item label="First Name" name="first_name">
                            <Input placeholder="Enter First Name Example abebe" />
                        </Form.Item>
                        <Form.Item label="Middle Name" name="middle_name">
                            <Input placeholder="Enter Middle Name example demeke" />
                        </Form.Item>
                        <Form.Item label="Last Name" name="last_name">
                            <Input placeholder="Enter Last Name example demeke" />
                        </Form.Item>
                        <Form.Item label="Date of Birth" name="dob">
                            <Input placeholder="Enter Date of Birth" />
                        </Form.Item>
                        <Form.Item label="Martial Status" name="martial_status">
                            <Select placeholder="Select Martial Status">
                                <Select.Option value="Single">
                                    Single
                                </Select.Option>
                                <Select.Option value="Married">
                                    Married
                                </Select.Option>
                                <Select.Option value="Divorce">
                                    Divorce
                                </Select.Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div>
                        <Form.Item label="Gender" name="gender">
                            <Select placeholder="Select Gender">
                                <Select.Option value="Male">Male</Select.Option>
                                <Select.Option value="Female">
                                    Female
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Nationality" name="nationality">
                            <Select placeholder="Select Nationality">
                                <Select.Option value="Ethiopia">
                                    Ethiopia
                                </Select.Option>
                                <Select.Option value="Female">
                                    Sudan
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Category" name="category">
                            <Input placeholder="Enter Category" />
                        </Form.Item>

                        <Form.Item label="Tax" name="tax_id">
                            <Select placeholder="Select Tax">
                                {taxes.map((tax) => {
                                    return (
                                        <Select.Option value={tax.id}>
                                            {tax.name}
                                        </Select.Option>
                                    );
                                })}
                            </Select>
                        </Form.Item>

                        <Form.Item label="Branch" name="branch_id">
                            <Select placeholder="Select Branch">
                                {branches.map((branch) => {
                                    return (
                                        <Select.Option value={branch.id}>
                                            {branch.name}
                                        </Select.Option>
                                    );
                                })}
                            </Select>
                        </Form.Item>
                    </div>
                </div>

                <div className="mt-6 mb-20">
                    <FooterButton />
                </div>
            </Form>
        </AdminLayout>
    );
};

export default Add;
