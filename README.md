[![Build Status](https://travis-ci.org/techprd/kotlin_node_js_seed.svg?branch=master)](https://travis-ci.org/techprd/kotlin_node_js_seed)

# Kotlin Node.js Seed Project
This project is an application skeleton for a typical Node.js app written entirely with Kotlin.


## Node.js app written with Kotlin

### Full Tutorial coming soon
<a href="http://techprd.com/">Node.js app with Kotlin</a>

### What's in this project?

1.  express.js to run server
2.  ejs templating engine for express.js
3.  Kotlin Dependencies
4.  gradle to compile/transcompile kotlin to js



### How to Use:

#### Install Node dependencies
```bash
$ npm install
```

#### Compile Kotlin  to JS using gradle

```bash
$ ./gradlew build
```

### Run Tests
 * Test are written in Kotlin Unit test 
 then compiled to Javascript and run using Jasmine framework
 
```bash
$ ./gradlew test 
```

#### Run Server

```bash
$ npm start
```

#### Kotlin official site
https://kotlinlang.org/docs/reference/js-overview.html

## To Do
1.  <s>add frontend framework</s>
2.  integrate sass styling
3.  use gulp watch for automatic compilation
4.  add testing framework

