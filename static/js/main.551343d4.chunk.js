(this["webpackJsonpworkshop-react"]=this["webpackJsonpworkshop-react"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(19)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/do.18fd3f6f.wav"},function(e,n,t){e.exports=t.p+"static/media/re.217b943a.wav"},function(e,n,t){e.exports=t.p+"static/media/mi.1f26c778.wav"},function(e,n,t){e.exports=t.p+"static/media/fa.a787534a.wav"},function(e,n,t){e.exports=t.p+"static/media/sol.785a33d2.wav"},function(e,n,t){e.exports=t.p+"static/media/la.10af03f3.wav"},function(e,n,t){e.exports=t.p+"static/media/si.70924435.wav"},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(2),c=t.n(i),r=(t(9),t(3));t(10),t(11);var s=function(){var e=Object(o.useState)(""),n=Object(r.a)(e,2),i=n[0],c=n[1],s=[{nombre:"DO",link:t(12),tieneSostenido:!0},{nombre:"RE",link:t(13),tieneSostenido:!0},{nombre:"MI",link:t(14)},{nombre:"FA",link:t(15),tieneSostenido:!0},{nombre:"SOL",link:t(16),tieneSostenido:!0},{nombre:"LA",link:t(17),tieneSostenido:!0},{nombre:"SI",link:t(18)}];return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"titulo"},a.a.createElement("h1",null,"Piano"),a.a.createElement("h2",null,"Hecho con amor por Nicky")),a.a.createElement("div",{className:"contenedor"},s.map((function(e){return a.a.createElement("div",{className:"nota ".concat(i===e.nombre&&"estaSonando"),onClick:function(){return function(e){c(e.nombre),new Audio(e.link).play(),console.log(e),setTimeout((function(){c(null)}),300)}(e)}},e.tieneSostenido&&a.a.createElement("div",{className:"negra"}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.551343d4.chunk.js.map