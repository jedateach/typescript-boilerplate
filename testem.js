const coverageServer = require("./testem-coverage-server");

let chromeArgs = ["--disable-gpu", "--remote-debugging-port=9222"];
let firefoxArgs = [];

if (process.env.HEADLESS) {
  chromeArgs.unshift("--headless");
  firefoxArgs.unshift("--headless");
}

let serve_files = [
  { src: coverageServer.clientFile },
  { src: "dist/mylib.instrumented.umd.js" },
  { src: "dist/tests.umd.js" }
];

if (!process.env.HEADLESS) {
  serve_files.push({ src: "!tests/_headless.js" });
}

module.exports = {
  launch_in_dev: ["Chrome"],
  launch_in_ci: ["Chrome"],
  browser_args: {
    Chrome: chromeArgs,
    Firefox: firefoxArgs
  },
  test_page: "testem.mustache",
  src_files: ["src/*.ts", "tests/*.ts"],
  serve_files,
  css_files: [],
  routes: {
    "/images": "images"
  },
  proxies: coverageServer.proxies,
  before_tests: function(config, data, callback) {
    coverageServer.startCoverageServer(callback);
  },
  after_tests: function(config, data, callback) {
    coverageServer.shutdownCoverageServer(callback);
  }
};
