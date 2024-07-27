const findTheOldest = function(people) {
    const sortedPeople = people.toSorted(getOldest)
    return sortedPeople.at(0)
}

function getOldest(person1, person2) {
    const safeYearOfDeath1 = person1.yearOfDeath??new Date().getFullYear()
    const safeYearOfDeath2 = person2.yearOfDeath??new Date().getFullYear()

    const person1Age = safeYearOfDeath1 - person1.yearOfBirth
    const person2Age = safeYearOfDeath2 - person2.yearOfBirth
    
    return -(person1Age - person2Age)
}

// Do not edit below this line
module.exports = findTheOldest;
