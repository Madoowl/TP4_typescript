import { Car } from "./Classes/CarListener";
import { eColor, TrafficLight } from "./Classes/SubjectTrafficLight";

function main(): void {
    const trafficLight: TrafficLight = new  TrafficLight(1);

    let car_mustang: Car = new Car(0, "mustang");
    let car_clio: Car = new Car(1, "clio");
    trafficLight.attach(car_mustang);
    trafficLight.attach(car_clio);

    trafficLight.state = eColor.Green;
    trafficLight.state = eColor.Orange;
}