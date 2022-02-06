const express=require('express')
const geocode = require('./utils/geocode');
const forecast=require('./utils/forecast');
const path = require('path')


const app=express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))


app.get('/weather',(req,res)=>{

    if(!req.query.address)
    {res.send('Please enter adress')}
    else{

        geocode(req.query.address,(error,LocationData)=>{

            forecast(LocationData.latitude,LocationData.longitude,(error,ForecastData)=>{
                res.send({temp:ForecastData.temp,
                    feels_like:ForecastData.feelslike,
                    precip:ForecastData.precip,
                    wind_speed:ForecastData.wind_speed,
                    wind_dir:ForecastData.wind_dir,
                    humidity:ForecastData.humidity,
                    cloudcover:ForecastData.cloudcover,
                    loc:LocationData.location
                });
            })
            
        })
        

    }
    
    
    })

app.listen(3000,()=>{
    console.log("server starting");
})
