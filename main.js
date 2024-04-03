"use strict";

// Level 1 //

// ------------------------------task-1---------------------------- //

function setLength(obj) {
  obj.length = Object.keys(obj).length;
}

const myObj = {
  firstName: "Khalil",
  secondName: "Aliiev",
  age: 22,
  country: "Switzerland",
  auto: true,
};

setLength(myObj);
console.log("myObj length is:", myObj.length);

// ------------------------------task-2---------------------------- //

const actor = {
  name: "Tom Hardy",
  age: 44,
  gender: "Male",
  nationality: "British",
  lastFilm: "Venom: Let There Be Carnage",
};

// function getEntries(obj) {
//   const entries = [];
//   Object.keys(obj).forEach((element) => {
//     entries.push([element, obj[element]]);
//   });
//   return entries;
// }
// console.log("getEntries(actor:", getEntries(actor));

function getEntries(obj) {
  const arr = Object.keys(obj).map((keys) => {
    return [keys, obj[keys]];
  });
  return arr;
}
console.log("getEntries(actor):", getEntries(actor));

// ------------------------------task-3---------------------------- //

const celebrity = {};
Object.defineProperties(celebrity, {
  firstName: {
    value: "Robert",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  secondName: {
    value: "Downey",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 58,
    writable: false,
    enumerable: false,
    configurable: false,
  },
  country: {
    value: "USA",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  profession: {
    value: "Actor",
    writable: false,
    enumerable: false,
    configurable: false,
  },
});

console.log(celebrity);

// celebrity.age = 11;

// console.log(celebrity.age);

for (const key in celebrity) {
  console.log(key);
}

// delete celebrity.age;

// console.log(celebrity);

// ------------------------------task-4---------------------------- //

class Animal {
  constructor(voice) {
    this.voice = voice;
    Object.defineProperty(this, "voice", {
      enumerable: false,
    });
  }
  say() {
    return this.voice;
  }
}

const dog = new Animal("Guv!");
console.log(dog.say());

for (const key in dog) {
  console.log(key);
}

// Level 2 //

// ------------------------------task-1---------------------------- //

const car1 = {
  model: "Mercedes",
  price: 50000,
  [Symbol.toPrimitive](hint) {
    if (hint === "default") {
      return this.price;
    } else {
      return this.model;
    }
  },
};

const car2 = {
  model: "Audi",
  price: 40000,
  [Symbol.toPrimitive](hint) {
    if (hint === "default") {
      return this.price;
    } else {
      return this.model;
    }
  },
};

console.log(car1 + car2);

alert(car1);
alert(car2);

// ------------------------------task-2---------------------------- //

// function cloneObject(obj, key1, key2) {
//   const newObj = {};
//   for (const key in obj) {
//     if (key1 !== key && key2 !== key) {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

function cloneObject(obj, ...keys) {
  const newObj = {};
  for (const key in obj) {
    !keys.includes(key) ? (newObj[key] = obj[key]) : undefined;
  }
  return newObj;
}

const copyObj = {
  firstName: "Robert",
  secondName: "Downey Jr",
  age: 58,
  gender: "Male",
  lastFilm: "Oppenheimer",
};

const clonedObj = cloneObject(
  copyObj,
  "age",
  "secondName",
  "lastFilm",
  "gender"
);
console.log("clonedObj:", clonedObj);
