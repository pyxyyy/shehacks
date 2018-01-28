import React, { Component } from 'react';
import {Area, AreaChart, XAxis, YAxis} from "recharts";

const colors = ["#00e4c2", "#98edf5"];
const strokes = "#98edf5";

const data = [
    {name: 'M', them: 4000, me: 2400 },
    {name: 'T', them: 3000, me: 1390 },
    {name: 'W', them: 2000, me: 9800 },
    {name: 'T', them: 2780, me: 3908 },
    {name: 'F', them: 1890, me: 4800 },
    {name: 'S', them: 2390, me: 3800 },
    {name: 'S', them: 3490, me: 4300 },
];

class AreaGraph extends Component {

    renderGraph = () => {
        return (
            <AreaChart width={370} height={150} data={data}
                       margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                <XAxis stroke="#808080"  dataKey="name"/>
                <YAxis stroke="#808080" />
                <Area type='monotone' dataKey='me' stroke={strokes} fill={colors[1]} />;
                <Area type='monotone' dataKey='them' stroke={strokes} fill={colors[0]} />;
            </AreaChart>
        );
    };


    render = () => {
        return <div className="AreaGraph">
            {this.renderGraph()}
        </div>;
    }

}

export default AreaGraph