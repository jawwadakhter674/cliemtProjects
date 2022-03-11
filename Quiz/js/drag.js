//Globally variable
const draggableItems = document.querySelector(".draggable-items");
const matchingPairs = document.querySelector(".matching-pairs");
const drag_next = document.getElementById('drag_next')
const popup_view = document.getElementById("popup_view")
let correct_item = 0;
let total=0;
const totalDraggableItems = 6;
const totalMatchingPairs = 6;
let draggableElements;



//here we generate a randome array
function randomArray(number_of_total_draggebleItem, prevArray) {
  let res = [];
  let generatedArray = [...prevArray];
  console.log(generatedArray)
  for(let i=1; i<=number_of_total_draggebleItem; i++) {
    const index_of_random_array = Math.floor(Math.random()*generatedArray.length);
    res.push(generatedArray[index_of_random_array]);
    generatedArray.splice(index_of_random_array, 1);
  }
  
  return res;
}


function StartDragDrop() {
  const randomDraggableBrands = randomArray(totalDraggableItems, items);
  const randomDroppableBrands = totalMatchingPairs<totalDraggableItems ? randomArray(totalMatchingPairs, randomDraggableBrands) : randomDraggableBrands;
  const sorted_brand = [...randomDroppableBrands].sort((a,b) => a.brandName.toLowerCase().localeCompare(b.brandName.toLowerCase()));

  // Create "draggable-items" and append to DOM

  for (let i = 0; i < randomDraggableBrands.length; i++) {
    draggableItems.insertAdjacentHTML("beforeend", `
      <i class="fab fa-${randomDraggableBrands[i].iconName} draggable" draggable="true" style="color: ${randomDraggableBrands[i].color};" id="${randomDraggableBrands[i].iconName}"></i>
      `);
  }

  // Create "matching-pairs" and append to DOM
  // for(let i=5; i<items.length; i--) {
  //   matchingPairs.insertAdjacentHTML("beforeend", `
  //   <div class="matching-pair">
  //   <span class="label">${items[i].brandName}</span>
  //   <span class="droppable" data-brand="${items[i].iconName}"></span>
  //   </div>
  //   `);
  // }


  
// sorted_brand.forEach(item => {
//     matchingPairs.insertAdjacentHTML("beforeend", `
//       <div class="matching-pair">
//       <span class="label">${item.brandName}</span>
//       <span class="droppable" id="${item.iconName}" data-brand="${item.iconName}"></span>
//       </div>
//       `);
//   })

  for(let i=0; i<sorted_brand.length; i++) {
    matchingPairs.insertAdjacentHTML("beforeend", `
      <div class="matching-pair">
        <span class="label">${sorted_brand[i].brandName}</span>
        <span class="droppable" data-brand="${sorted_brand[i].iconName}"></span>
      </div>
    `);
  }

  draggableElements = document.querySelectorAll(".draggable");
  droppableElements = document.querySelectorAll(".droppable");

  draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);

  });

  droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
  });
}

// Drag and Drop Functions

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id); // or "text/plain"
}

function dragEnter(event) {
  if (event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if (event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
    event.preventDefault();
  }
}

function dragLeave(event) {
  if (event.target.classList && event.target.classList.contains("droppable") && !event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function drop(event) {
  event.preventDefault();
  event.target.classList.remove("droppable-hover");
  const draggableElementBrand = event.dataTransfer.getData("text");
  const droppableElementBrand = event.target.getAttribute("data-brand");

  

  if (droppableElementBrand===draggableElementBrand) {
    const draggableElement = document.getElementById(draggableElementBrand);
    event.target.classList.add("dropped");
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "true");
    event.target.innerHTML = `<i class="fab fa-${draggableElementBrand} droppitem" id="${draggableElementBrand}"  style="color: ${draggableElement.style.color};"></i>`;
    correct_item++;
    
    console.log(correct_item)
    

  }else{
    
 popup_view.style.display="block"
 document.getElementById('popup_heading').innerHTML="Try Again"
  }
}





drag_next.addEventListener('click', () => {
  // const dropitems = document.querySelectorAll('.droppable')
  // const dragitem = document.querySelectorAll('.draggable')
  // const iconsDrop = document.querySelectorAll('.droppitem')
  // if(correct_item===Math.min(totalMatchingPairs, totalDraggableItems)) { 
  //  return window.location.href="./../pages/page2.html"
  // }
  // console.log(iconsDrop[0].getAttribute("id"))
  // iconsDrop.forEach(value=>{
  //   console.log(value.getAttribute('id'))
  // })
  // if ( dropitems[5].getAttribute("id") === iconsDrop[0].getAttribute("id")  &&  dropitems[4].getAttribute("id") === iconsDrop[1].getAttribute("id")
  //     && dropitems[3].getAttribute("id") === iconsDrop[2].getAttribute("id")&&dropitems[2].getAttribute("id") === iconsDrop[3].getAttribute("id")
  //     &&dropitems[1].getAttribute("id") === iconsDrop[4].getAttribute("id")&&dropitems[0].getAttribute("id") === iconsDrop[5].getAttribute("id")
  // ){

  //   console.log("match")
  // }


// if( iconsDrop[0].getAttribute("id") !== dropitems[5].getAttribute("id")|| iconsDrop[1].getAttribute("id") !== dropitems[4].getAttribute("id")
// ||iconsDrop[2].getAttribute("id") !== dropitems[3].getAttribute("id")|| iconsDrop[3].getAttribute("id") !== dropitems[2].getAttribute("id")||
// iconsDrop[4].getAttribute("id") !== dropitems[1].getAttribute("id")||iconsDrop[5].getAttribute("id") !== dropitems[0].getAttribute("id")
// ){
// correct_item--;
// console.log("hello")
// console.log(correct_item)
// }

// console.log(correct_item)


// let dropDown=5;
//   for (let i = 0; i < iconsDrop.length; i++) {
//     const element = iconsDrop[i].getAttribute("id");
//     var dropping = dropitems[dropDown].getAttribute("id")
//     console.log(element)

//     // console.log(dropitems[dropDown].getAttribute("data-brand"))
//     if(element===dropping){
//       console.log("success")
//     }
//     dropDown--
    
//   }


// let setDrop=0;
// iconsDrop.forEach(value=>{
//   console.log(dropitems[setDrop])
//   console.log(value.getAttribute("name"))
//   setDrop++
// })


  // console.log(iconsDrop[0].getAttribute("id")===dropitems[5].getAttribute("data-brand"))

  // console.log(dropitems[0].getAttribute("data-brand"))
  // if(dropitems[0].getAttribute("data-brand")===dragitem[5].getAttribute("id")){
  //   console.log("match")
  // }

  // console.log(draggableItems[0].getAttribute("id"))
  // console.log(droppabeItems[5].getAttribute("data-brand"))
  // draggableItems.forEach(value=>{
  //   console.log(value)
  // })

  if(total>0 && correct_item==6){
        
 popup_view.style.display="block"
 
 document.getElementById('popup_heading').innerHTML="Try at once without incorrect placement"
 document.getElementById('popup_heading').style.fontSize="15px"
 document.getElementById('popup_heading').style.textAlign="center"
 
}
else{
  
}
if(correct_item==6 && total==0){
    // popup_view.style.display="block"
    // document.getElementById('popup_heading').innerHTML="congrats you pass this"
    // document.getElementById('popup_heading').style.fontSize="15px"
    // document.getElementById('popup_heading').style.textAlign="center"
   return window.location.href="./../pages/page2.html"

  }




})

try_again.addEventListener('click', (e) => {
  popup_view.style.display = "none"
  total++
})



StartDragDrop();



