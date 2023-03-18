// Code your solution in this file!

const distanceFromHqInBlocks = blocks => Math.abs(blocks - 42);

distanceFromHqInBlocks(50);

const distanceFromHqInFeet = feet => distanceFromHqInBlocks(feet) * 264;

const distanceTravelledInFeet = (start, stop) => Math.abs(start-stop) * 264;

const calculatesFarePrice = (start, destination) => {
    const feetTraveled = distanceTravelledInFeet(start, destination)

    if (feetTraveled < 400) {
        return 0;
    } else if (feetTraveled >= 400 && feetTraveled <= 2000) {
        return (feetTraveled - 400) *.02;
    } else if (feetTraveled > 2000 && feetTraveled < 2500) {
        return 25;
    } else if (feetTraveled >= 2500) {
        return 'cannot travel that far'
    }
}

