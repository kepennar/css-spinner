# A simple SCS spinner
[Example] (https://htmlpreview.github.io/?https://github.com/kepennar/css-spinner/blob/master/example/index.html)


## Usage

Add mathsass peer dependency in your project

```
$ npm i -D mathsass
```

Add **Mathsass** and **Scss-spinner** in your **Node-sass** `includePaths`

```js
sass.render({
  // file: path.join(styleDir, 'main.scss'),
  // ...
  includePaths: [
    path.join(__dirname, '../node_modules/mathsass/dist'),
    path.join(__dirname, '../node_modules/scss-spinner/src')
  ]
  // ...
});
```


And finally import **Scss-spinner** in your `.scss` file.
```sass
$spinner-animation-duration: 'time-for-a-rotation'; // default 1s
$spinner-nb-point: 'number-of-spinner-points'; // default 20
$spinner-point-color: 'main-color'; // default red
$spinner-alternative-color: 'secondary-color'; // default blue

@import 'spinner';

```
