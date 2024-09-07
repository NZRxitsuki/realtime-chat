const express = require("express")
const path = require("path")

const port = 5000
const main = express()
const public_file = "/mydirname"
const post_count = 1
const number_for_delete = 1

main.use(express.static(path.join(__dirname,public_file)))
main.route("/index.html")
  .get((req,res) => res.sendFile(index.html))
  .post((req,res) => {post =+ 1;res.end())}
  .delete((req,res) => {number_for_delete =- 1; res.end()}








