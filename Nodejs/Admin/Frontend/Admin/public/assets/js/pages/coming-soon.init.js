document.addEventListener("DOMContentLoaded",(function(){Array.from(document.querySelectorAll(".countdownlist")).forEach((function(t){var n=t.getAttribute("data-countdown"),i=new Date(n).getTime(),e=setInterval((function(){var n=(new Date).getTime(),d=i-n,o='<div class="countdownlist-item"><div class="count-title">Days</div><div class="count-num">'+Math.floor(d/864e5)+'</div></div><div class="countdownlist-item"><div class="count-title">Hours</div><div class="count-num">'+Math.floor(d%864e5/36e5)+'</div></div><div class="countdownlist-item"><div class="count-title">Minutes</div><div class="count-num">'+Math.floor(d%36e5/6e4)+'</div></div><div class="countdownlist-item"><div class="count-title">Seconds</div><div class="count-num">'+Math.floor(d%6e4/1e3)+"</div></div>";t&&(t.innerHTML=o),d<0&&(clearInterval(e),t.innerHTML='<div class="countdown-endtxt">The countdown has ended!</div>')}),1e3)}))}));