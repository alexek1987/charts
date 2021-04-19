import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { auth, db } from "./firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const ApexChart = () => {
  // const [datPoints, setDatsPoints] = useState([]);
  const query = db.collection("data");
  const goal = db.collection("goal");


  const [snap] = useCollection(goal);
  const [snapshot] = useCollection(query);

  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries([
      {
        name: "Deals",
        data: snapshot?.docs.map((doc) => doc.data().value),
      },
      {
        name: "Goal",
        data: snap?.docs.map((doc) => doc.data().value),
      },
    ]);
  }, [snapshot]);

  console.log(series);

  const [chartConfig, setChartConfig] = useState({
    // series: [
    //   {
    //     name: "Deals",
    //     data: [56, 71, 91, 51, 49, 62, 0, 91, 43, 84, 32, 45],
    //   },
    //   {
    //     name: "Goal",
    //     data: [70, 70, 60, 60, 60, 60, 0, 60, 80, 90, 70, 50],
    //   },
    // ],

    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Deals & Mål",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  });

  return (
    <div id="chart">
      <p className="text-center">Säljare: Saga</p>
      <Chart
        options={chartConfig.options}
        series={series}
        type="line"
        height={350}
      />
      <div className="mt-5 text-center">
        <button className="btn btn-success" onClick={() => auth.signOut()}>
          Logga ut
        </button>
      </div>
    </div>
  );
};

export default ApexChart;
