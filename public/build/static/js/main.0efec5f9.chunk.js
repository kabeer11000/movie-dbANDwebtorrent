(this["webpackJsonpreact-clone"]=this["webpackJsonpreact-clone"]||[]).push([[0],{100:function(e,t){},116:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(44),c=n.n(o),i=(n(61),n(62),n(45));n.n(i).a.create({baseURL:"https://api.themoviedb.org/3"}),n(80),n(94),n(97);var l=function(e){var t=e.title,n=e.movies,a=e.isLargeRow;return r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"row_posters"},n.map((function(e){return r.a.createElement("a",{href:"/watch?id="+e.id},r.a.createElement("img",{key:e.id,onClick:function(){},className:"row_poster ".concat(a&&"row_posterLarge"),src:"".concat(a?e.medium_cover_image:e.background_image_original),alt:e.title}))}))),r.a.createElement("div",{style:{padding:"40px"}}))},s="Your TMDB Api_Key";"/trending/all/week?api_key=".concat(s,"&language=en-US"),"/discover/tv?api_key=".concat(s,"&with_network=123"),"/movie/top_rated?api_key=".concat(s,"&language=en-US"),"/discover/movie?api_key=".concat(s,"&with_genres=28"),"/discover/movie?api_key=".concat(s,"&with_genres=35"),"/discover/movie?api_key=".concat(s,"&with_genres=27"),"/discover/movie?api_key=".concat(s,"&with_genres=10749"),"/discover/movie?api_key=".concat(s,"&with_genres=99"),n(42);var u=function(e){var t=e.movie;return r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n        "'.concat(null===t||void 0===t?void 0:t.background_image_original,'"\n        )'),backgroundPosition:"center center"}},r.a.createElement("div",{className:"banner_contents"},r.a.createElement("h1",{className:"banner_title"},(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)||(null===t||void 0===t?void 0:t.original_name)),r.a.createElement("div",{style:{padding:"1rem 0"},className:"banner_buttons"},r.a.createElement("a",{href:"/watch?id="+(null===t||void 0===t?void 0:t.id)},r.a.createElement("button",{className:"banner_button"},"Stream")),r.a.createElement("a",{target:"_blank",href:"https://youtube.com/watch?v="+(null===t||void 0===t?void 0:t.yt_trailer_id)},r.a.createElement("button",{className:"banner_button"},"Trailer"))),r.a.createElement("h1",{className:"banner_description"},null===t||void 0===t?void 0:t.synopsis)),r.a.createElement("div",{className:"banner--fadeBottom"}))},m=n(12);n(98);var d=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?o(!0):o(!1)})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement("div",{className:"nav ".concat(n&&"nav_black")},r.a.createElement("img",{className:"nav_logo",src:"https://docs.kabeercloud.tk/c/synced/6273fa5e26b3a---b862fb2e08f8e07c0f22f0ab9befb163.png",alt:"Netflix Logo"}),r.a.createElement("div",{hidden:!0},r.a.createElement("form",null,r.a.createElement("input",{type:"text"}))))},v=n(14),f=n.n(v),p=n(21),h=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json");case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id="+t);case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=window.location.protocol+"//"+window.location.host||"http://localhost:3000",b=n(7),E=n(16),y=n(48),_=(n(115),function(e){var t=r.a.useRef(null),n=r.a.useRef(null),a=e.options,o=e.onReady;return r.a.useEffect((function(){if(n.current)n.current.autoplay(a.autoplay),n.current.src(a.sources);else{var e=t.current;if(!e)return;var r=n.current=Object(y.a)(e,a,(function(){r.log("player is ready"),o&&o(r)}))}}),[a,t]),r.a.useEffect((function(){var e=n.current;return function(){e&&(e.dispose(),n.current=null)}}),[n]),r.a.createElement("div",{"data-vjs-player":!0},r.a.createElement("video",{ref:t,className:"video-js vjs-big-play-centered"}))}),k=function(e){var t=e.movie,n=r.a.useRef(null),a={autoplay:!1,controls:!0,responsive:!0,fluid:!0,sources:t.torrents.map((function(e){return{src:w+"/stream/v1/?hash="+e.hash+"&dn="+encodeURIComponent(t.title),type:"video/mp4"}}))};return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",minWidth:"100vw"}},r.a.createElement("div",{style:{padding:"5rem 1rem",minWidth:"70vw",minHeight:"auto",width:"100%",height:"auto"}},r.a.createElement(_,{options:a,onReady:function(e){n.current=e,e.on("waiting",(function(){e.log("player is waiting")})),e.on("dispose",(function(){e.log("player will dispose")}))}}),r.a.createElement("div",{style:{marginTop:"1rem"}},r.a.createElement("h1",{style:{color:"white"}},t.title),r.a.createElement("p",{style:{color:"whitesmoke"}},t.description_full),r.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(t.yt_trailer_code),target:"_blank"},"Watch Trailer"))))},j=function(){var e=Object(a.useState)(),t=Object(m.a)(e,2),n=t[0],o=t[1],c=Object(E.b)()[0];return Object(a.useEffect)((function(){g(c.get("id")).then((function(e){o(e),console.log(e.data.movie)}))}),[]),c.get("id")?n?r.a.createElement(k,{movie:n.data.movie}):"Loading":"ID IS REQUIRED"},N=n(54),O=function(){var e=Object(a.useState)(),t=Object(m.a)(e,2),n=t[0],o=t[1],c=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.data.movies,a=Object(N.a)(new Set(n.map((function(e){return e.genres})).flat())),r=a.map((function(e){return{genre:e,movies:n.filter((function(t){return t.genres.includes(e)}))}})),o(r),console.log(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){h().then(c)}),[]),r.a.createElement("div",null,r.a.createElement(u,{movie:n?n[0].movies[0]:void 0}),n?n.map((function(e){return r.a.createElement(l,{title:e.genre,isLargeRow:e.movies.length>=5,movies:e.movies})})):r.a.createElement(r.a.Fragment,null))};var x=function(){var e=Object(b.c)().pathname;return r.a.createElement("div",{className:"app"},r.a.createElement(d,null),"/"===e&&r.a.createElement(O,null),"/watch"===e&&r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,n){},56:function(e,t,n){e.exports=n(116)},61:function(e,t,n){},62:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[56,1,2]]]);
//# sourceMappingURL=main.0efec5f9.chunk.js.map