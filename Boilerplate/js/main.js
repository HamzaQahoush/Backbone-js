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
