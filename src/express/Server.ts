import express from "express"
import { router } from "./Routes"

class Server {

    private app = express()


    initialize(){
        const port = 3001
        this.app.use(router)
        this.app.listen(port, () => console.log("Server is nunning on port " + port))
    }

   
}

export default Server