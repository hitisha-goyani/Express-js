import express from "express"
import axios from "axios"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url";
import { dirname } from "path"; 

dotenv.config();

const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename);  

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', async (req, res) => {
  const city = req.body.city;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const weatherData = response.data;

    res.render('weather', {
      city: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon
    });
  } catch (error) {
    res.render('weather', {
      city: null,
      temperature: null,
      description: 'City not found.',
      icon: null
    });
  }
});

const port=5000;

app.listen(port, () => {
  console.log("Server running on port",port);
});
