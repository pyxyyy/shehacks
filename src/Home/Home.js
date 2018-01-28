import React, { Component } from 'react';
import './Home.css';
import NavBar from "../NavBar/NavBar";
import HeaderBar from "../HeaderBar/HeaderBar";
import AreaGraph from "./AreaGraph/AreaGraph";
import PieGraph from "./PieGraph/PieGraph";

class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            selected: 2,
            recycling: false,
            modal: false, props,
            points: 302
        }
    }

    setSelected = (idx) => {
        this.setState({
            selected: idx
        })
    };

    renderPersonalStats = () => {
        return <div className="Me">
            <div className="Team-buttons">
            <div className="more">
                More
                <img className="down" src={require('./down.svg')} />
            </div>
            </div>
            <span className="Team-graph-title">THIS WEEK'S BINS</span>
            <PieGraph />
            <span className="float-1">130</span>
            <span className="float-2">30</span>
            <div className="Me-legend">
                <div className="legend-group">
                    <div className="box-1" />
                    <span>Trash</span>
                </div>
                <div className="legend-group">
                    <div className="box-2" />
                    <span>Recyclables</span>
                </div>
            </div>

            <span className="Team-graph-title-2">POINTS TO NEXT RANK</span>
            <div className="bigbar">
                <div className="smallbar" />
            </div>
            <div className="Me-texts">
            <span className="Me-text">
               SPROUTING SEEDLING
            </span>
            <span className="Me-text">
                BUDDING BLOSSOM
            </span>
            </div>

            <span className="Team-graph-title-2">DID YOU KNOW?</span>
            <span className="funfact"><span className="blue"> Cut the tamper ring </span> (ring below your plastic bottle cap) before binning it. Marine animals are at risk of getting caught in them. </span>
        </div>
    };

    renderTeamStats = () => {
        return <div className="Team">
            <span className="Team-graph-title">THIS WEEK'S STATS</span>
            <AreaGraph />
            <div className="Team-legend">
                <div className="legend-group">
                    <div className="line-me" />
                    <span>Boston University</span>
                </div>
                <div className="legend-group">
                    <div className="line-them" />
                    <span>Global Average</span>
                </div>
            </div>
            <div className="Team-buttons">
                <span className="filter">
                Filter
                <img className="lightning" src={require('./filter.svg')} />
            </span>
            </div>
            <table className="Team-board">
                <tbody>
                <tr className="Team-id" id="c">
                    <td>Boston</td>
                    <td>20k</td>
                    <td>#1</td>
                </tr>
                <tr className="Team-id" id="b">
                    <td>Northeastern</td>
                    <td>15k</td>
                    <td>#4</td>
                </tr>
                <tr className="Team-id" id="a">
                    <td>Suffolk</td>
                    <td>18k</td>
                    <td>#3</td>
                </tr>
                <tr className="Team-id" id="b">
                    <td>Tufts</td>
                    <td>18k</td>
                    <td>#2</td>
                </tr>
                <tr className="Team-id" id="a">
                    <td>MIT</td>
                    <td>12k</td>
                    <td>#6</td>
                </tr>
                <tr className="Team-id" id="b">
                    <td>UMass</td>
                    <td>14k</td>
                    <td>#5</td>
                </tr>
                </tbody>
            </table>
        </div>
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

    buildModal = () => {
        return (this.state.modal)
            ? <div className="Modal" onClick={() => {this.setState({modal: false})}}>
                <span className="Modal-header">ENJOY YOUR COFFEE</span>
                <img className="coffee" src={require('./coffee.svg')} />
                <img className="barcode" src={require('./barcode.svg')} />
                <span className="Modal-text">W678-Q4J8-A209-KEMN</span>
                <div className="line" />
                <span className="Modal-small-text">Terms & Conditions apply.</span>
            </div>
            : null;
    };

    renderRewards = () => {

        const starbucksStyle = this.state.points >= 300 ? "Rewards-reward" : "Rewards-reward grey";
        const starbucksMessage = this.state.points >= 300 ? "You're doing great." : "Big changes start small.";

        return <div className="Rewards">

            <div className="Rewards-title">
                <img className="star" src={require('./star.svg')} />
                <span className="Rewards-number">{this.state.points}</span>
                <span className="Rewards-points">{starbucksMessage}</span>
            </div>

            <div className="Rewards-list">
                <div className={starbucksStyle} onClick={() => {
                    this.setState({
                        modal: true
                    });
                    this.setState({
                        points: this.state.points - 300
                    })
                }}>
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
            {this.buildModal()}
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
                <span className="Account-rank">SPROUTING SEEDLING</span>
            </div>
            <div className="Account-controls">
                <span className="Account-control" >Change Password</span>
                <span className="Account-control" >Add Friends</span>
                <span className="Account-control" >Form Teams</span>
                <span className="Account-control" >Settings</span>
                <span className="Account-control" >Support</span>
                <span className="Account-control" >Logout</span>
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
