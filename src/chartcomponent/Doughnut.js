import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(
    ArcElement
)

export const DoughnutChart = ()=>{

    const data={
        labels:['low','high','critical'],
        datasets:[
            {
                labels:'cases',
                data:[20,30,50],
                backgroundColor:['green','orange','red'],
                borderColor:['white','white','white']
            }
        ]
    }
    return(
        <div className='doughnut'>
            <Doughnut data={data}/>
        </div>
    )
}
export default DoughnutChart;