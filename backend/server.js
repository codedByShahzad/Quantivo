require("dotenv").config();

const app = require("./src/app")
const connectDB = require("./src/config/db")

const port = process.env.PORT

connectDB().then(()=>{
    console.log("Database Connection Established")

    app.listen(port, ()=>{
        console.log("Server Successfully Listning on Port: ", port)
    })
}) .catch((error)=>{
    console.log("Error Connecting to Database.")
})