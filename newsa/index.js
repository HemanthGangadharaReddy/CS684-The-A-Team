var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();
const axios = require('axios');
const API_KEY = '03219a27e845427586d16fe489b3aec8';
const cors = require('cors');
const NewsAPI = require('newsapi');

const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
const newsapi = new NewsAPI(API_KEY);
const pageSize = 10;
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
db.once('open', () => console.log(""));


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
      password: password,
      General:'general'
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

  const { user } = req.session;

  if (user){
  res.redirect("/articles")

  }else{
    const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`);
    const articles = data.articles;
    res.render('home', { articles,user });
  }
});



app.get('/signin', (req, res) => {
    res.sendFile('/Users/ayushchamoli/Desktop/prog/newsss/javascript_signup/public/signin.html');
  });

  app.get('/signup', (req, res) => {
    res.sendFile('/Users/ayushchamoli/Desktop/prog/newsss/javascript_signup/public/signup.html');
  });

  app.get('/home', (req, res) => {
    res.redirect("/articles");
  });



app.post('/profile', async (request, response) => {

  const { user } = request.session;

  try {

    const general = request.body.General;
    const business = request.body.Business;
    const entertainment = request.body.Entertainment;
    const health = request.body.Health;
    const science = request.body.Science; 
    const sport = request.body.Sports;
    const technology = request.body.Technology; 

  const { user } = request.session;

  var to_check = 0;

  if (general){
    to_check = to_check + 1;
  }


  if (business){
    to_check = to_check + 1;
  }


  if (entertainment){
    to_check = to_check + 1;
  }


  if (health){
    to_check = to_check + 1;
  }

    if (science){
    to_check = to_check + 1;
  }

    if (technology){
    to_check = to_check + 1;
  }

    if (sport){
    to_check = to_check + 1;
  }



  if (to_check < 1){
     const msg = "Atleast One must be selected"
     response.render('profile', {user, msg});
     return;
  }

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
              technology:res.Technology,
              home:"home"};

      
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
                technology:res.Technology,
             home:"home"};
                return response.redirect('/articles',);
          

        });
    }
    catch (error) {
        return response.redirect("/articles")
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
                technology:res.Technology,
                home:'home'};


                return response.redirect('/articles',);
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
    const msg = ""
    res.render('profile', {user, msg});
  } else {
    res.send("Please log in to perform such an action.<a href='/signin'>login</a>");
  }
});



app.get("/cat/:cat", async (req, res) =>{

      const { page = 1 } = req.query;
      global.user = {}

      try{
        global.user = req.session.user;
      }
      catch{

        global.user = {}
      }

      try {
        const response = await axios.get(`${NEWS_API_URL}&page=${page}&category=${req.params.cat}`);
        const { articles, totalResults } = response.data;
        const totalPages = Math.ceil(totalResults / pageSize);


        
        var current_cat = req.params.cat;
         res.render("cat", { articles, totalPages, currentPage: parseInt(page), user, current_cat});
        
        }

        catch (error) {
        console.error(error);
        res.render("error");
        }  

});




app.get("/category/:category", async (req, res) => {
    console.log("hello world");

    const response = await axios.get(`${NEWS_API_URL}&category=${req.params.category}`);
    const { articles } = response.data;
    res.status(200).send(articles)
});


app.get("/search/:search_terms", async(req, res) =>{
  const options = {
      q: req.params.search_terms,
      language: 'en',
      sortBy: 'publishedAt'
    };

  const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: options,
      headers: {
        'Authorization': API_KEY
      }
    });

  const {articles} = response.data;
  res.status(200).json(articles);

});

app.get('/search', async (req, res) => {
     const { page = 1 } = req.query;
     const pagesize2 = 30;
     const parms = req.query.parm;
     console.log(req.query.parm)
     global.user = {}

      try{
        global.user = req.session.user;
      }
      catch{

        global.user = {}
      }


  try {
    const options = {
      q: req.query.parm,
      language: 'en',
      sortBy: 'publishedAt'
    };
    
    const response = await axios.get(`https://newsapi.org/v2/everything`, {
      params: options,
      headers: {
        'Authorization': API_KEY
      }
    });

   const { articles, totalResults } = response.data;
   const totalPages = Math.ceil(totalResults / pagesize2);
   res.render("search", { articles, totalPages, currentPage: parseInt(page), user, parms});

  } catch (error) {

    res.status(500).json({ message: 'Server error' });
  }
});


app.get("/news/:user",  async (request, response) => {

        global.data = true;
        const usermail = await db.collection('users').findOne({ name: request.params.user }, (err, res) => {
            if (res == null) {
            global.data = false;  
            }

        });
        
        if (data == false) {

            response.status(401).send("User not found");
        }
        else{
       
        const response2 = await axios.get(`${NEWS_API_URL}&category=general`);
        const {articles} = response2.data;
        return response.status(200).send(articles);
    }

    
   

});




app.get("/logout", (req, res) => {

   req.session.user = ""

   res.redirect("/g_home")
});


console.log("Listening on Port 3000");




async function getHeadlinesForCategory(category, page) {
  const pageSize = 10;
  const response = await newsapi.v2.topHeadlines({
    category,
    pageSize,
    page,
    "language":'en'
  });
  const articles = response.articles.map((article) => ({
    title: article.title,
    description: article.description,
    url: article.url,
    imageUrl: article.urlToImage,
    publishedAt: new Date(article.publishedAt).toLocaleString(),
  }));
  return {
    articles,
    totalResults: response.totalResults,
    totalPages: Math.ceil(response.totalResults / pageSize),
  };
}


app.get('/articles', async (req, res) => {
  const categories = [];

  const { user } = req.session;

  if (user){

    console.log("hello")
  }
  else{
    return res.redirect("/signin"), 400
  }

  try{
      if (user.sport){
            categories.push(user.sport)
        }
    }

    catch{
        console.log("erro1")
    }
      

      try{

        if (user.business){
            categories.push(user.business)
        }

    }catch{
        console.log('erro2')
    }

        if (user.health){
           categories.push(user.health)
        }

        if (user.entertainment){
            categories.push(user.entertainment)
        }


        if (user.technology){
            categories.push(user.technology)
        }


        if (user.science){
            categories.push(user.science)
        }


        if (user.general){
            categories.push(user.general)
        }


  console.log(categories)
  const page = parseInt(req.query.page || '1');
  const results = await Promise.all(
    categories.map((category) => getHeadlinesForCategory(category, page))
  );
  const mergedResults = results.reduce(
    (merged, result) => ({
      articles: [...merged.articles, ...result.articles],
      totalResults: Math.max(merged.totalResults, result.totalResults),
      totalPages: Math.max(merged.totalPages, result.totalPages),
    }),
    { articles: [], totalResults: 0, totalPages: 0 }
  );

  console.log(mergedResults.articles)
  res.render('final', {
    articles: mergedResults.articles,
    totalResults: mergedResults.totalResults,
    totalPages: mergedResults.totalPages,
    currentPage: page,
    user
  });
});

