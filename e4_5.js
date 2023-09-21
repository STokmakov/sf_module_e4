class Appliance {
    constructor(name, amperage) {
      this.name = name;
      this.voltage = 220;
      this.amperage = amperage;  
      this.connect = false;
    }
     
    getName() {
      console.log(`Name is ${this.name}`);
    }
  
    getPover() {
      console.log(`Power is ${this.voltage*this.amperage} W`);
    }
  
    getOn() {
      if(this.connect===false) {
        this.connect = true;
        console.log(`The device is switched on`);
      }
      else {
        console.log(`The device is already working`);
      }
    } 
     
    getOff() {
      if(this.connect===true) {
        this.connect = false;
        console.log(`The device is switched off`);
      }
      else {
        console.log(`The device is already switched off`);
      }
    }
  }
  
class Kettle extends Appliance {
  constructor(name, amperage, heating=false, color='red') {
    super(name);
    this.amperage = amperage;
    this.heating = heating;
    this.color = color;
  }
	
  
    getColor() {
      console.log(`Color is ${this.color}`);
    }
  
    getHeatingOn() {
      if(this.heating===false) {
        this.heating = true;
        console.log(`Heating on`);
      }
      else {
        console.log(`The heater is already working`);
      }
    }
  
    getHeatingOff() {
      if(this.heating===true) {
        this.heating = false;
        console.log(`Heating off`);
      }
      else {
        console.log(`The heating is already off`);
      }
    }
}     
class Hoover extends Appliance {
  constructor(name, amperage, wetcleaning=false, dustcollector='sack') {
    super(name);
    this.amperage = amperage;
    this.wetcleaning = wetcleaning;
    this.dustcollector = dustcollector;
  }	
    
    getWetcleaningOn() {
      if(this.wetcleaning===false) {
        this.wetcleaning = true;
        console.log(`Wet cleaning included`);
      }
      else {
        console.log(`Wet cleaning is already included`);
      }
    } 
      
    getWetcleaningOff() {
      if(this.wetcleaning===true) {
          this.wetcleaning = false;
          console.log(`Wet cleaning switched off`);
        }
        else {
          console.log(`Wet cleaning is already switched off`);
        }
    } 
} 
const kettle1 = new Kettle('Scarlett', 8, true);
const hoover1 = new Hoover('Karcher', 5, false, 'container');
    
    kettle1.getName();
    kettle1.getPover();
    kettle1.getColor();
    kettle1.getOn();
    kettle1.getHeatingOn();
    kettle1.getHeatingOff();
    kettle1.getHeatingOff();
    kettle1.getOff();
    
    hoover1.getName();
    hoover1.getPover();
    hoover1.getOn();
    hoover1.getWetcleaningOff();
    hoover1.getWetcleaningOn();
    hoover1.getOff();