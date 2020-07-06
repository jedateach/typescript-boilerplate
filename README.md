# Typescript browser library boilerplate

A boilerplate for the purposes of creating a library using modern tooling, with good testing support.

Combines the following technologies:

* **Typescript**: source, tests, demo language
* **Rollup**: Module bundler
* **Jasmine**: Test framework
* **Testem**: Tests runner
* **Nyc**: Coverage instrumentation + reporting
* **Prettier**: Code formatting
* **ESLint**: Code linting
* **Typedoc**: API Documentation

The boilerplate refers to the library as `mylib`.

This example project demonstrates how to:

* [x] Compile Typescript source into modern js, with sourcemaps
* [x] Bundle esnext js into separate umd bundles, split by module, with sourcemaps to ts files
* [x] View in the browser with live reload + file watching
* [x] Run tests in the browser with Testem
* [x] Get code coverage reporting via istanbul/nyc
* [x] Produce API documentation for library
* [ ] Continuously integrate - run tests
* [ ] Continuously publish npm package, and documentation website

## Un-frequently asked questions

### Why not use Jest for testing?

Jest runs tests purely in node, which makes it harder to develop a visual library, such as one that uses the html canvas.

Testem on the other hand, can run a server, and serve tests to any browser. This is useful for automated cross-browser testing.

## TODO

* [ ] Find out how to improve source maps so that `esnext` path doesn't show up.
* [ ] Consider converting project to a yeoman project for fast deploy of new projects
