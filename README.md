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
