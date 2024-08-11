const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Location = require('../models/Location');
require('dotenv').config(); 


const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  const { email, locationName } = req.body;

  try {
    // Find or create the location
   
    let location = await Location.findOne({ locationName });

    if(!location){                                              // Create a new location if it doesn't exist
      location = new Location({ locationName, emails: [email] });
      await location.save();
    }
    else if (!location.emails.includes(email)){
          location.emails.push(email);
          await location.save();
    }

    
    // Find or create the user
    let user = await User.findOne({ email });

    if(user){
      user.location = location._id;
    } else {
      user = new User({ email, location: location._id });
    }

    // Generate a new token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '12h' });
    user.token = token;

    // Save the user
    await user.save();

    // Respond with the token
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Server error occurred while registering user.' });
  }
};

module.exports = { register };
