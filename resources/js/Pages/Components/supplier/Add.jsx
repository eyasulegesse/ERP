import { Form, Input, Select } from "antd";

import FooterButton from "../Shared/FooterButton";

const Add = ({ taxes, onSave }) => {
    const saveHandler = (data) => {
        onSave(data);
    };
    return (
        <Form layout="vertical" onFinish={saveHandler}>
            <div>
                <Form.Item label="Code" name="code">
                    <Input placeholder="Enter Code" />
                </Form.Item>
                <Form.Item label="Trade Name" name="trade_name">
                    <Input placeholder="Enter Trade Name" />
                </Form.Item>
                <Form.Item label="TIN" name="tin">
                    <Input placeholder="Enter TIN" />
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
            </div>

            <div className=" mt-6">
                <FooterButton />
            </div>
        </Form>
    );
};

export default Add;
