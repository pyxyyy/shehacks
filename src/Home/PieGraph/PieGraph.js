import React, { Component } from 'react';
import {PieChart, Pie, Sector, Cell } from "recharts";

const data = [
    {name: 'Group A', value: 30}, {name: 'Group B', value: 130}];
const COLORS = ['#00e4c2', '#98edf5', '#6fb1aa', '#7ddead'];

const RADIAN = Math.PI / 180;
class PieGraph extends Component {
    render () {
        return (
            <PieChart width={200} height={180} onMouseEnter={this.onPieEnter}>
                <Pie
                    data={data}
                    cx={100}
                    cy={80}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                >
                    {
                        data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
            </PieChart>
        );
    }
}

export default PieGraph;