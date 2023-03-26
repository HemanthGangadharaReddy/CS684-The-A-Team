var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();
const axios = require('axios');
const API_KEY = 'f198edf37ab348b9a5871abb6236ca84';
const cors = require('cors');

module.exports = app
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors({
    origin: '*'
}));

const session = require('express-session');
// Set up session middleware
app.use(session({
  secret: 'Youwillneverguess',
  resave: false,
  saveUninitialized: true,
}));



mongoose.connect('mongodb://0.0.0.0:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"));

  app.post("/signup", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.confirmpassword;
  
    if (password !== password2) {
      return res.send(
        '<script>alert("Passwords do not match!"); window.location.href = "/signup";</script>'
      );
    }
    else if(password.length < 8 ) {
        return res.send(
            '<script>alert("Password should be atleast 8 characters!"); window.location.href = "/signup";</script>'
          );
    }
  
    var data = {
      name: name,
      email: email,
      password: password
    };
  
    db.collection("users").insertOne(data, (err, collection) => {
      if (err) throw err;
      return res.send(
        '<script>alert("Record Inserted Successfully!"); window.location.href = "/signin";</script>'
      );
    });
  });

app.get("/", (req, res) => {
    res.set({
       "Allow-access-Allow-Origin": '*'
    })

   res.redirect("/g_home")
}).listen(3000);



app.get("/g_home", async (req, res) => {
    const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`);
    const articles = data.articles;
    res.render('home', { articles });
});



app.get('/signin', (req, res) => {
    res.sendFile('/Users/ayushchamoli/Desktop/prog/newsss/javascript_signup/public/signin.html');
  });

  app.get('/signup', (req, res) => {
    res.sendFile('/Users/ayushchamoli/Desktop/prog/newsss/javascript_signup/public/signup.html');
  });

  app.get('/home', (req, res) => {
    res.redirect("/top-headlines");
  });



app.post('/profile', async (request, response) => {

  try {

    const general = request.body.General;
    const business = request.body.Business;
    const entertainment = request.body.Entertainment;
    const health = request.body.Health;
    const science = request.body.Science; 
    const sport = request.body.Sports;
    const technology = request.body.Technology; 

  const { user } = request.session;
  if (user) {

        const filter  = {'name':user.username}
        const update = {$set:{General: general,
          Business:business,
          Entertainment: entertainment,
          Health:health,
          Science:science,
          Sport:sport,
          Technology:technology}
        };


        db.collection('users').updateOne(filter, update, function(err,result){

          if (err) throw err;
          // console.log(result);
          

         
        const usermail2 = db.collection('users').findOne({ name: user.username }, (err, res) => {
            if (res == null) {
                response.send("Invalid information! Please create account first");
                
            }
            else if (err) throw err;

            
            request.session.user = {username:user.username,
              general: res.General,
              business:res.Business,
              entertainment:res.Entertainment,
              health: res.Health,
              science: res.Science,
              sport :res.Sport,
              technology:res.Technology};

      
        });
         

     
          
          return response.redirect("/update_session")
      
        });


  } else {
    response.send("Please log in to perform such an action.<a href='/signin'>login</a>", 401);

  } 
  }

  catch (error) {
        console.log(error);
        response.send("Something wrong! 401", 401);
    }


});


app.get("/update_session", async (request, response) => {
    try {
        
        const {user} = request.session;
        const usermail = db.collection('users').findOne({ name: user.username }, (err, res) => {
            if (res == null) {
                response.send("Invalid information! Please create account first");
                
            }
            else if (err) throw err;


           
                request.session.user = {username:res.name,
                general:res.General,
                business:res.Business,
                entertainment:res.Entertainment,
                health: res.Health,
                science: res.Science,
                sport :res.Sport,
                technology:res.Technology};
                return response.redirect('/top-headlines',);
          

        });
    }
    catch (error) {
        return response.redirect("/top-headlines")
        // response.send("Invalid information! 401");

    }

})



app.post("/signin", async (request, response) => {
    try {
        //adding
        const username = request.body.username;
        const password = request.body.password;

        const usermail = db.collection('users').findOne({ name: username }, (err, res) => {
            if (res == null) {
                response.send("Invalid information! Please create account first");
                
            }
            else if (err) throw err;


            if (res.password === password) {


                request.session.user = {username:res.name,
                general:res.General,
                business:res.Business,
                entertainment:res.Entertainment,
                health: res.Health,
                science: res.Science,
                sport :res.Sport,
                technology:res.Technology};


                return response.redirect('/top-headlines',);
            }
            else {
                response.send("Invalid Password! 401");
            }


        });
    }
    catch (error) {
        response.send("Invalid information! 401");
    }

})


app.get('/profile', (req, res) => {
  const { user } = req.session;

  if (user) {
    res.render('profile', {user});
  } else {
    res.send("Please log in to perform such an action.<a href='/signin'>login</a>");
  }
});



app.get("/category/:cat", async (req, res) =>{

      const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${req.params.cat}&apiKey=${API_KEY}`);
      const articles = data.articles;
      const { user } = req.session;
      res.render('cat', { articles, user });    

});


app.get('/top-headlines', async (req, res) => {

      const { user } = req.session;

      if (user){      
      const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`);
      const articles = data.articles;
      
      res.render('index', { articles, user });
      }

      else{

        res.send("Please log in to perform such an action.<a href='/signin'>login</a>", 401);
      }

  });


console.log("Listening on Port 3000");


