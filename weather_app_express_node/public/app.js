/*Variables */
const form = document.querySelector('.form_data');
const icons = document.querySelectorAll('.entry__icon');
const date = document.getElementById('date')
const temp = document.getElementById('temp')
const user_feeling = document.getElementById('content')
// Basic Api url
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',us&appid=661daa7377189bfe425b6af1f07ac279&units=imperial';

//Get the date from javascript
let d = new Date();
let newDate = (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear();

// we fetch data by submit button and get data and store it
document.getElementById('submit_btn').addEventListener('click', (e) => {
  e.preventDefault();
  // to get user input value from user
  const newZip = document.getElementById('zip').value;
  const content = document.getElementById('feelings').value;
  const temp = document.getElementById('temp')
  // fetch data from open weather map 
  getWeatherData(baseURL, newZip, apiKey)
    .then(user => postData('/add', { date: newDate, temp: user.main.temp, content }))
    .then(newData => updateDomData())

  // reset  form
  form.reset();
});

/* Function to GET API*/
const getWeatherData = async (baseURL, newZip, apiKey) => {
  // res equals to the result of fetch function
  try {
    const res = await fetch(baseURL + newZip + apiKey);
    const user = await res.json();
    return user;
  } catch (error) {
    console.log("error", error);
  }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
  try {
    const req = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: JSON.stringify({
        date: data.date,
        temp: data.temp,
        content: data.content
      })
    })
    const newData = await req.json();
    return newData;
  }
  catch (error) {
    console.log(error);
  }
};


const updateDomData = async () => {
  try {
    const request = await fetch('/data');
    const user_request = await request.json()
    // update new entry values
    date.innerHTML = user_request.date;
    temp.innerHTML = user_request.temp;
    user_feeling.innerHTML = user_request.content;
    // show icons on the page
    icons.forEach(icon =>
      icon.style.opacity = '1'
    );
  }
  catch (error) {
    console.log("error", error);
  }
};
