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
  }
  return mostVisitors;
};

//Pass in the species which will be T-rex
//How do I find T-rex in the list of dinosaurs
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

module.exports = Park;
