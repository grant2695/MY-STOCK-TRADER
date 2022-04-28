import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark" style={{background:"white", padding:"7px"}}>

                <ul>
                    <li>
                        <Link className="black-text" 
                            to="/" 
                            style = {{ fontFamily: "monospace"}}
                        >
                        Virtual Stock Trading
                        </Link>
                    </li>
                    <li>
                        <Link className="col s3 black-text "
                            to="/Dashboard"
                            style={{
                                color: "grey",
                                fontFamily: "monospace",
                                fontWeight: "bold",
                                padding: "16dp"
                            }}
                            >
                                Portfolio
                            </Link>
                    </li>
                    <li>
                        <Link className="col s3 black-text "
                            to="/History"
                            style={{
                                color: "grey",
                                fontFamily: "monospace",
                                fontWeight: "bold",
                                padding: "16dp"
                            }}
                            >
                                Transactions
                            </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;