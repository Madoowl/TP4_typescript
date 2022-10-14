import { IObserver } from "../Interfaces/IObserver";
import { eColor } from "./SubjectTrafficLight";

export enum eCarAction {
    drive,
    brake,
    stop
};

export class Car implements IObserver {
    id: number;
    model : string;
    action: eCarAction;

    constructor(id: number, model: string){
        this.id = id;
        this.model = model;
        this.action = eCarAction.stop;
    }
    
    update (trafficLightColor: eColor) {
        if (trafficLightColor == eColor.Green) 
        {
            this.action = eCarAction.drive;
        }
        else if(trafficLightColor == eColor.Orange)  
        {
            this.action = eCarAction.brake;
        }else if(trafficLightColor == eColor.Red)
        {
            this.action = eCarAction.stop
        }
        console.log(`This ${this.model} is on action ${this.action}`);
        return ;
    };

    
}