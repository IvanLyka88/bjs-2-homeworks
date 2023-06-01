const compareArrays = (arr1, arr2) =>
  arr1.length === arr2.length &&
  arr1.every((element, index) => element === arr2[index]);

function getUsersNamesInAgeRange(users, gender) {
    return users
      .filter((person) => person.gender == gender)
      .map((person) => person.age)
      .reduce((age, person, index, arrOfAge) => {


        
      }, 0);
  }