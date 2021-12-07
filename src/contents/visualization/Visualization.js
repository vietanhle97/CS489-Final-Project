import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getDocs, collection} from "@firebase/firestore";
import { db } from "../../firebase_utils/firebase";
import questions from "../../data/questions";

function Visualization() {

  const [series, setSeries] = useState([]);
  const dataRef = collection(db, "Questions");

  const options = {
    chart: {
      type: 'bar',
      height: "50vh",
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    colors : ['#0d5add', '#8eb6f8', "#d8e7fc", "#f2f3f3", "#fad9d6", "#f28e86", "#c32214"],
    dataLabels: {
      style: {
        colors: ["#000000"]
      }
    },
    xaxis: {
      categories: ["unpermitted data sharing", "unaware use of data", "data leakage", "ease to access private information", "others know me too much", "site data collection", "feels being watch", "manages cookies", "check policy"],
    },
    fill: {
      opacity: 1
    
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    }
  };

  function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

  useEffect(() => {
    const getData = async () => {
      let matrix = Array(questions.length).fill([]);
      const docs = await getDocs(dataRef);
      docs.docs.map((doc) => {
        let tmp = [0, 0, 0, 0, 0, 0, 0]
        for (const [key, value] of Object.entries(doc.data())) {
          tmp[Number(key)-1] = value
        }  
        matrix[Number(doc.id) - 1] = tmp
      });
      
      matrix = transpose(matrix)
      
      const data = []
      for (var i=0; i< matrix.length; i++) {
        if (i == 0) {
          data.push({name:(i+1).toString() + " (Never)", data: matrix[i]})
        } else if (i == 6) {
          data.push({name: (i+1).toString() + " (Always)", data: matrix[i]})
        } else {
          data.push({name: i+1, data: matrix[i]})
        }
      }
      setSeries(data)
    };
    getData();
  }, [])

  return (
    <div className="mx-5 mx-sm-5">
      <h1 className="mt-4 text-center">Worried about...</h1>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={500} />
      </div>
    </div>
  );
  
}


export default Visualization;