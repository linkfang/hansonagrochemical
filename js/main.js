let han={
    init: function(){
        document.querySelector("#humburger").addEventListener("click", ()=>{
            document.querySelector(".navHum").classList.toggle("disappear");
        })

        document.querySelector(".header").addEventListener("mouseleave", ()=>{
            document.querySelector(".navHum").classList.add("disappear");
        })
    }
}

document.addEventListener("DOMContentLoaded", han.init);