const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const generateFloodImpactReport = async (req, res) => {
    try {
        
        const{ prompt } = req.body;

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

         //const prompt = 'what is your name ?';

        const result = await model.generateContent(prompt);
        const responseText = result.response;
        // console.log(responseText.text());

        res.status(200).json({ success: true , data: responseText.text() });
    } catch (error) {
        console.error("Error generating flood impact report:", error);
        console.log(error);
        res.status(500).json({ success: false, error: "Failed to generate report" });
    }
};

module.exports = {
    generateFloodImpactReport
};
