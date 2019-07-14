import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                    {/* <!-- Brand --> */}
                    <Link className="navbar-brand" to="/" >Navbar</Link>

                    {/* <!-- Toggler/collapsibe Button --> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    {/* <!-- Navbar links --> */}
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a> */}
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a> */}
                            </li>
                            <li className="nav-item">
                                <Link to="/create">
                                    <button type="button" className="btn btn-success font-weight-bold">Create</button>
                                </Link>
                                {/* <a className="nav-link" href="#">Link</a> */}
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}

export default Navbar
