function Appliance(name, amperage) {
    this.name = name,
    this.voltage = 220
    this.amperage = amperage,
    this.connect = false
  }
  Appliance.prototype.getName = function() {
    console.log(`Name is ${this.name}`);
  }
  
  Appliance.prototype.getPover = function() {
    console.log(`Power is ${this.voltage*this.amperage} W`);
  }
  
  Appliance.prototype.getOn = function() {
    if(this.connect===false) {
      this.connect = true;
      console.log(`The device is switched on`);
    }
    else {
      console.log(`The device is already working`);
    }
  } 
  
  Appliance.prototype.getOff = function() {
    if(this.connect===true) {
      this.connect = false;
      console.log(`The device is switched off`);
    }
    else {
      console.log(`The device is already switched off`);
    }
  } 
  
  function Kettle(name, amperage, heating=false, color='white') {
    this.name = name,
    this.amperage = amperage,
    this.heating = heating,
    this.color = color
  
  }
  Kettle.prototype = new Appliance();
  
  Kettle.prototype.getColor = function() {
    console.log(`Color is ${this.color}`);
  }
  
  Kettle.prototype.getHeatingOn= function() {
    if(this.heating===false) {
      this.heating = true;
      console.log(`Heating on`);
    }
    else {
      console.log(`The heater is already working`);
    }
  } 
  
  Kettle.prototype.getHeatingOff = function() {
    if(this.heating===true) {
      this.heating = false;
      console.log(`Heating off`);
    }
    else {
      console.log(`The heating is already off`);
    }
  } 
  
  function Hoover(name, amperage, wetcleaning=false, dustcollector='sack') {
    this.name = name,
    this.amperage = amperage,
    this.wetcleaning = wetcleaning,
    this.dustcollector = dustcollector
  }
  Hoover.prototype = new Appliance();
  
  Hoover.prototype.getWetcleaningOn= function() {
    if(this.wetcleaning===false) {
      this.wetcleaning = true;
      console.log(`Wet cleaning included`);
    }
    else {
      console.log(`Wet cleaning is already included`);
    }
  } 
  
  Hoover.prototype.getWetcleaningOff = function() {
    if(this.wetcleaning===true) {
      this.wetcleaning = false;
      console.log(`Wet cleaning switched off`);
    }
    else {
      console.log(`Wet cleaning is already switched off`);
    }
  } 
  const Kettle1 = new Kettle('Scarlett', 8, true);
  const Hoover1 = new Hoover('Karcher', 5, false, 'container');
  
  Kettle1.getName();
  Kettle1.getPover();
  Kettle1.getColor();
  Kettle1.getOn();
  Kettle1.getHeatingOn();
  Kettle1.getHeatingOff();
  Kettle1.getHeatingOff();
  Kettle1.getOff();
  
  Hoover1.getName();
  Hoover1.getPover();
  Hoover1.getOn();
  Hoover1.getWetcleaningOff();
  Hoover1.getWetcleaningOn();
  Hoover1.getOff();