import { Button } from "antd";

const FooterButton = ({ onReset }) => {
    return (
        <div className="flex ">
            <Button
                htmlType="submit"
                className="mr-4 bg-appfirst-0 text-appWhite-0"
            >
                Save
            </Button>
            <Button htmlType="button" onClick={() => onReset}>
                Reset
            </Button>
        </div>
    );
};

export default FooterButton;
