let han={
    init: ()=>{
        document.getElementById("humburger").addEventListener("click", ()=>{
            document.querySelector(".navHum").classList.toggle("disappear");
        })

        document.querySelector(".header").addEventListener("mouseleave", ()=>{
            document.querySelector(".navHum").classList.add("disappear");
        })

        han.addListeners()
    },

    addListeners: ()=>{
        document.getElementById("overlay").addEventListener("click", han.hideModalNews)
        document.getElementById("closeModalBtn").addEventListener("click", han.hideModalNews)

        let newsList = document.getElementById("newsList")
        let newsArray = newsList.querySelectorAll(".newsItem")
        newsArray.forEach( item => item.addEventListener("click", han.showNews))
    },

    showNews: (ev)=>{
        document.getElementById("overlay").className = ""
        document.getElementById("modalNews").className = ""

        let id = ev.currentTarget.getAttribute("data-id")
        let currentNews = newsData.find( item => item.id == id)

        document.getElementById("newsTitle").textContent = currentNews.title
        document.getElementById("newsDate").textContent = currentNews.releaseDate
        document.getElementById("newsContent").innerHTML = currentNews.content
    },

    hideModalNews: ()=>{
        document.getElementById("overlay").className = "hide"
        document.getElementById("modalNews").className = "hide"
    }
}

document.addEventListener("DOMContentLoaded", han.init);