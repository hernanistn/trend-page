import app from "express"
const router = app.Router()

router.get("/auth", (req, res) => {
    res.send("code: " + req.query.code)
})

export {router}