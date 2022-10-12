import {v4 as uuidv4} from 'uuid';

enum eColor {
    Red,
    Orange,
    Green
};

class TrafficLight{
    id: number;
    state: eColor;

    constructor(){
        this.id = uuidv4();
        this.state = eColor.Red;
    };

}