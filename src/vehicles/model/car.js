import {Vehicle} from './vehicle.js';

export class Car extends Vehicle{

    constructor(id, license, make,latlong ){
        super(id,license,latlong);  
        this.make = make;         
    }
    start(){
        console.log(`Car ${this.id} has started.`)
    }
}

