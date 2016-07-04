/**
 * Created by jialao on 2016/6/28.
 */
var axios = require('axios');

function getList(req,res){
    axios.get('http://news-at.zhihu.com/api/4/news/latest')
        .then(function(data){
            console.log(data);
            res.send(data)
        })
}

function getHistoryStory(req,res){
    axios.get('http://news.at.zhihu.com/api/4/news/before/'+req,query.date)
        .then(function(data){
            console.log(data);
            res.send(data);
        })
}

function getDetial(req,res){
    axios.get('http://news-at.zhihu.com/api/4/news/'+req,query.id)
        .then(function(data){
            console.log(data);
            res.send(data);
        })
}

function getThemes(req,res){
    axios.get('http://news-at.zhihu.com/api/4/themes')
        .then(function(data){
            console.log(data);
            res.send(data);
        })
}

function getThem(req,res){
    axios.get('http://news-at.zhihu.com/api/4/theme/'+req.query.id)
        .then(function(data){
            res.send(data)
        })
}

function getExtra(req,res){
    axios.get('http://news-at.zhihu.com/api/4/story-extra/'+req.query.id)
        .then(function(data){
            console.log(data);
            res.send(data);
        })
}

function getHot(req,res){
    axios.get('http://news-at.zhihu.com/api/3/news/hot')
        .then(function(data){
            res.send(data);
        })
}

module.exports = {
    getList,
    getHistoryStory,
    getDetial,
    getThemes,
    getThem,
    getExtra,
    getHot
}