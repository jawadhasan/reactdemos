export class Vehicle{

    constructor(id, license,latlong){
        this.id = id;
        this.license=license;
        this.latlong=  latlong;
    }
    start(){
        throw 'Please override start in the Vehicle';
    }
}