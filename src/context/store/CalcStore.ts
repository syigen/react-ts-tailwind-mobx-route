import RootStore from "./RootStore";
import {action, makeAutoObservable, observable} from "mobx";

export default class CalcStore {
    @observable
    count: number = 0;

    constructor(rootStore: RootStore) {
        makeAutoObservable(this);
    }

    @action
    increment() {
        this.count++;
    }

    @action
    decrement() {
        this.count--;
    }

}