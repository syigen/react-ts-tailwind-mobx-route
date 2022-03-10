import CalcStore from "./CalcStore";
import {makeAutoObservable} from "mobx";

class RootStore {

    calcStore: CalcStore;

    constructor() {
        this.calcStore = new CalcStore(this);
        makeAutoObservable(this);
    }

}

export default RootStore;