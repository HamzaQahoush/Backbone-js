# Backbone-js :

Backbone-js : light weight library for structring javascript code .

- usedMVC/MV archtriect , seperation of concerns

- Routers :used for developing single web applications.

### Backbone components:

1. Events: To add an object the ability to pub/sub events
2. Models : application Data
3. Collection : set of Models
4. views : To render the models and listen for dom/models events
5. Routers : To create single page application.

### Models :

we can create our model by extending backbone model e.g :

```
var Song = Backbone.Model.extend();
var song = new Song({
  title: "Aisha",
  singer: "Shab Khaled",
});
```

- we can use **set** attribute by using set method :
  e.g :

```
song.set({key : 'value})
```

- we can use **get** method to get an attribute
  `song.get('title)`

- we can use **unset** method to unlink-remove an attribute
  `song.unset('title')`

- we can use **clear()** method to remove all attributes
  `song.remove()`

- we can use **has('attr')** method to check of attributes
  `song.has('title')` // true

- we can set defaults attribute for a Model by adding :

```
defaults:{
    genre : 'jazz'
}
```

### model Validation:

- we can add validation to model by creating a methods e.g

```
let Song = Backbone.Model.extend({
  validate: function(attr){
    if (!attr.title) {
      return "Title is required"
    }
  }
})

let song1 = new Song();

```

- we can check by `song1.isValid()`
- to check the error and get it `song1.ValidationError`

### Inheritance

- we can extend our model by using extend Model.

```
let Animal = Backbone.Model.extend({
  walk: (animal_ = () => console.log("animal is walking")),
});

let Dog = Animal.extend({
walk: function () {
    Animal.prototype.walk.apply(this);
    console.log("Dog is walking");
  },
});

dog1 = new Dog();
dog1.walk();

```

- To access method of parnet Model we use :
  `Animal.prototype.walk.apply(this)`

### connecting to server:

- Backbone model provide an abstraction of low level api communcation.
- call fetch on your model , model take care of making AJax Call to get data.

#### persistent operation :

- fetch() - GET
- save()- PUT/POST
- destroy() - Delete

- urlRoot :

#### fetching Model

```
let Song=Backbone.Model.extend({
urlRoot: '/api/songs'
})
var song=new Song({id : 1})
song.fetch()

will get :
// GET/api/songs/1

song.set('title' : 'newTitle')
song.save()

// PUT/api/songs/1

//another syntax for save:

song.save({},{

  success: function(){}
  error : function (){}
})
and pass the attr in the empty object
```
