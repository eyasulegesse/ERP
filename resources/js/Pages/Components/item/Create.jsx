import { Button, Form, Input, InputNumber, Select } from "antd";
import FooterButton from "../Shared/FooterButton";

const Create = ({ onSave, UOM, Category, Taxes }) => {
    const { form } = Form.useForm();
    const onFinish = (values) => {
        onSave(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    return (
        <Form form={form} onFinish={onFinish} layout="vertical">
            <div className="grid grid-cols-2 gap-8 mt-10">
                <div>
                    <Form.Item
                        label="Item Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Item Name Field is required",
                            },
                        ]}
                    >
                        <Input placeholder="Enter Item Name" />
                    </Form.Item>
                    <Form.Item
                        label="Item Code"
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: "Item code Field is required",
                            },
                        ]}
                    >
                        <Input placeholder="Enter Item Code" />
                    </Form.Item>
                    <Form.Item label="Unit of Measurement" name="uom_id">
                        <Select placeholder="Select Unit of Measurement">
                            {UOM.map((uom) => {
                                return (
                                    <Select.Option value={uom.id}>
                                        {uom.name}
                                    </Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                </div>
                <div>
                    <Form.Item label="Category" name="category_id">
                        <Select placeholder="Select category">
                            {Category.map((category) => {
                                return (
                                    <Select.Option value={category.id}>
                                        {category.name}
                                    </Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item label="TAX" name="tax_id">
                        <Select placeholder="Select TAX">
                            {Taxes.map((tax) => {
                                return (
                                    <Select.Option value={tax.id}>
                                        {tax.name}
                                    </Select.Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Cost"
                        name="cost"
                        rules={[
                            {
                                required: true,
                                message: "Item Cost Field is required",
                            },
                        ]}
                    >
                        <InputNumber
                            placeholder="Enter Cost"
                            className="w-full"
                        />
                    </Form.Item>
                </div>
            </div>

            <FooterButton onSubmit={onFinish} onReset={onReset} />
        </Form>
    );
};

export default Create;
