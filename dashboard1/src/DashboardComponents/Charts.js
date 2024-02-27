import React, { useState } from "react";
import {
  Chart as ChartJs,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

import { useRef } from "react";
import {
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";
import ChartModalComponent from "./ChartModal";

//must register all the things from chart.js
ChartJs.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export const DoughNutComponent = () => {
  //define data object inside data 2 key values are  key 1 (it takes an array value)=> labels:[], key 2 also array value=> datasets:[]
  //inside datasets value array there is an oject with keys=> labels: ,data:[], backgroundColor:[], borderColor:[]

  const dataproperties = {
    labels: ["high", "low", "critical"],
    datasets: [
      {
        labels: "cases",
        data: [10, 50, 30],
        backgroundColor: [
          "rgb(101,106,187)",
          "rgb(210,142,202)",
          "rgb(244,246,175)",
        ],
      },
    ],
  };
  return (
    <div style={{ color:"white", maxWidth: "50vw", maxHeight:"60vh", display:"flex", alignItems:"center",justifyContent:"center"}}>
      DOUGHNUT CHART
      <Doughnut data={dataproperties} />
      
    </div>
  );
};
////////////////////////////

export const BarGraphComponent = () => {
  const dataproperties = {
    labels: ["jan", "feb", "mar"],

    datasets: [
      {
        label: "dataset1",
        data: [10, 30, 150],
        backgroundColor: [
          "rgb(184,255,161)",
          "rgb(184,255,161)",
          "rgb(184,255,161)",
        ],
      },
      {
        label: "dataset2",
        data: [20, 40, 80],
        backgroundColor: [
          "rgb(149,220,173)",
          "rgb(149,220,173)",
          "rgb(149,220,173)",
        ],
      },
      {
        label: "dataset3",
        data: [30, 50, 10],
        backgroundColor: [
          "rgb(91,232,128)",
          "rgb(91,232,128)",
          "rgb(91,232,128)",
        ],
      },
    ],
  };

  const option = {
    responsive: true,
    title: {
      display: true,
      text: "This is title",
    },
    scales: {
      yAxis: {
        ticks: {
          min: 0,
          max: 130,
          stepSize: 16,
        },
      },
    },
  };

  return (
    <div>
      BARGRAPH CHART
      <Bar
        data={dataproperties}
        option={option}
        style={{maxWidth:"50vw"}}
      />
    </div>
  );
};

export const BarGraphComponent2 = ({ names, films, result }) => {
  // used to create a mutable object called a "ref object"
  const chartRef = useRef();
  //Film Modal state handling show/hide
  const [showFilmModal, setShowFilmModal] = useState(false);
  //setShowFilmModalFun
  const setShowFilmModalFun = (value) => {
    setShowFilmModal(value);
  };
  //labelofclickedbar passing as props to modal so make it global
  const [labelOfClickedBar, setLabelOfClickedBar] = useState("");

  //film list state
  const [filmList, setFilmList] = useState([]);

  const onClick = (event) => {
    console.log("onclick run chart")
    //element looks like=> 0:{element: BarElement, datasetIndex: 0, index: 0}
    //getting element[0]
    //only clicking on bar not anywhere because anywhere it cause error so if condition
    if (getElementAtEvent(chartRef.current, event).length >0) {
        console.log("if true", getElementAtEvent(chartRef.current,event))
      var element = getElementAtEvent(chartRef.current, event)[0];
      //extracting index of clicked bar
      var index = element["index"];
      var datasetIndex = element["datasetIndex"];
      console.log(
        "index is getting=> ",
        element["index"],
        " and datasetIndex=> ",
        element["datasetIndex"]
      );
      //now go into labels array of chart properties which is "names"
      //and find what is the label for this index
      setLabelOfClickedBar(names[index]);
      const labelName = names[index]; // state error loading previous state
      console.log("extracting label by index => ", labelOfClickedBar);
      //first setshow true
      setShowFilmModal(true);
      //extracting out film link from result
      console.log("labelclickedbar=> ");
      const matchingElement = result.find((ele) => ele.name === labelName);
      console.log(matchingElement);
      console.log(matchingElement["films"]);
      const listF = matchingElement["films"];
      setFilmList(listF);
    }
  };

  const dataproperties = {
    labels: names,

    datasets: [
      {
        label: "film",
        data: films,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(230, 203, 207, 0.2)",
          "rgba(235, 159, 64, 0.2)",
          "rgba(295, 205, 86, 0.2)",
          "rgba(55, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const option = {
    responsive: "true",
    scales: {
      yAxis: {
        ticks: {
          min: 0,
          max: 12,
        },
      },
    },
  };

  return (
    <>
      <Bar
        data={dataproperties}
        option={option}
        onClick={onClick}
        ref={chartRef}
        
      />
      <ChartModalComponent
        name={labelOfClickedBar}
        showFilmModal={showFilmModal}
        setShowFilmModalFun={setShowFilmModalFun}
        filmList={filmList}
        style={{maxHeight:"100vh",maxWidth:"100vw"}}
      />
    </>
  );
};
