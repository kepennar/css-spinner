# A simple SCSS spinner

[![NPM](https://nodei.co/npm/scss-spinner.png)](https://nodei.co/npm/scss-spinner/)

[Example] (https://htmlpreview.github.io/?https://github.com/kepennar/css-spinner/blob/master/example/index.html)


## Usage

Add **Mathsass** and **Scss-spinner**as `devDependencies`
```sh
$ npm i -D mathsass
$ npm i -D scss-spinner
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
// You can override this variables. If none, defaults value are used
$spinner-animation-duration: 'time-for-a-rotation'; // default 1s
$spinner-nb-point: 'number-of-spinner-points'; // default 20
$spinner-point-color: 'main-color'; // default red
$spinner-alternative-color: 'secondary-color'; // default blue

@import 'spinner';

```
