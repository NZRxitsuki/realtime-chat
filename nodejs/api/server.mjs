import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.get("/get",(req, res) => {
    res.send("berhasil mendapatkan route")
})

app.post("/post",(req, res) => {
    res.send("berhasil post route")
})

app.listen(5000, () => console.log("running"))
