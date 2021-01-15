const express = require('express');
const path = require('path');

const app = new express();

app.listen(4000, () =>{
	console.log("listening to 4000")
})
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname,"public/home.html"));
}); 
