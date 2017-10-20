var expect = require("chai").expect;
var { HarperDB } = require("../HarperDB.js");

describe("HarperDB", () => {
  describe("#constructor()", () => {
    it("should return an instance of the HarperDB class", () => {
      var db = new HarperDB();
      expect(db).to.exist;
      expect(db).to.be.an.instanceof(HarperDB);
    });
  });
  describe("#connect()", () => {
    it("should throw error if not enough arguments are passed", () => {
      var db = new HarperDB();
      expect(() => db.connect()).to.throw(Error);
      expect(() => db.connect(1)).to.throw(Error);
      expect(() => db.connect(1, 2)).to.throw(Error);
    });
  });
});
