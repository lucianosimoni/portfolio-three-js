const model = document.querySelector('#model');

// Set initial orbit
model.cameraOrbit = '90deg 75deg 2m';

const orbitPositions = [
	'80deg 55deg 40m',
	'120deg 68deg 20m',
	model.cameraOrbit,
];

setInterval(() => {
	const currentIndex = orbitPositions.indexOf(model.cameraOrbit);

	// Loops through the orbitPositions array
	model.cameraOrbit =
		orbitPositions[(currentIndex + 1) % orbitPositions.length];
}, 3000);
