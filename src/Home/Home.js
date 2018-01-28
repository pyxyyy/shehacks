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
        return <div className="Rewards">
            <div className="Rewards-title">
                <img className="star" src={require('./star.svg')} />
            <span className="Rewards-number">302</span>
            <span className="Rewards-points">You're doing good!</span>
            </div>

            <div className="Rewards-list">
                <div className="Rewards-reward">
                        <img className="Rewards-image" src={require('./starbucks.svg')} />
                        <div className="Rewards-reward-info">
                            <span className="Rewards-reward-company">Starbucks</span>
                            <span className="Rewards-reward-description">A free drink on us</span>
                        </div>
                    <span className="Rewards-cost">300</span>
                </div>

                <div className="Rewards-reward grey">
                    <img className="Rewards-image nike" src={require('./amazon.png')} />
                    <div className="Rewards-reward-info">
                        <span className="Rewards-reward-company">Amazon</span>
                        <span className="Rewards-reward-description">Free 2-day shipping on <br/>your next online purchase</span>
                    </div>
                    <span className="Rewards-cost">1000</span>
                </div>

                <div className="Rewards-reward grey">
                    <img className="Rewards-image nike" src={require('./nike.jpg')} />
                    <div className="Rewards-reward-info">
                        <span className="Rewards-reward-company">Nike</span>
                        <span className="Rewards-reward-description">Take 10% off your <br/>next in-store purchase</span>
                    </div>
                    <span className="Rewards-cost">2500</span>
                </div>


            </div>
        </div>
    };

    renderAccount = () => {
        return <div className="Account">
            <div className="Account-title">
                <img className="Account-avatar" src={require('./avatar.svg')} />
            </div>
            <div className="Account-display-name">
                <div className="Account-me">
                    <span className="Account-name">Jane Doe</span>
                    <img className="Account-edit" src={require('./edit.svg')} />
                </div>
                <span className="Account-rank">Budding Environmentalist</span>
            </div>
            <div className="Account-controls">
                <span className="Account-control" id="a">Change Password</span>
                <span className="Account-control" id="b">Add Friends</span>
                <span className="Account-control" id="c">Form Teams</span>
                <span className="Account-control" id="d">Settings</span>
                <span className="Account-control" id="e">Support</span>
                <span className="Account-control" id="f">Logout</span>
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
