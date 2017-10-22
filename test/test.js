var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

var sinon = require("sinon");

var { HarperDB } = require("../index.js");

chai.use(chaiAsPromised);
var expect = chai.expect;
var assert = chai.assert;

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

    it("should emit an error event on failed connect", function(done) {
      var db = new HarperDB();
      var spy = sinon.spy();
      db.event.on("error", spy);

      var connect = db.connect("x", "y", "z");

      connect.then(() => {
        expect(spy.called).to.be.true;
        done();
      });
    });

    it("should connect to server", function(done) {
      var db = new HarperDB();
      var spy = sinon.spy();
      db.event.on("connection", spy);

      var connect = db.connect("http://httpbin.org/post", "y", "z");

      connect.then(() => {
        expect(spy.called).to.be.true;
        expect(db.isConnected).to.be.true;
        expect(db.options).to.be.an("object");
        done();
      });
    });
  });
  describe("#request()", function() {
    it("should emit an error if not connect", function(done) {
      var db = new HarperDB();
      var spy = sinon.spy();
      db.event.on("error", spy);

      expect(() => db.request({ operation: "list_users" })).to.throw(
        "Must connect to DB first using .connect()"
      );

      expect(db.isConnected).to.be.false;
      expect(spy.called).to.be.true;
      done();
    });
    it("should succesfully return request promise", function(done) {
      var db = new HarperDB();
      var spy = sinon.spy();
      db.event.on("request", spy);

      var connect = db.connect("http://httpbin.org/post", "y", "z");

      connect.then(() => {
        db.request({ operation: "list_users" }).then(() => {
          expect(db.isConnected).to.be.true;
          expect(db.options).to.be.an("object");
          expect(spy.called).to.be.true;
          done();
        });
      });
    });
  });
});
