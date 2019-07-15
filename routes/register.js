const express = require('express');
const router = express.Router();
const db=require('../dbhelper/dbstuff.js');
var validator = require('validator');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

async function createuser(user1,password1,name1,email1)
{
	const register= await new  db.user({
		user:user1,
		password: password1,
		name:name1,
		email:email1
	}); 
	const result= await register.save();
	console.log(result);
};

router.get('/',function(req,res,next){
	res.render('register',{
		title :'express',
		name : 'Raghav'
	});
});
router.post('/', urlencodedParser, function (req, res) {
	console.log(req.body);
	let a= validator.isEmail(req.body.email); //=> true
	let p = validator.isAlphanumeric(req.body.password)
	console.log(a);
	if (a === true && p=== true)
	{
		createuser(req.body.user,req.body.password,req.body.name,req.body.email);
		res.render('check.ejs',{
			user : req.body.user,
			password : req.body.password,
			name : req.body.name,
			email :req.body.email
		  });
		
	}
	//createuser(req.body.user,req.body.password,req.body.name);
  //res.send('welcome, ' + req.body.user);
else
{
	if(a===false){
res.send("enter valid e-mail id")
	}
	if(p===false)
	{
		res.send("enter valid password with alphanumeric")
	}
	if(p===false && a === false)
	{
		res.send("enter valid e-mail id & password")
	}
}
 
});

router.post('/check',urlencodedParser,function(req,res){
    res.send("hello");
})//.then(createuser(req.body.user,req.body.password,req.body.name));
module.exports= router;