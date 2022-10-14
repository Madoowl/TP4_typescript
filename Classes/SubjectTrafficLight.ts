import { INotifyObserver } from "../Interfaces/INotifyObserver";
import { IObserver } from "../Interfaces/IObserver";
import { Car } from "./CarListener";

export enum eColor {
    Red,
    Orange,
    Green
};

export class TrafficLight implements INotifyObserver{
    id: number;
    private _state: eColor = eColor.Red;
    get state(): eColor {
        return  this._state;
    }
    
    public set state(value : eColor) {
        this._state = value;
        this.notify
    }
    
    
    cars: IObserver[];

    constructor(id : number){
        this.id = id;
        this.cars = [];
    }
     
    attach(observer: IObserver): void {
        this.cars.push(observer);
    }

    detach(observer: IObserver): void {
        let index: number = this.cars.indexOf(observer);
        this.cars.splice(index, 1);
        }
    
    notify(): void {
        this.cars.forEach(car => {
            car.update(this.state);
        });
    }
}
