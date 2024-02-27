import React from "react";
import './chart.css';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS,
         BarElement,
         CategoryScale,
         LinearScale,
         Tooltip,
         Legend,
         Ticks
} from "chart.js";
import './chart.css';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

export const Chart = (props) => {

    const data = {
        labels:['jan', 'feb','mar'],
        datasets:[
        {
            label:'dataset1',
            data:[30,100,20],
            backgroundColor:'green'
        },
        {
            label:'dataset2',
            data:[50,40,60],
            backgroundColor:'red'
        },
        {
            label:'dataset3',
            data:[90,10,30],
            backgroundColor:'blue'
        }
        ]
    }
    const option ={
        title:{
            display:true,
             text:'bar graph'
        },
        scales:{
            yAxis:{
                ticks:{
                        min:0,
                        max:130,
                        stepSize:10
                }
            }
        }
    }
    return (
        <div className="barchart">
            <Bar data={data} option={option}>
            </Bar>
        </div>
        )
}
    export default Chart;
