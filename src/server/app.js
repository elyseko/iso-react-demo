import express from "express";
import path from 'path';

// instantiate react-router
import router from './router'

const app = express();

// point at the ejs templates
app.set('view engine', 'ejs');

//view routes
app.get('/*', router)

app.listen(4000, function(){
  console.log("running on port 4000")
});
