const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  this.dinosaurs.pop(dinosaur);
};

Park.prototype.findDinosaurWithMostVisitors = function () {
  mostVisitors = [];
  for (let dinosaur of this.dinosaurs) {
    mostVisitors.push(dinosaur.guestsAttractedPerDay);
    highest = Math.max(...mostVisitors);
    if (highest === dinosaur.guestsAttractedPerDay) {
      return dinosaur;
    }
  }
};

Park.prototype.findDinosaurBySpecies = function (species) {
  foundDinosaur = [];
  for (let dinosaur of this.dinosaurs) {
    if (species === dinosaur.species) {
      foundDinosaur.push(dinosaur);
    }
  }
  return foundDinosaur;
};

Park.prototype.calculateVisitorsPerDay = function () {
  totalGuests = 0;
  for (let dinosaur of this.dinosaurs) {
    totalGuests += dinosaur.guestsAttractedPerDay;
  }
  return totalGuests;
};

Park.prototype.calculateVisitorPerYear = function () {
  guestsPerDay = this.calculateVisitorsPerDay();
  guestsPerYear = guestsPerDay * 365;
  return guestsPerYear;
};

Park.prototype.calculateTotalRevenueForYear = function () {
  guestsPerYear = this.calculateVisitorPerYear();
  totalRevenue = guestsPerYear * this.ticketPrice;
  return totalRevenue;
};

//I don't think this is the correct solution, this only finds the dinosaur you want to remove.
//How do you remove the dinosaur without affecting the indexes of the others?
Park.prototype.removeDinosaurBySpecies = function (species) {
  dinosaurToRemove = this.findDinosaurBySpecies(species);
  return dinosaurToRemove;
};

module.exports = Park;
