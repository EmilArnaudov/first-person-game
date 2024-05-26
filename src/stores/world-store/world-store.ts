import { makeAutoObservable } from 'mobx';

export class WorldStore {
  constructor() {
    makeAutoObservable(this);
  }

  public testPropterty: boolean = true;
}
