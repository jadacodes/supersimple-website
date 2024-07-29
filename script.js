var settingsmenu=document.querySelector(".settings-menu")
var darkBtn=document.getElementById("dark-btn");

function settingsMenuToggle
(params) {
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function () { 
    darkBtn.classList.toggle("dark-btn-on");
    
}