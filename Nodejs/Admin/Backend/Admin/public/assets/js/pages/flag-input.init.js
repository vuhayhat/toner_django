!function(){var e,r,t,n="";function o(e){if(e.querySelector(".country-flagimg"))var r=e.querySelector(".country-flagimg").getAttribute("src");Array.from(e.querySelectorAll(".dropdown-menu li")).forEach((function(t){var n=t.querySelector(".options-flagimg").getAttribute("src");t.addEventListener("click",(function(){var r=t.querySelector(".countrylist-codeno").innerHTML;e.querySelector("button")&&(e.querySelector("button img").setAttribute("src",n),e.querySelector("button span")&&(e.querySelector("button span").innerHTML=r))})),r==n&&t.classList.add("active")})),Array.from(document.querySelectorAll("[data-option-flag-img-name]")).forEach((function(e){var r=getComputedStyle(e.querySelector(".flag-input")).backgroundImage,t=r.substring(r.indexOf("/as")+1,r.lastIndexOf('"'));Array.from(e.querySelectorAll(".dropdown-menu li")).forEach((function(r){var n=r.querySelector(".options-flagimg").getAttribute("src");r.addEventListener("click",(function(){var t=r.querySelector(".country-name").innerHTML;e.querySelector(".flag-input").style.backgroundImage="url("+n+")",e.querySelector(".flag-input").value=t})),t==n&&(r.classList.add("active"),e.querySelector(".flag-input").value=r.querySelector(".country-name").innerHTML)}))})),Array.from(document.querySelectorAll("[data-option-flag-name]")).forEach((function(e){var r=e.querySelector(".flag-input").value;Array.from(e.querySelectorAll(".dropdown-menu li")).forEach((function(t){var n=t.querySelector(".country-name").innerHTML;t.addEventListener("click",(function(){e.querySelector(".flag-input").value=n})),r==n&&(t.classList.add("active"),e.querySelector(".flag-input").value=t.querySelector(".country-name").innerHTML)}))}))}e="country-list.json",r=function(e,r){null!==e?console.log("Something went wrong: "+e):function(e){var r=Array.from(document.querySelectorAll("[data-input-flag]")),t="",n=Array.from(e);for(let e=0;e<n.length;e++)t+='<li class="dropdown-item d-flex">            <div class="flex-shrink-0 me-2"><img src="'+n[e].flagImg+'" alt="country flag" class="options-flagimg" height="20"></div>                <div class="flex-grow-1">                <div class="d-flex"><div class="country-name me-1">'+n[e].countryName+'</div><span class="countrylist-codeno text-muted">'+n[e].countryCode+"</span></div>            </div>            </li>";for(let e=0;e<r.length;e++)r[e].querySelector(".dropdown-menu-list").innerHTML="",r[e].querySelector(".dropdown-menu-list").innerHTML=t,o(r[e])}(n=r)},(t=new XMLHttpRequest).open("GET","../assets/json/"+e,!0),t.responseType="json",t.onload=function(){var e=t.status;r(200===e?null:e,t.response)},t.send(),Array.from(document.querySelectorAll("[data-input-flag]")).forEach((function(e){var r=e.querySelector(".search-countryList");r&&r.addEventListener("keyup",(function(){var t=r.value.toLowerCase();var l,a=(l=t,n.filter((function(e){return-1!==e.countryName.toLowerCase().indexOf(l.toLowerCase())||-1!==e.countryCode.indexOf(l)})));setTimeout((function(){e.querySelector(".dropdown-menu-list").innerHTML="",Array.from(a).forEach((function(r){e.querySelector(".dropdown-menu-list").innerHTML+='<li class="dropdown-item d-flex">                        <div class="flex-shrink-0 me-2"><img src="'+r.flagImg+'" alt="country flag" class="options-flagimg" height="20"></div>                        <div class="flex-grow-1">                        <div class="d-flex"><div class="country-name me-1">'+r.countryName+'</div><span class="countrylist-codeno text-muted">'+r.countryCode+"</span></div>                        </div>                        </li>"})),o(e)}),350)}))}))}();