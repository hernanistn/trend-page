import app from "express"
const router = app.Router()

router.get("/auth", (req, res) => {
    res.send("code: " + req.query.code)
})

router.get("/", (req, res) => {
    res.send("Hello")
})
export {router}