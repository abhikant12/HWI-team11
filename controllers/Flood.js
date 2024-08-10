// const axios = require('axios');


exports.flooddata = async (req, res) => {
    try {
       // const response = await axios.get('https://api.agify.io?name=michael');

        return res.json({
            success: true,
            message: "successfully",
            // data: response.data,
          })
        } 
        catch (error) {
          console.log(error)
          return res.status(500).json({
            success: false,
            error: error.message,
          })
        }
 };



