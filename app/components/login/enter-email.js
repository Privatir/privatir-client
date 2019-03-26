import React, { Component } from 'react'
import { Cell, Row } from '@material/react-layout-grid'
import TextField, { HelperText, Input } from '@material/react-text-field'
import { verifyEmail } from '../../actions/sessions';
import Button from '@material/react-button'
import Card from "@material/react-card"
import { Link } from 'react-router-dom'
import './login.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class EnterEmail extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            email: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleBlur(field) {
        return function (evt) {
            this.setState({
                touched: { ...this.state.touched, [field]: true }
            })
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        const { email } = this.state;
        const { actions } = this.props;
        console.log("Email verified: ", this.props.isEmailVerified)
        console.log("Status msg: ", this.props.statusText)
        if (email) {
            actions.verifyEmail(email)
        }
        console.log("Email verified: ", this.props.isEmailVerified)
        console.log("Status msg: ", this.props.statusText)
    }

    render() {
        return (
            <div>
                <form style={{ display: `flex`, flexDirection: `column`, margin: `1rem 1rem` }}
                    className="signin" id="emailForm" onSubmit={this.handleSubmit}>
                    <h1>Enter your email below.</h1>
                    <TextField
                        label='Please enter your email address.'
                        helperText={<HelperText>Please enter your email.</HelperText>}
                    ><Input
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required={true}
                        />
                    </TextField>

                    <Button form={`emailForm`} raised={true}>
                        Next
                    </Button>
                </form>
            </div>

        )
    }
}
export default connect(
    (state) => {
        return ({
            isEmailVerified: state.session.isEmailVerified,
            statusText: state.session.statusText
        });
    },
    (dispatch) => {
        return ({
            actions: bindActionCreators({ verifyEmail }, dispatch)
        });
    }
)(EnterEmail);
