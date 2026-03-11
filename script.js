    const menu = document.getElementById("menu");
    const btn = document.getElementById("menu-btn");
    btn.addEventListener("click", function(e){
        menu.classList.toggle("open");
        e.stopPropagation();
    });
    document.addEventListener("click", function(e){
        if(!menu.contains(e.target) && !btn.contains(e.target)){
            menu.classList.remove("open");
        }
    });