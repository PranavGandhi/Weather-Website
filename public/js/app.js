console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                console.log(data);
                messageTwo.textContent = data.loc
                messageOne.textContent =` It is currently ${data.temp} degress out. The wind speed is ${data.wind_speed} km/h in the ${data.wind_dir} direction .  The cloud cover is ${data.cloudcover} % with humidity of ${data.humidity} and ${data.precip} % chance of rain.`
                 
            }
        })
    })
})