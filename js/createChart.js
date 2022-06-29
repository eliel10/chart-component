import { colorDay } from "./colorDay.js";


//canvas element
const ctx = document.querySelector("#chart");


//chart using the lib chart.js
export async function createChart(data){
    try{


        data = await data;

        var dayWeek = data.map(e=>e.day);
        var dayValue = data.map(e=>e.amount);

        const configChart = 
        {
            type:"bar",
            data:{
                labels:dayWeek,
                datasets:[{
                    data:dayValue,
                    backgroundColor:colorDay(dayWeek),
                    borderWidth:1,
                    borderRadius:5
                }]
            },
            options:{
                scales:{
                    x:{
                        grid:{
                            display:false,
                        },
                    },
                    y:{
                        display:false,
                    }
                },
                plugins:{
                    legend:{
                        display:false
                    }
                }
            }
        }

        const chart = new Chart(ctx,configChart);

    }
    catch(error){
        alert(error);
        console.error(error)
    }
}