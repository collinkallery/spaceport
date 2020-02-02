var Being = require('./being')
var Part = require('./part')

class Ship {
  constructor({
    name,
    type,
    odometer = 0,
    fuelCapacity = 10,
    captain,
    maxCrew,
    parts
  }) {
    this.name = name;
    this.validTypes = ["military", "passenger", "cargo"];
    this.type = this.validTypes.includes(type) ? type : undefined;
    this.maxCrew = maxCrew;
    this.odometer = odometer;
    this.fuelCapacity = fuelCapacity;
    this.fuel = 0;
    this.captain = captain;
    this.crew = [];
    this.cargo = [];
    this.parts = parts || {};

  }
  addCrew(members) {
    for (var i = 0; i < members.length; i++) {
      if (this.crew.length < this.maxCrew && members[i] instanceof Being) {
        this.crew.push(members[i])
      }
    }
  }
  loadCargo(partCargo) {
    if (partCargo instanceof Part) {
      this.cargo.push(partCargo);
    }
  }
  updatePart(newPart) {
    this.parts[newPart.type] = newPart;
  }
}

module.exports = Ship;
