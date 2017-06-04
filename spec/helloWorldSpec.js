var request = require("request");
var Browser = require("zombie");
var helloWorld = require("../server.js")
var browser = new Browser();

var base_url = "http://localhost:8081/"

describe("Hello World Server", function() {

  it("returns Hello World", function(done) {
    request.get(base_url, function(error, response, body) {
      expect(body).toBe("Hello World");
      done();
    });
  });
});
