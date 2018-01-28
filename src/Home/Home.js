import React, { Component } from 'react';
import './Home.css';
import NavBar from "../NavBar/NavBar";
import HeaderBar from "../HeaderBar/HeaderBar";

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            selected: 2
        }
    }

    setSelected = (idx) => {
        this.setState({
            selected: idx
        })
    };

    recycle = () => {

    };

    renderPersonalStats = () => {
        return <div>personal stats</div>
    };

    renderTeamStats = () => {
        return <div>team stats</div>
    };

    renderRecycle = () => {
        return <div className="Recycle">
            <button className="Recycle-button"
                    onClick={() => {this.recycle()}}
                    onKeyDown={(e) => { if (e.keyCode === 13) this.recycle(); }}
            >HELP SAVE THE EARTH</button>
        </div>
    };

    renderRewards = () => {
        return <div className="Recycle">
            <span className="Recycle-title">Logo</span>
        </div>
    };

    renderAccount = () => {
        return <div className="Recycle">
            <div className="Recycle-title">
                <img className="Recycle-avatar" src={require('./avatar.svg')} />
            </div>
            <div className="Recycle-display-name">
                <span className="Recycle-name">Jane Doe</span>
                <img className="Recycle-edit" src={require('./edit.svg')} />
            </div>
            <div className="Recycle-controls">
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
