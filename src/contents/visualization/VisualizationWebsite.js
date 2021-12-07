import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getDocs, collection} from "@firebase/firestore";
import { db } from "../../firebase_utils/firebase";
import questions from "../../data/questions";

function VisualizationWebsite() {

	const [series1, setSeries1] = useState([]);
	const [series2, setSeries2] = useState([]);
  const dataRef = collection(db, "WebSurvey");
  const categories = ["Perception change", "Future helpfulness",  "Data leak prevention", "Site's data collection", "Others know me too much", "Easy-to-access private information", "Data leakage", "Worried about unaware use of data", "Unpermitted data sharing"];


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
      
      const matrix1 = transpose(matrix.slice(0, 3))
      const matrix2 = transpose(matrix.slice(3, categories.length))
      
      const data1 = []
      const data2 = []
      for (var i=0; i< matrix1.length; i++) {
        if (i == 0) {
          data1.push({name:(i+1).toString() + " (Never)", data: matrix1[i]})
        } else if (i == 6) {
          data1.push({name: (i+1).toString() + " (Always)", data: matrix1[i]})
        } else {
          data1.push({name: i+1, data: matrix1[i]})
        }
      }
      for (var i=0; i< matrix2.length; i++) {
        if (i == 0) {
          data2.push({name:(i+1).toString() + " (Never)", data: matrix2[i]})
        } else if (i == 6) {
          data2.push({name: (i+1).toString() + " (Always)", data: matrix2[i]})
        } else {
          data2.push({name: i+1, data: matrix2[i]})
        }
      }
      setSeries1(data1)
      setSeries2(data2)
    };
    getData();
  }, [])

	let options1 = JSON.parse(JSON.stringify(options));
  options1.xaxis = {categories: categories.slice(0, 4)}
  let options2 = JSON.parse(JSON.stringify(options));
  options2.xaxis = {categories: categories.slice(4, categories.length)}

  return (
    <div className="mx-5 mx-sm-5">
      <div id="chart">
        <ReactApexChart options={options1} series={series1} type="bar" height={500} />
				<h1 className="mt-4 text-center">Worried about...</h1>
				<ReactApexChart options={options2} series={series2} type="bar" height={500} />
      </div>
    </div>
  );
  
}


export default VisualizationWebsite;