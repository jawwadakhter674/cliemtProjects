const read_more_btn = document.getElementById("read")
const article_detail = document.getElementById("article_detail")

read_more_btn.addEventListener("click",()=>{
    article_detail.classList.toggle("show_more")
    if(read_more_btn.innerText==="Read More"){
        read_more_btn.innerText="Read Less"
    }else{
        read_more_btn.innerText="Read More"
    }
})
