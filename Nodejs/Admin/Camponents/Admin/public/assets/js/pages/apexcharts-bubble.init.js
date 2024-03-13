function getChartColorsArray(e){if(null!==document.getElementById(e)){var t=document.getElementById(e).getAttribute("data-colors");if(t)return(t=JSON.parse(t)).map((function(e){var t=e.replace(" ","");if(-1===t.indexOf(",")){var a=getComputedStyle(document.documentElement).getPropertyValue(t);return a||t}var r=e.split(",");if(2==r.length){var n=getComputedStyle(document.documentElement).getPropertyValue(r[0]);return n="rgba("+n+","+r[1]+")"}return t}))}}function generateData(e,t,a){for(var r=0,n=[];r<t;){var o=Math.floor(750*Math.random())+1,l=Math.floor(Math.random()*(a.max-a.min+1))+a.min,m=Math.floor(61*Math.random())+15;n.push([o,l,m]),864e5,r++}return n}var chartBubbleSimpleColors=getChartColorsArray("simple_bubble");if(chartBubbleSimpleColors){var options={series:[{name:"Bubble1",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:generateData(new Date("12 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble3",data:generateData(new Date("13 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble4",data:generateData(new Date("14 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chart:{height:350,type:"bubble",toolbar:{show:!1}},dataLabels:{enabled:!1},fill:{opacity:.8},title:{text:"Simple Bubble Chart",style:{fontWeight:500}},xaxis:{tickAmount:12,type:"category"},yaxis:{max:70},colors:chartBubbleSimpleColors};(chart=new ApexCharts(document.querySelector("#simple_bubble"),options)).render()}var chartBubbleColors=getChartColorsArray("bubble_chart");if(chartBubbleColors){var chart;options={series:[{name:"Product1",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product2",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product3",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product4",data:generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],chart:{height:350,type:"bubble",toolbar:{show:!1}},dataLabels:{enabled:!1},fill:{type:"gradient"},title:{text:"3D Bubble Chart",style:{fontWeight:500}},xaxis:{tickAmount:12,type:"datetime",labels:{rotate:0}},yaxis:{max:70},theme:{palette:"palette2"},colors:chartBubbleColors};(chart=new ApexCharts(document.querySelector("#bubble_chart"),options)).render()}