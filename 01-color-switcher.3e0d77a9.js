!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]"),a=null;e.addEventListener("click",(function(r){e.setAttribute("disabled","disabled"),d.removeAttribute("disabled"),a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.style.backgroundColor}),1e3)})),d.addEventListener("click",(function(t){clearInterval(a),e.hasAttribute("disabled")&&(e.removeAttribute("disabled"),d.setAttribute("disabled","disabled"))})),d.setAttribute("disabled","disabled")}();
//# sourceMappingURL=01-color-switcher.3e0d77a9.js.map