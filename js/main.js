import { createChart } from "./createChart.js";

//path to file data.json
const path = "js/data.json";

//promise of data.json
async function dataChart(url){
    try{
        var readJson = fetch(url);
        var response = await readJson;
        var data = await response.json();

        return data;
    }
    catch(error){
        alert(error);
        console.error(error);
    }
}

//create the chart
createChart(dataChart(path));



