const form = document.getElementById('form');
const username = document.getElementById('username');
const username_last = document.getElementById('username_last');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const age = document.getElementById("age")
const graduated1 = document.getElementById("graduated1")
const graduated2 = document.getElementById("graduated2")

const popup_view = document.getElementById("popup_view")
const success_validate = document.getElementById("success_validate")

//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success colour
var show_array_of_success=[]
var count=0
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    // show_array_of_success.push(count)
    // count++
    
}
console.log(count)

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}


//check input Length
function checkLength(input, min ,max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
    }else {
        showSucces(input);
    }
}
function checkLengthAge(input, min ,max) {
    if(input.value > min) {
        showError(input, `${getFieldName(input)} must be at ${min} and less ${max} `);
    }else if(input.value < max) {
        showError(input, `${getFieldName(input)} must be at ${min} and less ${max} `);
    }else {
        showSucces(input);
    }
}

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}


//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2,age,graduated1,graduated2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkLength(username_last,3,15);
    checkEmail(email);
    checkLengthAge(age,18,60);
   
    checkPasswordMatch(password, password2);
    if(password.value === password2.value && password.value !="" && password2.value !="" && age.value>=18 ){
        popup_view.style.display="block" 
    }

 
    
});


success_validate.addEventListener("click",{
    
})