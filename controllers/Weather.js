const axios = require('axios');
const generateFloodImpactReport = require('./Aichat');



// Function to fetch latitude and longitude from API Ninjas
const fetchCityCoordinates = async (city) => {

    const apiKey = 'UvVQAF0xHdJ9A4+C5ri8Pw==On7hoowa5LhfZ2JP';
    const cityUrl = `https://api.api-ninjas.com/v1/city?name=${city}`;
    
    const cityResponse = await axios.get(cityUrl, { headers: { 'X-Api-Key': apiKey }});

    if(cityResponse.data.length === 0){
        throw new Error('City not found.');
    }

    const { latitude, longitude } = cityResponse.data[0];

    return { latitude, longitude };
};


// Function to fetch weather data from OpenWeatherMap using latitude and longitude
const fetchWeatherData = async (latitude, longitude) => {
    const apiKeyWeather = '0d26d9b60322894364936b5c39254f00';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKeyWeather}`;
    
    const weatherResponse = await axios.get(weatherUrl);
    return weatherResponse.data;
};




const getData = async (req, res) => {
    try {
        const { latitude,  longitude} = req.query;

        // if(!city){
        //     return res.status(400).json({ message: 'City name is required.' });
        // }

        // Fetch latitude and longitude for the city
      //  const { latitude, longitude } = await fetchCityCoordinates(city);

        // Fetch weather data using latitude and longitude
        const weatherData = await fetchWeatherData(latitude, longitude);

        // Send the weather data as a response
        res.status(200).json(weatherData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ message: 'Failed to fetch data', error: error.message });
    }
};


// Async function to fetch data from the API
const fetchFloodProbability = async (req, res) => {
    try {
      
     const { city } = req.query;

      const response = await axios.get(`http://13.201.76.20:5000/api/v1/floodProbability?city=${city}`);
      res.status(200).json(response.data);

    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch data', error: error.message });
    }
  };


const fetchwaterdischarge = async (req, res) => {
    try {
        const { latitude,  longitude} = req.query;

        const response = await axios.get(`http://13.201.76.20:5000/river?latitude=${latitude}&longitude=${longitude}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch data', error: error.message });
    }
};









module.exports = { getData , fetchFloodProbability, fetchwaterdischarge};
