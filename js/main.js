$(document).ready(function(){$(".box").height($(".box").width()),"hidden"!==window.localStorage.getItem("region-notice")&&$("#region-notice").collapse("show"),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js");const a=window.location.hash;a&&-1<a.indexOf("#")&&showCategory(a.substring(1))}),$(window).on("hashchange",function(){const a=window.location.hash;a&&-1<a.indexOf("#")&&showCategory(a.substring(1))}),$(".exception").popup({position:"right center",hoverable:!0,title:"Exceptions & Restrictions"}),$(".category-btn").click(function(){let a=window.location.hash.substring(1);$(".category-table.collapse").collapse("hide"),$(".category-btn").removeClass("active"),($(`#${a}-table`).hasClass("collapsing")||$(`#${a}-mobile-table`).hasClass("collapsing"))&&a===this.id?history.pushState("",document.title,window.location.pathname+window.location.search):(window.location.hash=this.id,showCategory(this.id))}),$("#region-notice-close-btn").click(function(){$("#region-notice").collapse("hide"),window.localStorage.setItem("region-notice","hidden")});function showCategory(a){$(".category-table.collapse").collapse("hide"),$(`#${a}-table`).collapse("show"),$(`#${a}-mobile-table`).collapse("show"),$(".category-btn").removeClass("active"),$(`[id=${a}]`).addClass("active")}let resizeObserver=new ResizeObserver(()=>{$("body").height()<$(window).height()?$(".footer").css({position:"absolute"}):$(".footer").css({position:"static"}),$(".box").height($(".box").width())});resizeObserver.observe($("body")[0]);