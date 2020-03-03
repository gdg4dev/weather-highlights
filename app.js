const getGeoInfo = require('./utils/geocode')
const getTempInfo = require('./utils/tempreture')
const yargs = require('yargs')

let locationAddr = process.argv[2]
const getWeatherInfo = (name, op) => {
	const coorInfo = getGeoInfo(name, (x) => {
		const tempInfo = getTempInfo(x, (y) => {
			const finalOutput = 'Place: ' + y[0][0] + '  Summary: ' + y[1] + '  It is currently ' + y[2] + ' degrees out. There is ' + y[3] + '% chance of rain'
			op(finalOutput)
		})
	})
}


if (!locationAddr) {
	console.log('Please provide an address / location')
} else {
	getWeatherInfo(locationAddr, (x) => {
		console.log(x)
	})
}

