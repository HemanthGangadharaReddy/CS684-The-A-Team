var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

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
    return res.redirect('index.html');

}).listen(3000);

app.get('/signin', (req, res) => {
    res.sendFile('/Users/ayushchamoli/Desktop/newsss/javascript_signup/public/signin.html');
  });

  app.get('/signup', (req, res) => {
    res.sendFile('/Users/ayushchamoli/Desktop/newsss/javascript_signup/public/signup.html');
  });

  app.get('/home', (req, res) => {
    res.sendFile('/Users/ayushchamoli/Desktop/newsss/javascript_signup/public/home.html');
  });

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
                
                return response.redirect('/home',);
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


console.log("Listening on Port 3000");
