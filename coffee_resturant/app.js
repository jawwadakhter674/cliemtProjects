window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
} else {
    navbar.classList.remove("sticky");
    
    
  }
}


const btn_search = document.querySelectorAll(".btn_search")
const search = document.getElementById("search")
const inpt = document.getElementById("inpt")

search.addEventListener("click",()=>{
    btn_search.forEach((v)=>{
        v.style.display='none'
        

    })
    inpt.style.display='block'
    
})

console.log(btn_search)