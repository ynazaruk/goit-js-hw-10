import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const l=document.querySelector(".form");l.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector('input[name="delay"]').value,o=document.querySelector('input[name="state"]:checked'),n=o?o.value:null;new Promise((s,a)=>{setTimeout(()=>{n==="fulfilled"?s(t):a(t)},t)})});promise.then(e=>{i.success({title:"Notification",message:`✅ Fulfilled promise in ${delay}ms`,position:"topRight"})}).catch(e=>{i.error({title:"Notification",message:`❌ Rejected promise in ${delay}ms`,position:"topRight"})});
//# sourceMappingURL=commonHelpers2.js.map
