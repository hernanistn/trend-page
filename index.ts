
import express from "express"

const app = express()
const router = express.Router()
router.get("/auth", (req, res) => {
    res.send("code: " + req.query.code)
})

router.get("/", (req, res) => {
    res.send("Hello")
})




app.use(`/.netlify/functions/api`, router)
app.listen(3001, () => {
    console.log("Running on port 5000.")
})

module.exports = app