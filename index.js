const model = document.querySelector('#model');

// Set initial orbit
model.cameraOrbit = '92deg 81deg 61m';

const orbitPositions = [
	'80deg 55deg 40m',
	'120deg 68deg 20m',
	model.cameraOrbit,
];

// setInterval(() => {
// 	const currentIndex = orbitPositions.indexOf(model.cameraOrbit);

// 	// Loops through the orbitPositions array
// 	model.cameraOrbit =
// 		orbitPositions[(currentIndex + 1) % orbitPositions.length];
// }, 3000);

function moveToHome() {
	model.cameraOrbit = '92deg 81deg 61m';
}

function moveToContact() {
	model.cameraOrbit = '120deg 68deg 20m';
}

function moveToProjects() {
	model.cameraOrbit = '80deg 55deg 40m';
}
