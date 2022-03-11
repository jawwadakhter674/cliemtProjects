let form = document.querySelector('form')
const alertSection=document.querySelector('#alertSection')


form.onsubmit = sendData;

function sendData(e){
e.preventDefault()
let formData = new FormData(form)
let params = {
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
       name:formData.get('name') ,
    //    name:formData.get('email') ,
    //    name:formData.get('password') ,
    //    name:formData.get('password1') ,
       
    }),
    method:"POST"
}
array_of_error=[]
fetch('http://localhost:5000/dashboard',params)
.then(response=>response.json())
.then(data=> {
    console.log(data)
    array_of_error.push(data)
})
.catch(err=>console.log(err))

}