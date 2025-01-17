import React from "react";
import { Component } from "react";



class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <a className="navbar-brand" href="/"> Google Search Books</a> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/MyBooks">Saved Books</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
