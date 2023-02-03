
```bash
$ mkdir PROJECT
$ cd PROJECT
```

#### Initialize project
```bash
$ npm init -y
```

#### Install webpack
```bash
$ npm i -D webpack webpack-cli
```

#### Install required packages 

```bash
//load css files 
$ npm i -D css-loader

// will create style nodes from JS strings and add them into html header
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

// typescript support
// see .browserslistrc file
$ npm i -D ts-node ts-loader @babel/preset-typescript

// dev server
$ npm i -D webpack-dev-server
```

Or all together
```bash
$ npm i -D webpack webpack-cli webpack-dev-server\
 css-loader style-loader sass sass-loader mini-css-extract-plugin\ 
 postcss postcss-loader postcss-preset-env\ 
 babel babel-loader @babel/core @babel/preset-env\
 ts-node ts-loader @babel/preset-typescript
```

#### Run development server
```bash
npm run serve
```

#### Build
```bash
npm run build
```
