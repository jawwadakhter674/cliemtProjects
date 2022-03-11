// jquerry code fro date picker
$(function () {
    $("#datepicker").datepicker();
});


// Global Variable which we use
const fetchData= document.getElementById("fetchData")
const dynamicData = document.getElementById("dynamicData")
const popup_view = document.getElementById("popup_view")
const result_heading = document.getElementById("result_heading")
const dateData = document.getElementById("datepicker");



fetchData.addEventListener("click",()=>{
    const dateValue = dateData.value
    // split date value by month day and year
    const month=dateValue.substring(0,2)
    const day = dateValue.substring(3,5)
    const year = dateValue.substring(6,10)
    const date = `${year}-${month}-${day}`
    
    result_heading.innerHTML=`Result for ${date}`

 
if(dateData.value==""){
    alert("please insert your date")
}
// Fetch Data bt date from datePicker

    fetch(`https://data.winnipeg.ca/resource/it4w-cpf4.json?issue_date=${date}T00:00:00.000`)
    .then(response => response.json())             
    .then(data =>{

        // if user click button without date value
        if(data.length==0){
           const h = document.createElement("h3")
           h.innerHTML=`there is no issue date kindly check another date instead of recent month`
           dynamicData.appendChild(h)
        }
     

        // print data from result popup
     data.forEach(v=>{
      const p = document.createElement("p")
      p.innerHTML=`Street Name: ${v.street_name} and Type: ${v.permit_type} `
      dynamicData.appendChild(p)

    })

    // then display block of popup
    popup_view.style.display="block"

 })


})

// close button
const crossBtn=()=>{
    popup_view.style.display="none"
    dateData.value=""
    dynamicData.innerHTML=""
}



