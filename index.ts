
import express from "express"

const app = express()
app.get("/auth", (req, res) => {
    res.send("code: " + req.query.code)
})

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(3001, () => {
    console.log("Running on port 5000.")
})

module.exports = app