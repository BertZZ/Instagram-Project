var request = require("request");
var Browser = require("zombie");
var helloWorld = require("../server.js")
var browser = new Browser();

var url = "http://localhost:8081/"

describe("Instagram", function() {

  it("Sees Instagram as the Title", function(done) {
    request.get(url, function(error, response, h1) {
      expect(h1).toContain("Instagram");
      done();
    });
  });
});
