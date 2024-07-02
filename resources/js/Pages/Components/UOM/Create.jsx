import { Button, Form, Input, InputNumber } from "antd";
import FooterButton from "../Shared/FooterButton";
import TextArea from "antd/es/input/TextArea";

const Create = ({ onSave }) => {
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
                label="UOM Name"
                name="name"
                rules={[{ required: true, message: "Name Field is required" }]}
            >
                <Input placeholder="Enter UOM Name" />
            </Form.Item>

            <FooterButton onSubmit={onFinish} onReset={onReset} />
        </Form>
    );
};

export default Create;
