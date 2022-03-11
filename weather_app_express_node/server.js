// import express cors and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// we set empty object to act whole dom
let projectData = {};


// app configure with express
const app = express();
//initialize port listener setup
const port = process.env.USER_PORT||8000;
/*                     Middleware                           */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// connect backend with our public folder
app.use(express.static('public'));

/*                        Routes                               */
// Route for post
app.post('/add', (req , res)=>{
  const {date,temp,content}=req.body
  projectData['date'] = date;
  projectData['temp'] = temp;
  projectData['content']=content;
  res.send(projectData);
}
);

// callback function for get route /add
app.get('/data', (req, res) =>{
  res.send(projectData);
});
// Listening port 
app.listen(port,()=>{
  console.log(`server listening in ${port}`)
})