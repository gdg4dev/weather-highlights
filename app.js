const getGeoInfo = require('./utils/geocode')
const getTempInfo = require('./utils/tempreture')
const yargs = require('yargs')

const getWeatherInfo = (name, op) => {
	const coorInfo = getGeoInfo(name, (x) => {
		const tempInfo = getTempInfo(x, (y) => {
			const finalOutput = 'Place: ' + y[0][0] + '  Summary: ' + y[1] + '  It is currently ' + y[2] + ' degrees out. There is ' + y[3] + '% chance of rain'
			op(finalOutput)
		})
	})
}

getWeatherInfo('Ahmedabad', (x) => {
	console.log(x)
})



// const Lurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Ahmedabad.json?access_token=pk.eyJ1IjoiZ2VwaW1pNjE2MCIsImEiOiJjazZkOGtwaDEwOXN2M2xsb2F6bDRnYTllIn0.RBN1LxsXCIsucXTGq_VoGA';
// request({ url: Lurl, json: true }, (e, res) => {
// 	if (e) {
// 		console.log('Unable to connect with weather services.')
// 	} else {
// 		const coordinates = res.body.features[0].geometry.coordinates;
// 		const c1 = coordinates[1];
// 		const c2 = coordinates[0];
// 		const Wurl = 'https://api.darksky.net/forecast/a1a02d1d847bb450613463189490d1aa/' + c1 + ',' + c2 + '?units=si';
// 		console.log(res.body.features[0].place_name)

// 		request({ url: Wurl, json: true }, (e, res) => {
// 			if (e) {
// 				console.log('Unable to connect with weather services.')
// 			} else {
// 				const data = res.body;
// 				try { console.log(data.daily.data[0].summary + ' It is currently ' + data.currently.temperature + ' degrees out. There is ' + data.currently.precipProbability + '% chance of rain'); }
// 				catch { console.log(data.error) }
// 			}
// 		});
// 	}
// });

