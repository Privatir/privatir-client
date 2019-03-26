import React, { Component } from 'react'
import { Cell, Row } from '@material/react-layout-grid'
import TextField, { HelperText, Input } from '@material/react-text-field'
import { Button } from '@material/react-button'
import { Link } from 'react-router-dom'
import Card from "@material/react-card"
import './login.scss';
import SignUp from '../signup/signup';

import { Route } from "react-router-dom";
import EnterEmail from './enter-email';

const CreateWorkspaceHeadline = (props) => {
    return (
        <div style={{ display: `flex`, justifyContent: `center` }}>
            <h1 style={{ alignSelf: `left`, margin: `0 1rem` }}>{props.text}</h1>
        </div>
    )
}

class CreateWorkspace extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: ``
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email } = this.state;
        const { actions } = this.props;
        if (email) {
            actions.verifyEmail({ email: email });
        }
    }



    render() {
        return (
            <Row>
                <Cell style={{ display: `flex`, marginTop: `5rem` }} columns={6}>
                    <Card style={{ width: `600px`, margin: `auto` }}>
                        {
                            this.props.location.hash === `#email` &&
                            <EnterEmail />
                        }
                        {
                            this.props.location.hash === `#verifyEmail` && <VerifyEmail />
                        }
                    </Card>
                </Cell>

            </Row >
        )
    }
}

const VerifyEmail = () => {
    return (
        <CreateWorkspaceHeadline text={`Enter verification code below`} />
    )
}

export default CreateWorkspace

