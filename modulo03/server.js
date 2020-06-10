const express = require('express')
const nunjucks = require('nunjucks')
const videos = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/videos", function(req, res) {
    return res.render("videos", { items: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id
    const video = videos.find(function(video) { 
        if(video.id == id) {
            return true
        }
    })

    if(!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})
server.listen("5000", function() {
    console.log("server is running")
})