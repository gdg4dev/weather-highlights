const request = require('request')

const getTempInfo = (coor, op) => {
    const weatherAPI = 'https://api.darksky.net/forecast/a1a02d1d847bb450613463189490d1aa/' + coor[1] + ',' + coor[2] + '?units=si';
    request({ url: weatherAPI, json: true }, (e, res) => {
        if (e) {
            console.log('Unable to connect with weather services!')
        } else {
            const data = res.body
            try {
                const finData = [coor]
                const overallForecast = data.daily.data[0].summary;
                const currentTemp = data.currently.temperature
                const rainProbability = data.currently.precipProbability
                finData.push(overallForecast, currentTemp, rainProbability)
                op(finData)
            } catch {
                console.log('Invalid location coordinates')
            }
        }
    })
}

module.exports = getTempInfo