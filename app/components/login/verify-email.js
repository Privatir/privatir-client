import React, { Component } from 'react'
import { Cell, Row } from '@material/react-layout-grid'
import TextField, { HelperText, Input } from '@material/react-text-field'
import { Button } from '@material/react-button'
import Card from "@material/react-card"
import './login.scss';

class VerifyEmail extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            confirmation: ``
        }
    }

    render() {
        return (
            <h1>Check your email!</h1>
        )
    }
}

export default VerifyEmail