const axios = require('axios');


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
        const { city } = req.query;

        if(!city){
            return res.status(400).json({ message: 'City name is required.' });
        }

        // Fetch latitude and longitude for the city
      //  const { latitude, longitude } = await fetchCityCoordinates(city);

        // Fetch weather data using latitude and longitude
        const weatherData = await fetchWeatherData(10, 11);

        // Send the weather data as a response
        res.status(200).json(weatherData);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ message: 'Failed to fetch data', error: error.message });
    }
};

module.exports = { getData };
