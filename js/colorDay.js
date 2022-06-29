
//function colored the chart bars
export function colorDay(dayWeek){

    const colorsBar = [];
    var today = new Date().getDay()-1;

    var colorPrimary = "hsl(10, 79%, 65%)";
    var colorSecundary = "hsl(186, 34%, 60%)";

    dayWeek.forEach(()=>{
        colorsBar.push(colorPrimary);
    })
    
    colorsBar.splice(today,1,colorSecundary);

    return colorsBar;

}