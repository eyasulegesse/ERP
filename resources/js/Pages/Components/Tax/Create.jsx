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
                label="Tax Name"
                name="name"
                rules={[{ required: true, message: "Name Field is required" }]}
            >
                <Input placeholder="Enter Tax Name" />
            </Form.Item>
            <Form.Item
                label="Rate"
                name="rate"
                rules={[
                    { required: true, message: "Tax Rate Field is required" },
                ]}
            >
                <InputNumber placeholder="Enter Tax Rate" className="w-full" />
            </Form.Item>
            <FooterButton onSubmit={onFinish} onReset={onReset} />
        </Form>
    );
};

export default Create;
