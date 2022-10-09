import React from "react";
import { useDispatch } from "react-redux";

import { Title, Paragraph } from "./styled";
import { Container } from "../../styles/global";

function Login() {
    const dispatch = useDispatch()
    const handleClick = (event) => {
        event.preventDefault()

        dispatch({
            type: 'CLICKED_BUTTON'
        })
    }
    return (
        <Container>
            <Title>
                Login
                <small> page</small>
            </Title>
            <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
            <button type="button" onClick={handleClick}>Send</button>
        </Container>
    )
}
export default Login