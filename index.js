
function bumpCounter () {
  let counter = 0;

  function getBumps() {
    return counter;
  }

  function addBump() {
    counter++;
  }

  return {addBump, getBumps}
}

function createAnimal (animalType) {
  return function (deadlyDevice) {
    return {animalType, deadlyDevice};
  }
}

let sharkCreator = createAnimal("Shark");
let sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
let sharkWithFrickinCannon = sharkCreator("Cannon");
