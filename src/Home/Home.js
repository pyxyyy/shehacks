import React, { Component } from 'react';
import './Home.css';
import NavBar from "../NavBar/NavBar";
import HeaderBar from "../HeaderBar/HeaderBar";

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            selected: 2,
            recycling: false
        }
    }

    setSelected = (idx) => {
        this.setState({
            selected: idx
        })
    };

    renderPersonalStats = () => {
        return <div>personal stats</div>
    };

    renderTeamStats = () => {
        return <div>team stats</div>
    };

    recycle = () => {
        // backend call goes here
        // call `this.setState({ recycling: false })` on a successful response
    };
    renderRecycle = () => {
        if (this.state.recycling) {
            return (
                <div className="Recycle">
                    <div className="spinner">
                        <div className="dot1" />
                        <div className="dot2" />
                    </div>
                    <span className="Recycle-text">Hold on while we figure out <br/>the right bin for your item. We got this.</span>
                </div>
            );
        }
        return (
            <div className="Recycle">
                <img className="Recycle-earth" src={require('./earth.svg')} />
                <span className="Recycle-text">Go on, start saving the earth.</span>
                <button className="Recycle-button"
                        onClick={() => {
                            this.setState({recycling: true});
                            this.recycle();
                        }}
                >RECYCLE SOMETHING</button>
            </div>
        );
    };

    renderRewards = () => {
        return <div className="Recycle">
            <span className="Recycle-title">Logo</span>
        </div>
    };

    renderAccount = () => {
        return <div className="Account">
            <div className="Account-title">
                <img className="Account-avatar" src={require('./avatar.svg')} />
            </div>
            <div className="Account-display-name">
                <span className="Account-name">Jane Doe</span>
                <img className="Account-edit" src={require('./edit.svg')} />
            </div>
            <div className="Account-controls">
                <span></span>
                <span>Settings</span>
                <span>Support</span>
                <span>Logout</span>
            </div>

        </div>
    };

    renderPage = () => {
        if (this.state.selected === 0)
            return this.renderPersonalStats();
        else if (this.state.selected === 1)
            return this.renderTeamStats();
        else if (this.state.selected === 2)
            return this.renderRecycle();
        else if (this.state.selected === 3)
            return this.renderRewards();
        else
            return this.renderAccount();
    };

    render() {
        return (
            <div className="Home">
                <HeaderBar/>
                {this.renderPage()}
                <NavBar setSelected={this.setSelected} selected={this.state.selected}/>
            </div>
        );
    }
}

export default Home;
