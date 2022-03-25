// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// var Song = Backbone.Model.extend();
// var song = new Song({
//   title: "Aisha",
//   singer: "Shab Khaled",
// });

// validation part
let Song = Backbone.Model.extend({
  validate: function (attr) {
    if (!attr.title) {
      return "Title is required";
    }
  },
});

let song1 = new Song();

// inhertance

let Animal = Backbone.Model.extend({
  walk: (o = () => console.log("animal is walking")),
});

let Dog = Animal.extend({
  walk: function () {
    Animal.prototype.walk.apply(this);
    console.log("Dog is walking");
  },
});

dog1 = new Dog();
dog1.walk();

// assignemnt 1
let Vechicle = Backbone.Model.extend({
  idAttribute: "registrationNumber",
  validate: function (attrs) {
    if (!attrs.registrationNumber) {
      return "You cant create a vechicle without registrationNumber";
    }
  },

  start: function () {
    console.log("Vehicle started.");
  },
});

let Car = Vechicle.extend({
  start: function () {
    console.log("this.attributes", this.attributes);
    console.log(
      `Car with this registrationNumber ${this.get(
        "registrationNumber"
      )} started`
    );
  },
});

vechicle1 = new Vechicle();
vechicle1.start();

car1 = new Car();
car1.set({ registrationNumber: "fdxr32r32", color: "blue" });
car1.unset("registrationNumber");
if (!car1.isValid()) {
  console.log(car1.validationError);
}
car1.set({ registrationNumber: "dsfsdgfeg" });
if (!car1.isValid()) {
  console.log(car1.validationError);
}

car1.start();

// assignmnet 2 for collections
let Vechicles = Backbone.Collection.extend({
  model: Car,
});

let vechicles_collection = new Vechicles([
  new Car({ registrationNumber: "XLI887", colour: "Blue" }),
  new Car({ registrationNumber: "XLI87c", colour: "Blue" }),
  new Car({ registrationNumber: "XLIc887", colour: "grey" }),
]);

const blueCars = vechicles_collection.filter(
  (car) => car.get("colour") == "Blue"
);
const remove_reg = vechicles_collection.filter(
  (car) => car.get("registrationNumber") == "XLI887"
);
vechicles_collection.remove(remove_reg);
console.log("vechicles_collection", vechicles_collection);
console.log("blueCars", blueCars);

// Collections :
let Song_model = Backbone.Model.extend();

let Songs = Backbone.Collection.extend({
  model: Song_model,
});

/* we can add model to collection by 
- create an instance of collection and add instance of model
as array OR by add method 
 */
let songs_collection = new Songs([
  new Song_model({ title: "Song 1", genre: "jazz", download: 90 }),
  new Song_model({ title: "Song 2", genre: "pop", download: 45 }),
]);

songs_collection.add(
  new Song_model({ title: "song3", genre: "pop", download: 78 }),
  {
    at: 0,
  }
); // to add at specifc index , we can use push method to add at the end

console.log(songs_collection.at(0)); // to get model at specfic index

let findTitle3 = songs_collection.findWhere({ title: "song3" });
console.log("findTitle3-->", findTitle3);

let filterd = songs_collection.filter((song) => {
  return song.get("download") >= 70;
});

console.log(filterd);

songs_collection.each((song) => console.log(song));
