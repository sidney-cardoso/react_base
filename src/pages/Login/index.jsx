import React from "react";
import { Title, Paragraph } from "./styled";

import { Container } from "../../styles/global";

function Login() {
    return (
        <Container>
            <Title>
                Login
                <small> page</small>
            </Title>
            <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
            <button type="button">Send</button>
        </Container>
    )
}
export default Login