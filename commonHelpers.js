/* empty css                      */import{f as s}from"./assets/vendor-2b44ac2e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const u=document.querySelector("#datetime-picker");document.querySelector("button[data-start]");s(u,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){if(console.log(r[0]),r[0]<Date.now())return alert("Please choose a date in the future");r[0]}});
//# sourceMappingURL=commonHelpers.js.map
