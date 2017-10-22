var expect = require("chai").expect;
var sinon = require("sinon");

var { HarperDB } = require("../index.js");

describe("HarperDB", function() {
  describe("#constructor()", () => {
    it("should return an instance of the HarperDB class", function() {
      var db = new HarperDB();
      expect(db).to.exist;
      expect(db).to.be.an.instanceof(HarperDB);
    });
  });
  describe("#connect()", function() {
    it("should throw error if illegal arguments are passed", function() {
      var db = new HarperDB();

      expect(() => db.connect()).to.throw("Connect must be passed 3 arguments");

      expect(() => db.connect("")).to.throw(
        "Connect must be passed 3 arguments"
      );

      expect(() => db.connect("", "")).to.throw(
        "Connect must be passed 3 arguments"
      );

      expect(() => db.connect(1, "", "")).to.throw(
        "connect() arguments must be strings"
      );

      expect(() => db.connect("", 1, "")).to.throw(
        "connect() arguments must be strings"
      );

      expect(() => db.connect("", "", 1)).to.throw(
        "connect() arguments must be strings"
      );
    });

    it("should emit an error event on failed connect", function() {
      var db = new HarperDB();
      var spy = sinon.spy();
      db.event.on("error", spy);

      try {
        db.connect("x", "y", "z");
      } catch (err) {
        expect(err).to.be.an("error");
        expect(spy.called).to.be.true;
      }
    });
  });
});
