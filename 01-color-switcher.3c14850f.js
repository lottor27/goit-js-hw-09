const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");e.addEventListener("click",(function(o){e.setAttribute("disabled","disabled"),timerId=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;const e=t.style.backgroundColor;console.log(e)}),1e3)})),o.addEventListener("click",(function(t){clearInterval(timerId),console.log(t.target),e.hasAttribute("disabled")&&e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.3c14850f.js.map
