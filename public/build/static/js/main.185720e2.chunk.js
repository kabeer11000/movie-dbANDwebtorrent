(this["webpackJsonpreact-clone"]=this["webpackJsonpreact-clone"]||[]).push([[0],{119:function(e,t,n){},216:function(e,t,n){e.exports=n(484)},221:function(e,t,n){},222:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},260:function(e,t){},285:function(e,t){},287:function(e,t){},297:function(e,t){},301:function(e,t){},304:function(e,t){},305:function(e,t){},307:function(e,t){},308:function(e,t){},310:function(e,t){},312:function(e,t){},338:function(e,t){},340:function(e,t){},341:function(e,t){},342:function(e,t){},349:function(e,t){},351:function(e,t){},352:function(e,t){},353:function(e,t){},357:function(e,t){},358:function(e,t){},360:function(e,t){},364:function(e,t){},367:function(e,t){},369:function(e,t){},371:function(e,t){},425:function(e,t){},427:function(e,t){},428:function(e,t){},434:function(e,t){},436:function(e,t){},454:function(e,t){},457:function(e,t){},473:function(e,t){},476:function(e,t){},481:function(e,t){},482:function(e,t){},484:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(203),i=n.n(c),o=(n(221),n(20)),u=(n(222),n(204));n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),n(240),n(254),n(257);var s=function(e){var t=e.title,n=e.movies,a=e.isLargeRow;return r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"row_posters"},n.map((function(e){return r.a.createElement("a",{href:"/watch?id="+e.id},r.a.createElement("img",{key:e.id,onClick:function(){},className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat(a?e.medium_cover_image:e.background_image_original),alt:e.title}))}))),r.a.createElement("div",{style:{padding:"40px"}}))},l="Your TMDB Api_Key";"/trending/all/week?api_key=".concat(l,"&language=en-US"),"/discover/tv?api_key=".concat(l,"&with_network=123"),"/movie/top_rated?api_key=".concat(l,"&language=en-US"),"/discover/movie?api_key=".concat(l,"&with_genres=28"),"/discover/movie?api_key=".concat(l,"&with_genres=35"),"/discover/movie?api_key=".concat(l,"&with_genres=27"),"/discover/movie?api_key=".concat(l,"&with_genres=10749"),"/discover/movie?api_key=".concat(l,"&with_genres=99"),n(119);var f=function(e){var t=e.movie;return r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n        "'.concat(null===t||void 0===t?void 0:t.background_image_original,'"\n        )'),backgroundPosition:"center center"}},r.a.createElement("div",{className:"banner_contents"},r.a.createElement("h1",{className:"banner_title"},(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)||(null===t||void 0===t?void 0:t.original_name)),r.a.createElement("div",{style:{padding:"1rem 0"},className:"banner_buttons"},r.a.createElement("a",{href:"/watch?id="+(null===t||void 0===t?void 0:t.id)},r.a.createElement("button",{className:"banner_button"},"Stream")),r.a.createElement("a",{target:"_blank",href:"https://youtube.com/watch?v="+(null===t||void 0===t?void 0:t.yt_trailer_id)},r.a.createElement("button",{className:"banner_button"},"Trailer"))),r.a.createElement("h1",{className:"banner_description"},null===t||void 0===t?void 0:t.synopsis)),r.a.createElement("div",{className:"banner--fadeBottom"}))};n(258);var m=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement("div",{className:"nav ".concat(n&&"nav_black")},r.a.createElement("img",{className:"nav_logo",src:"https://docs.kabeercloud.tk/c/synced/6273fa5e26b3a---b862fb2e08f8e07c0f22f0ab9befb163.png",alt:"Netflix Logo"}),r.a.createElement("div",{hidden:!0},r.a.createElement("form",null,r.a.createElement("input",{type:"text"}))))},d=n(19),v=n.n(d),p=n(34),h=function(){var e=Object(p.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return n=e.sent,e.abrupt("return",[null,n]);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[e.t0,null]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),b="https://mirror-yts-mx.kabeercloud.tk",g=function(){var e=Object(p.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b+"/api/v2/list_movies.json");case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b+"/api/v2/movie_details.json?movie_id="+t);case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=window.location.protocol+"//"+window.location.host,y=function(){var e=Object(p.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"/stream/v1/details?hash=").concat(t));case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e,t){return"".concat(E,"/stream/v1/play?stream_id=").concat(e,"&file=").concat(t)},j=function(){var e=Object(p.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b+"/api/v2/movie_suggestions.json?movie_id=".concat(t));case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(10),O=n(44),x=n(207),N=(n(273),function(e){var t=r.a.useRef(null),n=r.a.useRef(null),a=e.options,c=e.onReady;return r.a.useEffect((function(){if(n.current)n.current.autoplay(a.autoplay),n.current.src(a.sources);else{var e=t.current;if(!e)return;var r=n.current=Object(x.a)(e,a,(function(){r.log("player is ready"),c&&c(r)}))}}),[a,t]),r.a.useEffect((function(){var e=n.current;return function(){e&&(e.dispose(),n.current=null)}}),[n]),r.a.createElement("div",{"data-vjs-player":!0},r.a.createElement("video",{ref:t,className:"video-js vjs-big-play-centered"}))}),S=function(e){var t=e.movie,n=e.streamConfig,c=r.a.useRef(null),i={autoplay:!1,controls:!0,responsive:!0,fluid:!0,poster:t.background_image_original,sources:[{src:_(n.stream_id,n.files.find((function(e){return e.name.endsWith(".mp4")})).hash),type:"video/mp4"}]},u=Object(a.useState)(),l=Object(o.a)(u,2),f=l[0],m=l[1];return Object(a.useEffect)((function(){j(t.id).then(m)}),[]),r.a.createElement("div",{style:{minHeight:"100vh",minWidth:"100vw"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{padding:"5rem 1rem",minWidth:"60vw",minHeight:"auto",maxWidth:"40rem",width:"100%",height:"auto"}},r.a.createElement(N,{options:i,onReady:function(e){c.current=e,e.on("waiting",(function(){e.log("player is waiting")})),e.on("dispose",(function(){e.log("player will dispose")}))}}),r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement("h1",{style:{color:"white"}},t.title),r.a.createElement("p",{style:{color:"whitesmoke"}},t.description_full),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(t.yt_trailer_code),target:"_blank"},"Watch Trailer"))),r.a.createElement("br",null)),f?r.a.createElement("div",{style:{width:"100vw"}},r.a.createElement(s,{title:"You might like",isLargeRow:!0,movies:f.data.movies})):null)},R=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),u=Object(o.a)(i,2),s=u[0],l=u[1],f=Object(O.b)()[0],m=function(){var e=Object(p.a)(v.a.mark((function e(){var t,n,a,r,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(w(f.get("id")));case 2:if(t=e.sent,n=Object(o.a)(t,2),a=n[0],r=n[1],!a){e.next=8;break}return e.abrupt("return",alert("Error Fetching Movie"));case 8:c(r),i=r.data.movie.torrents.find((function(e){return e.quality===r.data.movie.torrents.map((function(e){return parseInt(e.quality.slice(0,-1))})).sort((function(e,t){return e-t}))[0]+"p"})),y(i.hash).then(l),console.log(r.data.movie);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m()}),[]),f.get("id")?n&&s?r.a.createElement(S,{movie:n.data.movie,streamConfig:s}):"Loading":"ID IS REQUIRED"},L=n(214),W=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],i=function(){var e=Object(p.a)(v.a.mark((function e(t){var n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.data.movies,a=Object(L.a)(new Set(n.map((function(e){return e.genres})).flat())),r=a.map((function(e){return{genre:e,movies:n.filter((function(t){return t.genres.includes(e)}))}})),c(r),console.log(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){g().then(i)}),[]),r.a.createElement("div",null,r.a.createElement(f,{movie:n?n[0].movies[0]:void 0}),r.a.createElement("div",{style:{marginTop:"2rem"}},n?n.map((function(e){return r.a.createElement(s,{title:e.genre,isLargeRow:e.movies.length>=5,movies:e.movies})})):r.a.createElement(r.a.Fragment,null)))},I=n(213),T=n.n(I),B=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2);t[0],t[1];return Object(a.useEffect)((function(){(new T.a).add("259388538FA3C1872D971486F3421D27A557B026",(function(e){e.files.find((function(e){return e.name.endsWith(".mp4")})).appendTo("body")}))}),[]),r.a.createElement("div",null,"Kabeer")};var C=function(){var e=Object(k.c)().pathname;return r.a.createElement("div",{className:"app"},r.a.createElement(m,null),"/"===e&&r.a.createElement(W,null),"/watch"===e&&r.a.createElement(R,null),"/test-watch"===e&&r.a.createElement("div",null,r.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[216,1,2]]]);
//# sourceMappingURL=main.185720e2.chunk.js.map