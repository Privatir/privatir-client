import React from 'react'
import './signup.scss'
// Material UI
import Card from "@material/react-card";
import { Cell, Row } from '@material/react-layout-grid';
import TextField, { HelperText, Input } from '@material/react-text-field';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
// React Router
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, margin: `1rem auto` }}>
            <svg width="50" height="50"
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <Link to="/">
                    <image xlinkHref="https://s3.amazonaws.com/privatir.com/privatir-shortform.svg" height="50" width="50" />
                </Link>
            </svg>
        </div>
    )
}

class SignUp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    handleActiveIndexUpdate = (activeIndex) => {
        this.setState({ activeIndex })
    }

    render() {
        return (
            <Row>
                <Cell style={{ display: `flex`, marginTop: `5rem` }} columns={6}>
                    <Card style={{ width: `700px`, margin: `auto`, padding: `1rem` }}>
                        <Logo />
                        <TabBar
                            activeIndex={this.state.activeIndex}
                            handleActiveIndexUpdate={this.handleActiveIndexUpdate}
                        >
                            <Tab>
                                <span className='mdc-tab__text-label'>Step 1.</span>
                            </Tab>
                            <Tab>
                                <span className='mdc-tab__text-label'>Step 2.</span>
                            </Tab>
                            <Tab>
                                <span className='mdc-tab__text-label'>Step 3.</span>
                            </Tab>
                        </TabBar>
                        {
                            this.state.activeIndex === 0 && <div>
                                <h1>Step One</h1>
                            </div>

                        }
                        {
                            this.state.activeIndex === 1 && <div>
                                <h1>Step Two</h1>
                            </div>
                        }
                        {
                            this.state.activeIndex === 2 && <div>
                                <h1>Step Three</h1>
                            </div>
                        }


                    </Card>
                </Cell>
            </Row>
        )
    }
}

export default SignUp