you will learn how to design objects as combinations of data and functionality.

As you might already know, an object consists of key-value pairs, known as properties.

We can add new key-value pairs to existing objects using the dot notation and the assignment operator. 

```js
var car = {};
car.color = "red"; //update the value of a property of the car objject
```

These are known as properties, and can take many data types, including functions.

```js
var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}
```
If the function is a property of an object, ***it is then referred to as a method***. 

This is a function that can be accessed only through the JavaScript object that it is a member of. For example, the log method, which belongs to the console object, can only be accessed through the console object.
`console.log('Hello world');`

Let's explore this further now. I will create an object using something known as the constructor function.

```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);

```
Next, I want to add a method to my car object. And this method, when called, will output some text to the console. 

So, once again, I add another property to my car object. After all, a method is just another property of the car object. It's just another key-value par that the car object holds.

What's unique is that the value I'm assigning to it is a function. 

```js
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car);
```

Once again, I type car.lightsOn, and then I add an equals sign, and again since it's a method, I'm assigning it to a function. This function will also have a console log in its body, and I'm just logging the string with the text "The lights are on". 

```js
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
```