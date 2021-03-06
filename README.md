# Backbone-js :

Backbone-js : light weight library for structring javascript code .

- usedMVC/MV archtriect , seperation of concerns

- Routers :used for developing single web applications.

## Backbone components:

1. Events: To add an object the ability to pub/sub events
2. Models : application Data
3. Collection : set of Models
4. views : To render the models and listen for dom/models events
5. Routers : To create single page application.

## Models :

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

## model Validation:

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

- we can add an `idAttribute` when initiliaze the model to set an attribute.

```
let Vechicle = Backbone.Model.extend({
  idAttribute: "registrationNumber",
  validate: function (attrs) {
    if (!attrs.registrationNumber) {
      return "You can't create a vechicle without registrationNumber";
    }
  },

  start: function () {
    console.log("Vehicle started.");
  },
});

```

- we can check by `song1.isValid()` isValid in ready function from Backbone js.
- to check the error and get it `song1.ValidationError`

## Inheritance

- we can extend our model by using extend Model.

```
let Animal = Backbone.Model.extend({
  walk: (animal_ = () => console.log("animal is walking")),
});

let Dog = Animal.extend({
walk: function () {
    Animal.prototype.walk.apply(this); // will call the method inside parant model.
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

## collections :

- collections are set of models .

```
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

  // To add new model to collection.
  songs_collection.add(
    new Song_model({ title: "song3", genre: "pop", download: 78 }),
    {
      at: 0,
    }
  );

```

- cid : client id
- collection.get('index')
- collection.remove('index')
- we can add Model to specfic index by add the index :
  `songs_.add(new song_model({title : 'first', genre: 'jazz'}), {at : 0})` or **push** to add to the last.

- we can use **findWhere** or **where** to get a model :

  `let findTitle3 = songs_collection.findWhere({ title: "song3" });` return first instance

- `where` - > return an array

- we can use **filter** method to return a model . return an Array

```
let filterd = songs_collection.filter((song) => {
  return song.get("download") >= 70;
});
```

- we can use **each** to iterate over the models :
  e.g

```
songs_collection.each((song)=>console.log(song))
```

## views

- Backbone view :it's object who responsible for rendering the content of view and responding for the events it's more like controller in MVC terms.

- every view has a reference to DOM element.and responsible for rendering the content of this element.

- when insering data in Dom , `div` will created by default , we can override it by specify `tagName='span'` , `className='song'`

```
let SongView = Backbone.View.extend({
  render: function () {
    this.$el.html("Hello World");
    return this;
  },
});

let view1 = new SongView();
view1.render();
$("#container").html(view1.$el);


```
