
```bash
$ mkdir PROJECT
$ cd PROJECT
```

Initialize project
```bash
$ npm init -y
```

Install webpack
```bash
$ npm i -D webpack webpack-cli
```

Install required packages 

```bash
//load css files 
$ npm i -D css-loader

// will creates style nodes from JS strings and add them into html header
$ npm i -D style-loader

// process sass/scss files
$ npm i -D sass sass-loader

// extract styles and save it in separate file
$ npm i -D mini-css-extract-plugin

// add -prefixes to css rules for backward compatibility
// see .browserslistrc file
$ npm i -D postcss postcss-loader postcss-preset-env

// transpile javascript
// see .browserslistrc file
$ npm i -D babel babel-loader @babel/core @babel/preset-env

// dev server
$ npm i -D webpack-dev-server
```



