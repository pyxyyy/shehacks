import React, { Component } from 'react';
import './Home.css';
import NavBar from "../NavBar/NavBar";
import HeaderBar from "../HeaderBar/HeaderBar";

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="Home">
                <HeaderBar/>
                <NavBar/>
            </div>
        );
    }
}

export default Home;
