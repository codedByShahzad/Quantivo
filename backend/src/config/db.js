const mongooes = require("mongoose")

const connectDB = async() =>{
    try {
        const connect = await mongooes.connect(process.env.MONGO_URI)

    } catch (error) {
        console.log("Database Connection Error: ", error.message)
    }
}

module.exports = connectDB