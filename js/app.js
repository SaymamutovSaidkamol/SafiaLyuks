const headerEl = document.querySelector(".header")
const backTop = document.querySelector(".back__top")

window.addEventListener("scroll", ()=>{
    let scrolPoint = document.documentElement.scrollTop
    if(scrolPoint > 0){
        headerEl.classList.add("shrink")
    }else{
        headerEl.classList.remove("shrink")
    }

    if (scrolPoint > 200) {
        backTop.style.transform = "scale(1)"
    }else{
        backTop.style.transform = "scale(0)"

    }
})