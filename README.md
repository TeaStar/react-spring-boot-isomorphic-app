# react-spring-boot-isomorphic-app

An Hello World example application that uses a Spring Java backend with a React
frontend and can perform server-side rendering (SSR).

Stripped back version created from the following project: 
[spring-react-boilerplate](https://github.com/pugnascotia/spring-react-boilerplate)

## Running the code

Execute `./mvnw` 

To run the frontend in hot-reloading mode, switch to another
terminal and execute:

    cd src/main/app
    yarn start

Your browser should automatically open
[http://localhost:3000](http://localhost:3000).  Now when you edit your
files, the changes will be loaded in your browser automatically and, where
possible, be applied without losing the application's current state thanks
to `react-hot-loader`!


## Testing the Webpack bundle / render function

In order to preempt runtime errors with Nashorn loading the bundle, a test
script is executed by Maven during the `test-compile` phase, located at
`src/test/js/react-renderer/test.js`. If this script fails, you can diagnose the problem
by running:

    DEBUG=true mvn test-compile

This will rebuild the webpack bundle without minification, which should
make the cause of any error clearer.

It's easy to create a bundle that's broken on the server by including code that
expects a DOM - and that includes the Webpack style loader. This is the root of
most problems. You should note that server-side rendering *does not* require a
DOM - which is why `src/main/js/react-renderer/polyfill.js` doesn't provide
any `window` or `document` stubs.
