const request= require('postman-request')


const geocode=(address,callback)=>{

    url_location="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiY2ltYW03ODk1NyIsImEiOiJja3ozemFiYm4wYnBlMm9wMTVyZ3FhaDQ3In0.27sUasmZ4jcNfcxwHjf35w"

request({url:url_location,json:true},(error,response)=>{

    callback(undefined,{

        
     latitude:response.body.features[0].center[1],
     longitude:response.body.features[0].center[0],
     location:response.body.features[0].place_name
    

    })
    
})

}

module.exports=geocode