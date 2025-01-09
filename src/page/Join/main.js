import Button from "../../component/Button/Button";
import Card from "../../component/Card/Card";
import Input from "../../component/Input/Input";

function Join() {
    return (
        <>
            <Card>
                <Input placeholder="ID" />
                <Button>Check ID</Button>
                <Input placeholder="PW" />
                <Input placeholder="PW" />
                <Input placeholder="NAME" />
                <Input placeholder="PHONE" />
                <Input placeholder="EMAIL" />
                <Button>Sign up</Button>
            </Card>
        </>
    );
}
export default Join;
