const { generateOTP ,fast2sms} = require('../services/otp'); 
const User = require('../models/User');


/**
 *--------------------- create new user ---------------------------------
 */ 
exports.createNewUser = async (req, res, next) => {
  try {
    let { phone} = req.body;
    // check duplicate phone Number
    const phoneExist = await User.findOne({ phone });

    if (phoneExist) {
      next({ status: 400, message: "PHONE_ALREADY_EXISTS_ERR" });
      return;
    }


    // create new user
    const createUser = new User({
      phoneNumber : phone
    });

    // save user

    const user = await createUser.save();

    res.status(200).json({
      type: "success",
      message: "Account created OTP sended to mobile number",
      data: {
        userId: user._id,
      },
    });

    // generate otp
    const otp = generateOTP(6);
    // save otp to user collection
    user.otp = otp;
    await user.save();
    // send otp to phone number
    await fast2sms(
      {
        message: `Your OTP is ${otp}`,
        contactNumber: user.phone,
      },
      next
    );
  } catch (error) {
    next(error);
  }
};


// ---------------------- verify phone otp -------------------------

exports.verifyPhoneOtp = async (req, res, next) => {
  try {
    const { otp, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      next({ status: 400, message: "USER_NOT_FOUND_ERR" });
      return;
    }

    if (user.otp !== otp) {
      next({ status: 400, message: "INCORRECT_OTP_ERR" });
      return;
    }
    // const token = createJwtToken({ userId: user._id });

    user.otp = "";
    await user.save();

    res.status(201).json({
      type: "success",
      message: "OTP verified successfully",
      data: {
        userId: user._id,
      },
    });
  } catch (error) {
    next(error);
  }
};