!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");e.addEventListener("click",(function(o){isActive="true",e.setAttribute("disabled","disabled"),console.log(o.target),timerId=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));var e=t.style.backgroundColor;console.log(e),localStorage.setItem("bgColor",e)}),1e3),console.log(localStorage.value)})),o.addEventListener("click",(function(t){clearInterval(timerId),console.log(t.target),e.hasAttribute("disabled")&&e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.fa45f84d.js.map