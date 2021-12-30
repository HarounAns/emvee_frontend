import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap'
import React, { useState } from 'react'

const PASSWORD = 'BringTheHeat';

export default function LoginPage({ setUnlocked }) {
    const [password, setPassword] = useState('')
    const [invalidPassword, setInvalidPassword] = useState(false)

    const handleChange = (e) => {
        setInvalidPassword(false);

        const { value } = e.target;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== PASSWORD) {
            setInvalidPassword(true);
            return
        }

        setUnlocked(true);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder="********"
                    />
                </FormGroup>
                {invalidPassword && <p style={{ color: 'red' }}>Incorrect Password</p>}
                <Button>Enter</Button>
            </Form>
        </Container>
    );
}
