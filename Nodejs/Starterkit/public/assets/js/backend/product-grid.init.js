var productListData=[{id:1,productImg:"../assets/images/products/img-10.png",productTitle:"World's most expensive t shirt",category:"Fashion",price:"354.99",discount:"25%",rating:"4.9",color:["secondary","light","dark"],size:["s","m","l"],stock:"12",orders:"48",publish:"12 Oct, 2021"},{id:2,productImg:"../assets/images/products/img-15.png",productTitle:"Like Style Women Black Handbag",category:"Fashion",price:"742.00",discount:"0%",rating:"4.2",color:["light","dark"],stock:"06",orders:"30",publish:"06 Jan, 2021"},{id:3,productImg:"../assets/images/products/img-1.png",productTitle:"Black Horn Backpack For Men Bags 30 L Backpack",category:"Grocery",price:"150.99",discount:"25%",rating:"3.8",color:["primary","danger","secondary"],size:["s","m","l"],stock:"10",orders:"48",publish:"26 Mar, 2021"},{id:4,productImg:"../assets/images/products/img-7.png",productTitle:"Innovative education book",category:"Kids",price:"96.26",discount:"0%",rating:"4.7",stock:"15",orders:"40",publish:"19 Apr, 2021"},{id:5,productImg:"../assets/images/products/img-4.png",productTitle:"Sangria Girls Mint Green & Off-White Solid Open Toe Flats",category:"Kids",price:"96.26",discount:"75%",rating:"4.7",color:["success","danger","secondary"],size:["40","41","42"],stock:"08",orders:"55",publish:"30 Mar, 2021"},{id:6,productImg:"../assets/images/products/img-5.png",productTitle:"Lace-Up Casual Shoes For Men",category:"Fashion",price:"229.00",discount:"0%",rating:"4.0",color:["danger"],size:["40","41","42"],stock:"15",orders:"48",publish:"12 Oct, 2021"},{id:7,productImg:"../assets/images/products/img-6.png",productTitle:"Striped High Neck Casual Men Orange Sweater",category:"Fashion",price:"120.00",discount:"48%",rating:"4.8",size:["s","m","l","xl"],stock:"12",orders:"45",publish:"15 May, 2021"},{id:8,productImg:"../assets/images/products/img-9.png",productTitle:"Lace-Up Casual Shoes For Men",category:"Kids",price:"229.00",discount:"15%",rating:"2.4",color:["light","warning"],size:["s","l"],stock:"20",orders:"48",publish:"21 Jun, 2021"},{id:9,productImg:"../assets/images/products/img-10.png",productTitle:"Printed, Typography Men Round Neck Black T-shirt",category:"Fashion",price:"81.99",discount:"0%",rating:"4.9",color:["dark","light"],size:["s","m","l","xl"],stock:"14",orders:"55",publish:"15 Jan, 2021"},{id:10,productImg:"../assets/images/products/img-12.png",productTitle:"Carven Lounge Chair Red",category:"Furniture",price:"209.99",discount:"0%",rating:"4.1",color:["secondary","dark","danger","light"],stock:"20",orders:"60",publish:"15 Jun, 2021"},{id:11,productImg:"../assets/images/products/img-3.png",productTitle:"Ninja Pro Max Smartwatch",category:"Watches",price:"309.09",discount:"20%",rating:"3.5",color:["secondary","info"],stock:"12",orders:"48",publish:"12 Oct, 2021"},{id:12,productImg:"../assets/images/products/img-2.png",productTitle:"Opinion Striped Round Neck Green T-shirt",category:"Fashion",price:"126.99",discount:"0%",rating:"4.1",color:["success"],size:["s","m","l","xl"],stock:"06",orders:"30",publish:"06 Jan, 2021"}],prevButton=document.getElementById("page-prev"),nextButton=document.getElementById("page-next"),currentPage=1,itemsPerPage=6;function loadProductList(e,t){var r=Math.ceil(e.length/itemsPerPage);t<1&&(t=1),t>r&&(t=r),document.getElementById("product-grid").innerHTML="";for(var a=(t-1)*itemsPerPage;a<t*itemsPerPage&&a<e.length;a++)if(e[a]){var i=1;if(e[a].color){var s='<ul class="clothe-colors list-unstyled hstack gap-1 d-flex mb-0 flex-wrap mb-3">';Array.from(e[a].color).forEach((function(t){i++,s+='<li>                                        <input type="radio" name="color'+e[a].id+'" id="product-color-'+e[a].id+i+'">                                        <label class="avatar-xxs border border-2 border-white btn btn-'+t+' p-0 d-flex align-items-center justify-content-center rounded-circle" for="product-color-'+e[a].id+i+'"></label>                                    </li>'})),s+="</ul>"}else s="";if(e[a].size){var c='<ul class="clothe-size list-unstyled hstack gap-2 d-flex mb-0 flex-wrap mb-3">';Array.from(e[a].size).forEach((function(t){i++,c+='<li>                                        <input type="radio" name="sizes'+e[a].id+'" id="product-size-'+e[a].id+i+'">                                        <label class="avatar-xxs border border-2 border-white btn btn-soft-primary text-uppercase p-0 fs-12 d-flex align-items-center justify-content-center rounded-circle" for="product-size-'+e[a].id+i+'">'+t+"</label>                                    </li>"})),c+="</ul>"}else c="";var o=e[a].discount.split("%")[0],n=e[a].price-e[a].price*o/100;if(o>0)var l='<div class="avatar-xs label">                                        <div class="avatar-title bg-danger rounded-circle fs-11">'+e[a].discount+"</div>                                    </div>",d='<h5 class="text-primary fs-17 mb-0">$'+n.toFixed(2)+' <span class="text-muted fs-14"><del>$'+e[a].price+"</del></span></h5>";else l="",d='<h5 class="text-primary fs-17 mb-0">$'+e[a].price+"</h5>";document.getElementById("product-grid").innerHTML+='<div class="col-lg-4 col-sm-6">            <div class="card ecommerce-product-widgets overflow-hidden">                <div class="card-body">                    <div class="bg-light rounded py-5 position-relative">                        <div class="dropdown action">                            <button class="btn btn-soft-secondary btn-sm btn-icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">                                <i class="ph-dots-three-outline"></i>                            </button>                            <ul class="dropdown-menu">                                <li><a class="dropdown-item" href="#">Edit</a></li>                                <li><a class="dropdown-item" href="#">Remove</a></li>                            </ul>                        </div>                        <img src="'+e[a].productImg+'" alt="" style="max-height: 150px;max-width: 100%;" class="mx-auto d-block rounded-2">                        '+l+'                    </div>                    <div class="mt-3">                        <div class="mb-2 d-flex justify-content-between align-items-center">                        '+d+"                            <span>"+e[a].rating+' <i class="ri-star-half-fill text-warning align-middle"></i></span>                        </div>                        <a href="#!">                            <h6 class="fs-16 text-capitalize lh-base text-truncate mb-0">'+e[a].productTitle+'</h6>                        </a>                        <p class="text-muted">'+e[a].category+'</p>                        <div class="row d-none">                            <div class="col-6">'+s+'</div>                            <div class="col-6">'+c+'</div>                        </div>                        <div class="row text-center g-0">                            <div class="col-4 border-end border-end-dashed">                                <div class="mt-3">                                    <h5 class="fs-15 text-truncate mb-1">'+e[a].stock+'</h5>                                    <p class="text-muted mb-0">Stocks</p>                                </div>                            </div>                            <div class="col-4 border-end border-end-dashed">                                <div class="mt-3">                                    <h5 class="fs-15 text-truncate mb-1">'+e[a].orders+'</h5>                                    <p class="text-muted mb-0">Orders</p>                                </div>                            </div>                            <div class="col-4">                                <div class="mt-3">                                    <h5 class="fs-15 text-truncate mb-1">'+e[a].publish+'</h5>                                    <p class="text-muted mb-0">Publish</p>                                </div>                            </div>                        </div>                    </div>                </div>            </div>'}selectedPage(),1==currentPage?prevButton.parentNode.classList.add("disabled"):prevButton.parentNode.classList.remove("disabled"),currentPage==r?nextButton.parentNode.classList.add("disabled"):nextButton.parentNode.classList.remove("disabled")}function selectedPage(){for(var e=document.getElementById("page-num").getElementsByClassName("clickPageNumber"),t=0;t<e.length;t++)t==currentPage-1?e[t].parentNode.classList.add("active"):e[t].parentNode.classList.remove("active")}function paginationEvents(){var e=function(){return Math.ceil(productListData.length/itemsPerPage)};prevButton.addEventListener("click",(function(){currentPage>1&&(currentPage--,loadProductList(productListData,currentPage))})),nextButton.addEventListener("click",(function(){currentPage<e()&&(currentPage++,loadProductList(productListData,currentPage))})),function(){var t=document.getElementById("page-num");t.innerHTML="";for(var r=1;r<e()+1;r++)t.innerHTML+="<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>"+r+"</a></div>"}(),document.addEventListener("click",(function(e){"A"==e.target.nodeName&&e.target.classList.contains("clickPageNumber")&&(currentPage=e.target.textContent,loadProductList(productListData,currentPage))})),selectedPage()}loadProductList(productListData,currentPage),paginationEvents();var searchProductList=document.getElementById("searchProductList");searchProductList.addEventListener("keyup",(function(){var e=searchProductList.value.toLowerCase();var t,r=(t=e,productListData.filter((function(e){return-1!==e.productTitle.toLowerCase().indexOf(t.toLowerCase())})));searchResult(r),loadProductList(r,currentPage)})),Array.from(document.querySelectorAll(".filter-list a")).forEach((function(e){e.addEventListener("click",(function(){var t=document.querySelector(".filter-list a.active");t&&t.classList.remove("active"),e.classList.add("active");var r=e.querySelector(".listname").innerHTML,a=productListData.filter((e=>e.category===r));searchResult(a),loadProductList(a,currentPage)}))}));var slider=document.getElementById("product-price-range");if(slider){noUiSlider.create(slider,{start:[0,2e3],step:10,margin:20,connect:!0,behaviour:"tap-drag",range:{min:0,max:2e3},format:wNumb({decimals:0,prefix:"$ "})});var minCostInput=document.getElementById("minCost"),maxCostInput=document.getElementById("maxCost"),filterDataAll="";slider.noUiSlider.on("update",(function(e,t){var r=productListData;t?maxCostInput.value=e[t]:minCostInput.value=e[t];var a=maxCostInput.value.substr(2),i=minCostInput.value.substr(2);searchResult(filterDataAll=r.filter((e=>parseFloat(e.price)>=i&&parseFloat(e.price)<=a))),loadProductList(filterDataAll,currentPage)})),minCostInput.addEventListener("change",(function(){slider.noUiSlider.set([null,this.value])})),maxCostInput.addEventListener("change",(function(){slider.noUiSlider.set([null,this.value])}))}document.querySelectorAll("#color-filter li").forEach((function(e){var t=e.querySelector("input[type='radio']").value;e.querySelector("input[type='radio']").addEventListener("change",(function(){var e=productListData.filter((function(e){if(e.color)return e.color.some((function(e){return e==t}))}));searchResult(e),loadProductList(e,currentPage)}))})),document.querySelectorAll("#size-filter li").forEach((function(e){var t=e.querySelector("input[type='radio']").value;e.querySelector("input[type='radio']").addEventListener("change",(function(){var e=productListData.filter((function(e){if(e.size)return e.size.some((function(e){return e==t}))}));searchResult(e),loadProductList(e,currentPage)}))}));var arraylist=[];function searchResult(e){0==e.length?(document.getElementById("pagination-element").style.display="none",document.getElementById("search-result-elem").classList.remove("d-none")):(document.getElementById("pagination-element").style.display="flex",document.getElementById("search-result-elem").classList.add("d-none"));var t=document.getElementById("page-num");t.innerHTML="";for(var r=Math.ceil(e.length/itemsPerPage),a=1;a<r+1;a++)t.innerHTML+="<div class='page-item'><a class='page-link clickPageNumber' href='javascript:void(0);'>"+a+"</a></div>"}document.querySelectorAll("#discount-filter .form-check").forEach((function(e){var t=e.querySelector(".form-check-input").value;e.querySelector(".form-check-input").addEventListener("change",(function(){e.querySelector(".form-check-input").checked?arraylist.push(t):arraylist.splice(arraylist.indexOf(t),1);var r=productListData;if(e.querySelector(".form-check-input").checked&&0==t)filterDataAll=r.filter((function(e){if(e.discount){var t=e.discount.split("%");return parseFloat(t[0])<10}}));else if(e.querySelector(".form-check-input").checked&&arraylist.length>0){var a=Math.min.apply(Math,arraylist);filterDataAll=r.filter((function(e){if(e.discount){var t=e.discount.split("%");return parseFloat(t[0])>=a}}))}else filterDataAll=productListData;searchResult(filterDataAll),loadProductList(filterDataAll,currentPage)}))})),document.querySelectorAll("#rating-filter .form-check").forEach((function(e){var t=e.querySelector(".form-check-input").value;e.querySelector(".form-check-input").addEventListener("change",(function(){e.querySelector(".form-check-input").checked?arraylist.push(t):arraylist.splice(arraylist.indexOf(t),1);var r=productListData;if(e.querySelector(".form-check-input").checked&&1==t)filterDataAll=r.filter((function(e){if(e.rating){var t=e.rating;return 1==parseFloat(t)}}));else if(e.querySelector(".form-check-input").checked&&arraylist.length>0){var a=Math.min.apply(Math,arraylist);filterDataAll=r.filter((function(e){if(e.rating){var t=e.rating;return parseFloat(t)>=a}}))}else filterDataAll=productListData;searchResult(filterDataAll),loadProductList(filterDataAll,currentPage)}))}));