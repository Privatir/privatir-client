import { Cell, Row } from '@material/react-layout-grid';
import { Link } from "react-router-dom";
import React from 'react';

const Footer = () => {

    return (
        <Row style={{ display: `flex`, justifyContent: `center`, margin: `5rem auto`, width: `700px` }}>
            <Cell columns={5} style={{ display: `flex`, justifyContent: `space-around`, flex: `3 1 300px` }}>
                © 2019 Privatir, Inc.
        <Link to="/">
                    Terms
        </Link>
                <Link to="/">
                    Privacy
        </Link>
            </Cell>
            <Cell columns={2} style={{ display: `flex`, justifyContent: `space-around`, flex: `1 1 100px` }}>
                <svg width="50" height="50"
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <a href="/">
                        <image xlinkHref="https://s3.amazonaws.com/privatir.com/privatir-shortform.svg" height="50" width="50" />
                    </a>
                </svg>
            </Cell>
            <Cell columns={5} style={{ display: `flex`, justifyContent: `space-around`, flex: `3 1 300px` }}>
                <Link to="/contact">
                    Contact Us
        </Link>
                <Link to="/pricing">
                    Pricing
        </Link>
                <Link to="/api">
                    API
        </Link>
            </Cell>
        </Row>
    )
}

export default Footer