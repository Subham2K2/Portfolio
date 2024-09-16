const mongoose = require('mongoose')


const URI = "mongodb+srv://PortfolioWebsite:PortfolioWeb@cluster0.jccc9.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000,
            socketTimeoutMS: 45000,
        });
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.log(error);
        process.exit(1);
    }
};


module.exports = connectDB;