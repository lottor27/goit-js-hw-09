const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let r=null;e.addEventListener("click",(function(a){isActive="true",e.setAttribute("disabled","disabled"),d.removeAttribute("disabled"),r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor}),1e3)})),d.addEventListener("click",(function(t){clearInterval(r),e.hasAttribute("disabled")&&(e.removeAttribute("disabled"),d.setAttribute("disabled","disabled"))})),d.setAttribute("disabled","disabled");
//# sourceMappingURL=01-color-switcher.c700d45c.js.map
