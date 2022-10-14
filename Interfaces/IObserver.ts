import { eColor } from "../Classes/SubjectTrafficLight";

export interface IObserver{
    update: (trafficLightColor :eColor)=> void;
}

