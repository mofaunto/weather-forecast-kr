# Weather APP created by React

View at: https://xjweatherapp.netlify.app

## Tech stack

- Language / Frameworks: React JS, Vite, TailwindsCSS
- API: OpenWeatherAPI
- Helpful Tools - Luxon, Iconscout

## Assignment Completion Details

After starting this assignment, I divided by workflow into three parts, namely:

### Building the overall structure

I wanted to have a basic understanding of what I am going to be working with when the API gets into the picture, so I built the basis of the application first, by building the components and styling them. I decided to use TailwindCSS for this project, as it allowed me to do the rapid prototyping and not worry about clashing class names. According to the assignment instructures, I worked on these for the structure:

- I created 4 buttons on top, listing **Seoul, Daejeon, Daegu and Busan** for fast weather information switching
- Created search input field, where user can search for other cities
- Short Information regarding the currently chosen location
- Hourly / Daily Forecast sections

### Building API functions and exporting them

For the API, I have chosen **Weather API** by https://openweathermap.org/api , as their data is constantly updated and made simple to access. I have deep respect for open source projects which was one of the reasons I chose them, but also the fact that they provided types of data I needed, such as **temperature, humidity, wind speed, sunrise and sunset** information, which I think most people look for when they use a weather application.

After choosing the API, I first tested whether I am actually getting information in json format, and once I confirmed that the api is working as intended, my next steps were:

- Concatenate my API keys and the URL query entries
- Build functions that gathers data needed for the app, such as **temperature, humidity**, other weather data, but also gather **country/city names, timezones, weather icons** that I could use in my components.
- Build functions to convert collected data to local time
- Build functions to exctract hourly and daily weather forecast data

Once the API functions were ready, I exported them and started to build the logic and props in my **React components** and **App.jsx**. The most difficult part for me was building the functionality of **Forecast.jsx**, as this component was responsible for fetching hourly and daily forecasts. To simplify my task, I first worked only with daily forecast, and later reintroduced hourly forecasting.

### Build improvements, Bug fixes and API protection

After everything was functional, I noticed that my choice of generation of starting React code was not optimal. As **CRA(Create-React-App)** was not updated in a while, I was having problems with packages and dependencies. Which is why I decided to switch to **Vite**, as it is a lot faster in building but also constantly updated, so I did not encounter problems after that.

The other thing to do was to cleanup CSS code and improve some of the CSS properties I chose earlier, so that the application has consistent spacing.

Another great feature that Vite had was being able to properly use **.ENV files**, where I could protect the keys used in this project, as inserting API keys directly to the code is a security risk.

### Closing Remarks

This project helped me greatly with my understanding of API integration, and also allowed me to experiment with new tools, such Tailwinds and Vite.

There are still improvements to make, such as improving the responsiveness of the content to super large and super small screens, and introducing maps as other type of weather info searching.
