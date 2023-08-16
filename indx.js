
const listBar= document.querySelector(".nav-list");
const check=document.querySelector("#check");
const checkaria=document.querySelector(".checkeria")

listBar.addEventListener("click", ()=>{
    check.checked=false;
    // listBar.style.transform="translateY(-460px)";
    listBar.classList.toggle("toggle");
})


checkaria.addEventListener("click", ()=>{
    listBar.classList.toggle("toggle");
})