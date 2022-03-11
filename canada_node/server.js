import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser'
import { check, validationResult } from 'express-validator'
import cors from 'cors'
const app = express();


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');



const urlEncoded = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json())
app.use(urlEncoded)
app.use(express.static("public"))
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
  res.render('home');
});
app.get('/cwh', (req, res) => {
  res.render('cwh');
});
app.get('/registration', (req, res) => {
  res.render('registration');
});
app.get('/login', (req, res) => {
  res.render('login');
});


app.post('/detail',[
  check('username')
  .not()
  .isEmpty()
  .withMessage("username is empty")
  .isAlphanumeric()
  .withMessage("user name must be only character or number")
  
],(req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json(
      { errors: errors.array() }

    );

  }

  if (errors.isEmpty()) {
  
    res.render('dashboard', {
      title: 'Lets Play',
      username: req.body.username,

    });
  }
 
})











// registration to dashboard
app.post('/dashboard', [
  check('name')
    .not()
    .isEmpty()
    .withMessage("name is empty")
    .isLength(3)
    .withMessage("name must be 3 character")
    .isAlpha()
    .withMessage("name contain only character")


  , check('email')
    .not()
    .isEmpty()
    .withMessage("email is not valid")

  , check('password')
    .not()
    .isEmpty()
    .withMessage("password is empty")
    .isAlphanumeric()
    .withMessage("password contain number and chracter")

  , check('password1')
    .isAlphanumeric()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password does not match');

      }

      // Indicates the success of this synchronous custom validator
      return true;
    }),
], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json(
      // { errors: ` ${errors.array()[0].param} : ${errors.array()[0].msg}`}
      { errors: errors.array() }

    );

  }
  //   res.status(202).render('cwh')
  if (errors.isEmpty()) {
    //   res.sendFile('')
    //   res.send(`<h1 style="text-transform:uppercase;">name:     ${req.body.name} </h1>`)
    res.render('dashboard', {
      title: 'Lets Play',
      username: req.body.name,

    });
  }
  // if(res.status(202)){
  // res.render('cwh')
  //     success:{"ok"}
  // }
  // console.log(req.body)



})





// Server listen
app.listen(5000, () => console.log('server is listening'));









