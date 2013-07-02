/* https://github.com/dcooney/flexpanel - http://cnkt.ca/flexpanel - Author: Darren Cooney - Twitter: @KaptonKaos */
(function(e){e.flexpanel=function(t,n){"use strict";var r={direction:"right",wrapper:"#wrapper",button:".flex-btn",maxWidth:null,speed:500};var n=e.extend(r,n);var i=e(t),s=n.direction,o=e(n.wrapper),u=e(n.button),a=n.maxWidth,f=n.speed,l=e(window).width(),c="ontouchstart"in window;var h={init:function(){e("body").addClass("flexpanel-"+s);i.append('<div class="cover"/>');u.addClass("in-view");if(a===null||l<=a){h.height();i.show()}if(e.fn.hammer){h.touch()}},slide:function(t){switch(t){case"open":e("body").addClass("flexpanel-active");break;case"close":e(".viewport",i).animate({scrollTop:0},500);e("body").removeClass("flexpanel-active");e(document).on("touchmove",function(e){return true});break;default:if(e("body").hasClass("flexpanel-active")){e(".viewport",i).animate({scrollTop:0},500);e("body").removeClass("flexpanel-active");e(document).on("touchmove",function(e){return true})}else{e("body").addClass("flexpanel-active")}}},touch:function(){e(".cover").add(u).hammer().on("swipe, drag",function(t){switch(s){case"right":if(t.gesture.direction==="right"&&e("body").hasClass("flexpanel-active")){h.slide()}break;case"left":if(t.gesture.direction==="left"&&e("body").hasClass("flexpanel-active")){h.slide()}break}});o.add(u).hammer().on("swipe, drag",function(t){switch(s){case"right":if(t.gesture.direction==="left"&&!e("body").hasClass("flexpanel-active")){h.slide()}break;case"left":if(t.gesture.direction==="right"&&!e("body").hasClass("flexpanel-active")){h.slide()}break}});e("body").hammer().on("dragdown",function(e){if(e.gesture.deltaTime>50){u.addClass("in-view")}});e("body").hammer().on("dragup",function(t){var n=e(window).scrollTop();if(t.gesture.deltaTime>50&&n>100){u.removeClass("in-view")}})},height:function(){if(c){switch(s){case"top":i.css("height",e(window).height()-60+"px");e(".viewport",i).css("height",e(window).height()-60+"px");e(".cover",i).css("height",e(window).height()-60+"px");break;default:i.css("height",e(window).height()+60+"px");e(".viewport",i).css("height",e(window).height()+60+"px");e(".cover",i).css("height",e(window).height()+60+"px");break}}else{switch(s){case"top":i.css("height",e(window).height()-60+"px");e(".viewport",i).css("height",e(window).height()-60+"px");e(".cover",i).css("height",e(window).height()-60+"px");break;default:i.css("height",e(window).height()+"px");e(".viewport",i).css("height",e(window).height()+"px");e(".cover",i).css("height",e(window).height()+"px");break}}}};h.init();e(document).on("touchmove",function(t){if(e("body").hasClass("flexpanel-active")){t.preventDefault()}});e("body").on("touchstart",".viewport",function(e){if(e.currentTarget.scrollTop===0){e.currentTarget.scrollTop=1}else if(e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight){e.currentTarget.scrollTop-=1}});e("body").on("touchmove",".viewport",function(e){e.stopPropagation()});e(".viewport").bind("mousewheel DOMMouseScroll",function(t){var n=null;if(t.type=="mousewheel"){n=t.originalEvent.wheelDelta*-1}else if(t.type=="DOMMouseScroll"){n=40*t.originalEvent.detail}if(n){t.preventDefault();e(this).scrollTop(n+e(this).scrollTop())}});u.click(h.slide);e("nav ul li a",i).click(function(){var t=e(this);var n=t.attr("href");if(t.hasClass("anchor")){h.slide();var r=e(n).offset();var i=r.top;e("html, body").animate({scrollTop:i},f)}});i.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(){var t=e(".viewport",i);if(e("body").hasClass("flexpanel-active")){t.addClass("smooth")}else{t.removeClass("smooth")}});e(window).resize(function(){l=e(window).width();if(a===null){e(window).resize(h.height)}else{if(l<=a){e(window).resize(h.height)}}});e(window).scroll(function(){var t=e(window).scrollTop();if(t<100){u.addClass("in-view")}});e.fn.flexpanel.toggle=function(){h.slide()};e.fn.flexpanel.open=function(){h.slide("open")};e.fn.flexpanel.close=function(){h.slide("close")}};e.fn.flexpanel=function(t){new e.flexpanel(this,t)}})(jQuery)