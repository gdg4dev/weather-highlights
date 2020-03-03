const request = require('request')

const getGeoInfo = (name, op) => {
    const coorAPI = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + name + '.json?access_token=pk.eyJ1IjoiZ2VwaW1pNjE2MCIsImEiOiJjazZkOGtwaDEwOXN2M2xsb2F6bDRnYTllIn0.RBN1LxsXCIsucXTGq_VoGA';
    request({ url: coorAPI, json: true }, (e, res) => {
        if (e) {
            console.log('Unable to connect with weather services!')
        } else {
            try {
                const data = res.body.features[0]
                const info = [data.place_name, data.center[1], data.center[0]]
                op(info)
            } catch {
                console.log('Location not found')
            }
        }
    })
}

module.exports = getGeoInfo