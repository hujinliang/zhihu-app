/**
 * Created by jialao on 2016/6/28.
 */
var express = require('express');
var path = require('path');
var axios = require('axios');

var getList = require('./serverAPI/api').getList;
var getHistoryStory = require('./serverAPI/api').getHistoryStory;
var getDetail = require('./serverAPI/api').getDetial;
var getThems = require('./serverAPI/api').getThemes;
var getThem = require('./serverAPI/api').getThem;

var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(function(req,res,next){
    res.set({'Access-Control-Allow-Origin':'*'});
    next();
})

app.get('/api/list',getList);
app.get('/api/history',getHistoryStory);
app.get('/api/detail',getDetail);
app.get('/api/themeList',getThems);
app.get('/api/theme',getThem);

app.get('*',function(req,res){

    res.sendfile(path.join(__dirname,'public','index.html'))
});

app.listen(port,function(){
    console.log('App is running on port '+port)
})