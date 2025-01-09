import Button from "../../component/Button/Button";
import Card from "../../component/Card/Card";
import Input from "../../component/Input/Input";
import FlexBox from "../../component/Layout/FlexBox";
import Page from "../../component/Layout/Page";
import Text from "../../component/Text/Text";

function Join() {
    return (
        <>
            <Page>
                <Text>JOIN</Text>
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
