import React, { Component } from 'react'
import { Cell, Row } from '@material/react-layout-grid'
import TextField, { HelperText, Input } from '@material/react-text-field'
import Card from "@material/react-card"
import { Button } from '@material/react-button'
import { Link } from 'react-router-dom'

const SignInHeadline = () => {
    return (
        <div style={{ display: `flex`, justifyContent: `center` }}>
            <h1 style={{ alignSelf: `left`, margin: `0 1rem` }}>Sign In to your workspace</h1>
        </div>
    )
}

class LoginWorkspace extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            workspaceUrl: ''
        }
    }

    render() {
        return (
            <Row>
                <Cell style={{ display: `flex`, marginTop: `5rem` }} columns={6}>
                    <Card style={{ width: `600px`, margin: `auto` }}>
                        <div style={{ display: `flex`, margin: `50px 50px`, flexDirection: `column` }}>
                            <SignInHeadline />
                            <span style={{ textAlign: `center` }}>Enter your workspace url.</span>
                            <TextField
                                label='Workspace URL'
                                helperText={<HelperText>Please enter your email.</HelperText>}
                            ><Input
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    required={true}
                                />
                            </TextField>
                            <Button raised={true} disabled={false}>
                                Continue
                            </Button>
                            <span style={{ textAlign: `center` }}>
                                Don't know your organization workspace?
                                <div>
                                    <Link style={{ color: `#7E57C2` }} to='/get-started'>Find your workspace</Link>
                                </div>
                                <div>
                                    <span>Need help get your group started on Slack? </span>
                                    <Link to={{ pathname: `/create`, hash: `email` }}>Create a new workspace</Link>
                                </div>
                            </span>
                        </div>
                    </Card>
                </Cell>
            </Row>
        )
    }
}

export default LoginWorkspace