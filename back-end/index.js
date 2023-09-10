import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("holiwis")
})

app.post("/login", (req, res) => {
    const user_real_no_fake = "admin"
    const pass_real_no_fake = "admin"
    const {user, pass} = req.body
    console.log(user, pass)
    if (user != user_real_no_fake || pass != pass_real_no_fake){
        res.status(401).send()
    } else {
        res.status(200).send()
    }

})

app.listen(5000, () =>{
    console.log("Server is listinig the port 5000")
})
