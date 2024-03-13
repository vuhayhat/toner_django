function getChartColorsArray(r){if(console.log(r),null!==document.getElementById(r))return r=document.getElementById(r).getAttribute("data-colors"),(r=JSON.parse(r)).map(function(r){var e=r.replace(" ","");return-1===e.indexOf(",")?getComputedStyle(document.documentElement).getPropertyValue(e)||e:2==(r=r.split(",")).length?"rgba("+getComputedStyle(document.documentElement).getPropertyValue(r[0])+","+r[1]+")":e})}var chartRadarBasicColors=getChartColorsArray("basic_radar"),options={series:[{name:"Series 1",data:[80,50,30,40,100,20]}],chart:{height:350,type:"radar",toolbar:{show:!1}},colors:chartRadarBasicColors,xaxis:{categories:["January","February","March","April","May","June"]}},chart=new ApexCharts(document.querySelector("#basic_radar"),options),chartRadarMultiColors=(chart.render(),getChartColorsArray("multi_radar")),options={series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}],chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1},toolbar:{show:!1}},stroke:{width:2},fill:{opacity:.2},markers:{size:0},colors:chartRadarMultiColors,xaxis:{categories:["2014","2015","2016","2017","2018","2019"]}},chartRadarPolyradarColors=((chart=new ApexCharts(document.querySelector("#multi_radar"),options)).render(),getChartColorsArray("polygon_radar")),options={series:[{name:"Series 1",data:[20,100,40,30,50,80,33]}],chart:{height:350,type:"radar",toolbar:{show:!1}},dataLabels:{enabled:!0},plotOptions:{radar:{size:140}},title:{text:"Radar with Polygon Fill",style:{fontWeight:500}},colors:chartRadarPolyradarColors,markers:{size:4,colors:["#fff"],strokeColor:"#f34e4e",strokeWidth:2},tooltip:{y:{formatter:function(r){return r}}},xaxis:{categories:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},yaxis:{tickAmount:7,labels:{formatter:function(r,e){return e%2==0?r:""}}}};(chart=new ApexCharts(document.querySelector("#polygon_radar"),options)).render();