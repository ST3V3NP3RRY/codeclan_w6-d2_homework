const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");
const { AssertionError } = require("assert");

describe("Park", function () {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let park;
  beforeEach(function () {
    dinosaur1 = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur2 = new Dinosaur("Brontosaurus", "herbivore", 30);
    dinosaur3 = new Dinosaur("Pterodactyl", "carnivore", 25);
    park = new Park("Jurrasic Park", 50, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurrasic Park");
  });

  it("should have a ticket price", function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it("should have a collection of dinosaurs", function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it("should be able to add a dinosaur to its collection", function () {
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs;
    const expected = [dinosaur1];
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to remove a dinosaur from its collection", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur2);
    const actual = park.dinosaurs;
    const expected = [dinosaur1];
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const expected = dinosaur1;
    assert.deepStrictEqual(park.findDinosaurWithMostVisitors(), expected);
  });

  it("should be able to find all dinosaurs of a particular species", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const expected = [dinosaur1];
    assert.deepStrictEqual(park.findDinosaurBySpecies("t-rex"), expected);
  });

  it("should be able to calculate the total number of visitors per day", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const expected = 105;
    assert.strictEqual(park.calculateVisitorsPerDay(), expected);
  });

  it("should be able to calculate the total number of visitors per year", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const expected = 38325;
    assert.strictEqual(park.calculateVisitorPerYear(), expected);
  });

  it("should be able to calculate total revenue for one year", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const expected = 1916250;
    assert.strictEqual(park.calculateTotalRevenueForYear(), expected);
  });

  it("should be able to remove all dinosaurs of a particular species", function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const expected = [dinosaur2];
    assert.deepStrictEqual(
      park.removeDinosaurBySpecies("Brontosaurus"),
      expected
    );
  });
});
