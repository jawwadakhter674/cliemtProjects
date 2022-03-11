fetch('./secondJson.json')
    .then(response => response.json())
    .then(data => {

        const filterData = data.filter((el) => {
            return el.Make === "Lincoln"
        });

        // console.log(modelFilter)
        var content = document.getElementById("content")


        filterData.forEach((v) => {

            content.innerHTML += `
    "${v.Model}": {</br>
        "${v.Years}": ["${v.low}", "${v.high}", "${v.fog}"],</br>
      } , 
    
    
    </br>`
        })


    }
    )

console.log(makeObject)
console.log(Object.keys(makeObject).length)
//     Fog Lights: "H8F"
// High Beam: "H7"
// Low Beam: "H7"

var make = {

    "Isuzu": {




    }
}