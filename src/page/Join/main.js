import Button from "../../component/Button/Button";
import Card from "../../component/Card/Card";
import Input from "../../component/Input/Input";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";

function Join() {
    return (
        <>
            <Page>
                <FlexBox>
                    <Card>
                        <FlexBox gap="10px">
                            <Input placeholder="ID" />
                            <Button>Check ID</Button>
                            <Input placeholder="PW" />
                            <Input placeholder="PW" />
                            <Input placeholder="NAME" />
                            <Input placeholder="PHONE" />
                            <Input placeholder="EMAIL" />
                            <Button>Sign up</Button>
                        </FlexBox>
                    </Card>
                </FlexBox>
            </Page>
        </>
    );
}
export default Join;
