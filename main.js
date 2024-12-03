// Task 1
const myHouse = {
    stories: 2,
    parking: false,
    bedrooms: 2,
    garden: true,
    energyEfficiencyRating: "d",
};

const myCar = {
    color: "red",
    wheels: 4,
    powerSteering: true,
    seats: 2,
    mpg: 20,
};

const myFavouriteFilm = {
    title: "The Dark Knight",
    releaseYear: 2008,
    leadActor: "Christian Bale",
};

// Task 2
let person = {
    name: "Ben",
    likesChocolate: false,
  };
console.log(person.likesChocolate);

const personLikesChoccy = () => {
    if (person.likesChocolate == true) {
        return `${person.name} loves chocolate`;
    } else {
        return `${person.name} hates chocolate`;
    }
};
console.log(personLikesChoccy());

// Task 3
let desiredPleasantry = "farewell";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases["smallTalk"]);
console.log(bensPhrases[desiredPleasantry]);

// Task 4
let me = {
    firstName: "Louis",
    lastName: "Brookling",
    isBootcamper: false,
  };

me.isBootcamper = true;
console.log(me);

//Task 5
let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };
  
let dm = communication.payload.message.text;

let textFromComms = () => {
    if (communication.payload.message.priority) {
        return communication.payload.message.priority;
    } else {
        return null;
    }
};

console.log(dm);
console.log(textFromComms());

//Task 6
let car = (make, model, year) => {
    this.make = make;
    this.model = model;
    this.year = year;
  }

let carOwner = (name, age, sex) => {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

const vehicle = new car("Abarth","124 spider", 2017);
const myself = new carOwner("Louis", 23, "Male");

console.log(vehicle)