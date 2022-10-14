import { IObserver } from "./IObserver";

export interface INotifyObserver {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(observer: IObserver): void;
}