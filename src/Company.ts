import faker from "faker";
import { Mappable } from './CustomMap';

export class Company implements Mappable{
    companyName:string;
    catchPharase:string;
    location:{
        lat:number,
        lng:number
    }

    constructor(){
        this.companyName=faker.company.companyName();
        this.catchPharase=faker.company.catchPhrase()
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }

    markerContent():string{
        return `
        <div>
        <h3 style="color:red">CompanyName:${this.companyName}</h3>   
        <h5>Catchphrase:${this.catchPharase}</h5>
        </div>
        `
    }

    color:"blue"
}