
var path = require('path')
, express = require('express')
, bodyParser = require('body-parser')
, cookieParser = require('cookie-parser')
, app = express()
, db      = require("./db")
, controller = require("./controller/index")
, config = require("./config/index")
, morgan = require('morgan')
, cors = require('cors');

// common
app.use(cors());

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.header("X-Frame-Options","DENY");
res.header("X-XSS-Protection","1; mode=block");
next();
});

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms'));

// app.use(express.static('src/assests/images'))

app.use(bodyParser.json({limit: '15mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '15mb', extended: true}));
app.use(cookieParser("secret",{secure:true}));

app.use(function (err, req, res, next) {
console.log('An error I caught: ' + err.stack);
req.destroy();
});

app.use('/',controller);
var port = config.servicePort;
app.listen(port,"0.0.0.0",function(){
console.log('News search service started at port '+port+' - '+new Date().getTime());
});

module.exports= app;
