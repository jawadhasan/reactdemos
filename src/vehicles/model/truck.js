import {Vehicle} from './vehicle.js';

export class Truck extends Vehicle{

    constructor(id, license, storageArea, latLong ){
        super(id,license,latLong); 
        this.storagearea = storageArea;
    }

    start(){
        console.log(`Truck ${this.id} has started.`)
    }
}