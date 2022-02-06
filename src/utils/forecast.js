const request=require('postman-request');


const forecast=(lati,longi,callback)=>{
    url=`http://api.weatherstack.com/current?access_key=786ede5c4bb749f521d12d0b545ecd46&query=${lati},${longi}`;
        
    request({url:url,json:true},(error,response)=>{
    
        callback(undefined,{
       
        temp:response.body.current.temperature,
        feelslike:response.body.current.feelslike,
        precip:response.body.current.precip,
        wind_speed:response.body.current.wind_speed,
        wind_dir:response.body.current.wind_dir,
        humidity:response.body.current.humidity,
        cloudcover:response.body.current.cloudcover
    })


    })}

    module.exports=forecast