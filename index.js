// Code your solution in this file!

const distanceFromHqInBlocks = blocks => Math.abs(blocks - 42) 

distanceFromHqInBlocks(43)

const distanceFromHqInFeet = someValue => {
    const blocksInFeet = distanceFromHqInBlocks(someValue);
    return blocksInFeet * 264
}

const distanceTravelledInFeet = (start, end) => {
    const blocksTraveled = Math.abs(start - end) * 264
    return blocksTraveled
}

const calculatesFarePrice = (start, stop) => {
    const feetTraveled = distanceTravelledInFeet(start, stop);

    if (feetTraveled <= 400) {
        return 0
    } else if (feetTraveled > 400 && feetTraveled < 2000) {
        return (feetTraveled - 400) * .02
    } else if (feetTraveled >= 2000 && feetTraveled <= 2500) {
        return 25
    } else (feetTraveled > 2500) 
        return "cannot travel that far"
}



























// const distanceFromHqInBlocks = (blocks) => {
//  return Math.abs(blocks - 42)
// }

// function distanceFromHqInFeet(someValue){
//     const blocks = distanceFromHqInBlocks(someValue);
//     return blocks * 264
// }

// const distanceTravelledInFeet = (pickup, dropoff) => {
//   const blocks = Math.abs(pickup - dropoff) * 264
//   return blocks
// }

// const calculatesFarePrice = (start, destination) => {
//     const feet = distanceTravelledInFeet(start, destination);

//     if (feet >= 400) {
//         return 0
//     } else if (feet > 400 && feet < 2000) {
//         return (feet - 400) * .02 
//     } else if (feet >= 2000 && feet <= 2500) {
//         return 25
//     } else {
//         return 'cannot travel that far'
//     }
// }