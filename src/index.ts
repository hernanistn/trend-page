
import express from "express"


const app = express()
const port = 3001
const router = express.Router()
router.get("/auth", (req, res) => {
    res.send("code: " + req.query.code)
})

router.get("/", (req, res) => {
    res.send("Hello")
})




app.use(router)
app.listen(port, () => console.log("Server is nunning on port " + port))