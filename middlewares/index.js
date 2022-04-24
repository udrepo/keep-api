import admin from "../firebase/index.js";
import User from "../models/userModel.js";

export const findUser = async (req, res, next) => {
    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
        const user = await User.findOne({email: firebaseUser.email});
        if (user){
            req.currentUser = user;
            next();
        }
        else {
            req.currentUser = await new User({
                name: firebaseUser.name,
                email: firebaseUser.email,
                picture: firebaseUser.picture,
                username: firebaseUser.name
            }).save();
            next();
        }
    } catch (e) {
        console.log(e)
        res.status(401).json({
            err: "Invalid or expired token"
        })
    }
}