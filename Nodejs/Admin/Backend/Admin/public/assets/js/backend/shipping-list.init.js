function getChartColorsArray(e){if(null!==document.getElementById(e)){var t=document.getElementById(e).getAttribute("data-colors");if(t)return(t=JSON.parse(t)).map((function(e){var t=e.replace(" ","");if(-1===t.indexOf(",")){var r=getComputedStyle(document.documentElement).getPropertyValue(t);return r||t}var o=e.split(",");if(2==o.length){var a=getComputedStyle(document.documentElement).getPropertyValue(o[0]);return a="rgba("+a+","+o[1]+")"}return t}));console.warn("data-colors atributes not found on",e)}}var vectorMapWorldLineColors=getChartColorsArray("users-by-country");if(vectorMapWorldLineColors)var worldlinemap=new jsVectorMap({map:"world_merc",selector:"#users-by-country",zoomOnScroll:!1,zoomButtons:!1,markers:[{name:"Egypt",coords:[26.8206,30.8025]},{name:"United States",coords:[37.0902,-95.7129]}],lines:[{from:"United States",to:"Egypt"}],regionStyle:{initial:{stroke:"#9599ad",strokeWidth:.25,fill:vectorMapWorldLineColors,fillOpacity:1}},labels:{markers:{render:(e,t)=>e.name||e.labelName||"Not available"}},lineStyle:{animation:!0,strokeDasharray:"6 3 6"}});