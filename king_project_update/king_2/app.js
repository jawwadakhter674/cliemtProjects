// Globall Variable
const insertTable = document.getElementById("insert_table")
const sort_table = document.getElementById("sort_table")
const sort_table_price = document.getElementById("sort_table_price")
const sort_table_name = document.getElementById("sort_table_name")
const submit = document.getElementById("submit")
const reset = document.getElementById("reset")
const popup_heading= document.getElementById("popup_heading")
const popup_view = document.getElementById("popup_view")
const unit = document.getElementById("unit")
const info = document.getElementById("info")
const thank_you=document.getElementById("div_thank_you")
const url = "./product.json"



window.addEventListener('load',()=>{
    fetch(url)
    .then(res => res.json())
    .then(dataResponse => {
        
        // Sort by Product ID
        sort_table.addEventListener('click', (e) => {
            if (sort_table.getAttribute("data-name") === "desc") {
                dataResponse.sort((a, b) => {
                    return b.product_id - a.product_id;
                })
                sort_table.setAttribute("data-name", "asc")
            } else {
                dataResponse.sort((a, b) => {
                    return a.product_id - b.product_id;
                })
                sort_table.setAttribute("data-name", "desc")
            }
            getData(dataResponse)
        })
        
        // Sort by Product Price
        sort_table_price.addEventListener('click', (e) => {
            if (sort_table_price.getAttribute("data-name") === "asc") {
                dataResponse.sort((a, b) => {
                    return a.product_price - b.product_price
                })
                sort_table_price.setAttribute("data-name", "desc")
            } else {
                dataResponse.sort((a, b) => {
                    return b.product_price - a.product_price
                })
                sort_table_price.setAttribute("data-name", "asc")
            }
            getData(dataResponse)
        })
        
        
        // Sort by Product Description
        sort_table_name.addEventListener('click', (e) => {
            if (sort_table_name.getAttribute("data-name") === "asc") {
                dataResponse.sort((a, b) => a.product_name > b.product_name ? 1 : -1)
                sort_table_name.setAttribute("data-name", "desc")
            } else {
                dataResponse.sort((a, b) => a.product_name < b.product_name ? 1 : -1)
                sort_table_name.setAttribute("data-name", "asc")
            }
            getData(dataResponse)
        })



        getData(dataResponse)
        
    })
    
})
// Print Data into DOM

const getData = (response) => {
    insertTable.innerHTML = ""
    response.forEach(v => {
        insertTable.innerHTML += `
       <tr class="table_row">
       <td class="product_id">${v.product_id}</td>
       <td class="product_img">
           <div class="img_container">
               <img height="100%" width="100%"
                   src="${v.product_image}"
                   alt="">
               </div> 
       </td>
       <td class="product_name">${v.product_name}</td>
       <td class="product_description">${v.product_description} </td>
       <td class="price">$${v.product_price}</td>
       <td class="quantity"><input id="${v.product_id}" type="text" /></td>
   </tr>
       `

    })
}


var array_of_selected_item=[]
submit.addEventListener("click",()=>{
var inpuetList = document.querySelectorAll("input")
for (let i = 0; i < inpuetList.length; i++) {
    const element = inpuetList[i];
    if(element.value){
        array_of_selected_item.push(element.parentElement.firstChild)
    }else{

    }
    
}
console.log(array_of_selected_item)
array_of_selected_item.forEach((v,i)=>{
  info.innerHTML +=`
  <div class="info_list">
  <h3>ProductID:${v.getAttribute("id")}</h3>
  <h3>Quantity:${v.value}</h3>
</div><br>`
})

popup_view.style.display="block"

})

document.getElementById("confirmed").addEventListener("click",()=>{
    var inpuetListItem = document.querySelectorAll("input")
  for (let i = 0; i < inpuetListItem.length; i++) {
      const element = inpuetListItem[i];
      element.value=""
      
  }
    popup_view.style.display="none"
    thank_you.style.display="block"
    
})

reset.addEventListener("click",()=>{
    var inpuetList = document.querySelectorAll("input")
    alert("Are you sure you want to clear your selection")
    for (let i = 0; i < inpuetList.length; i++) {
        const element = inpuetList[i];
        element.value=""
        
    }
})



