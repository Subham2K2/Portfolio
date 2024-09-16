// const User = require('../models/UserData')

// const home = async (req, res) => {
//     try {
//         console.log(req.body);
//         const { name, email, phoneno, msg } = req.body;

//         const userExist = User.findOne({ email: email })

//         if (userExist) {
//             return res.status(400).json({ message: "email already exists" })
//         }

//         await User.create({ name, email, phoneno, msg })

//         res.status(200).json({ data })
//         await res.send("Welcome to server home page")
//     } catch (error) {
//         console.log(error);
//         res.status(500).json("Internal Server Error")
//     }
// }

const User = require('../models/UserData');

const home = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, phoneno, msg } = req.body;

        // Check if the email already exists
        // const userExist = await User.findOne({ email: email });

        // if (userExist) {
        //     return res.status(400).json({ message: "Email already exists" });
        // }

        // Create a new user
        const newUser = await User.create({ name, email, phoneno, msg });

        // Return success response
        return res.status(200).json({ message: "User created successfully", user: newUser });

    } catch (error) {
        console.error(error);
        return res.status(500).json("Internal Server Error");
    }
}

module.exports = home;


// module.exports = home;