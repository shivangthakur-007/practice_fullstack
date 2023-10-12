import User from "../Models/User.Model.js";

const register = async (req, res, next) => {
  try {
    const { fullName } = req.body;
    // console.log(req.body)
    if(!fullName){
      console.log('Name is required');
      next();
    }
    // const nameExists = User.findOne({ fullName });
    // if (nameExists) {
    //   // return next(console.log("Name already Exists"));
    //   console.log("Name already exists");0
    //   next();
    // }
    const user = await User.create({
      fullName,
    });
    if (!user) {
      // return next(console.log("Registration is failed"));
      console.log("Registration is failed");
      next();
    }
    await user.save();

    res.send('user reistered succesfully');
  } catch (e) {
    console.log(e);
  }
};

export { register };
