import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super();
        this.state = {
            selected: 2
        }
    }

    render() {
        return (
            <table className="NavBar-table">
                <tbody>
                    <tr>
                        <td align="center">
                            {this.state.selected === 0
                                ? <img className="NavBar-icon selected" src={require('./stats.svg')} />
                                : <img className="NavBar-icon" src={require('./stats.svg')} />}
                        </td>
                        <td align="center">
                            {this.state.selected === 1
                                ? <img className="NavBar-icon selected" src={require('./trophy.svg')} />
                                : <img className="NavBar-icon" src={require('./trophy.svg')} />}
                        </td>
                        <td align="center">
                            {this.state.selected === 2
                                ? <div className="selected" cellPadding={0} cellSpacing={0}><img className="NavBar-icon" src={require('./recycle.svg')} /></div>
                                : <img className="NavBar-icon" src={require('./recycle.svg')} />}
                        </td>
                        <td align="center">
                            {this.state.selected === 3
                                ? <img className="NavBar-icon selected" src={require('./cash.svg')} />
                                : <img className="NavBar-icon" src={require('./cash.svg')} />}
                        </td>
                        <td align="center">
                            {this.state.selected === 4
                                ? <img className="NavBar-icon selected" src={require('./account.svg')} />
                                : <img className="NavBar-icon" src={require('./account.svg')} />}
                        </td>
                    </tr>
                </tbody>
            </table>
        );

        {/*return (
            <div className="NavBar">
                <img className={iconStyle} src={require("./stats.svg")} />
                <img className={iconStyle} src={require("./trophy.svg")} />
                <img className={iconStyle} src={require("./recycle.svg")} />
                <img className={iconStyle} src={require("./cash.svg")} />
                <img className={iconStyle} src={require("./account.svg")} />
            </div>
        );*/}
    }
}

export default NavBar;
