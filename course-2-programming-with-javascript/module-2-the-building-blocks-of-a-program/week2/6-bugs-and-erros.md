
```js 
console.log(a+b)
console.log("This lie is never reached")

throw new ReferenceError("a is not defined")

```

Use the try and catch to keep the program running even if there is an error

```js
try {
    console.log(a+b)
} catch (e) {
    console.log("Got an error")
}
```