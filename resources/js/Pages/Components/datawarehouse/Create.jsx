import { Button, Form, Input, Select } from "antd";
import FooterButton from "../Shared/FooterButton";

const Create = ({ onSave, branch }) => {
    const { form } = Form.useForm();
    const onFinish = (values) => {
        onSave(values);
    };
    const onReset = () => {
        form.resetFields();
    };
    return (
        <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
                label="Warehouse Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Warehouse Name Field is required",
                    },
                ]}
            >
                <Input placeholder="Enter Warehouse Name" />
            </Form.Item>
            <Form.Item label="Branch" name="branch_id">
                <Select placeholder="Select Branch">
                    {branch.map((branch) => {
                        return (
                            <Select.Option value={branch.id}>
                                {branch.name}
                            </Select.Option>
                        );
                    })}
                </Select>
            </Form.Item>

            <FooterButton onSubmit={onFinish} onReset={onReset} />
        </Form>
    );
};

export default Create;
