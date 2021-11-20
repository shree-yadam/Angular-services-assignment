export class CounterService {
  private activeToInactive: number;
  private inactiveToActive: number;

  constructor() {
    this.activeToInactive = 0;
    this.inactiveToActive = 0;
  }

  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log("Number of Active to Inactive operations increased to: ", this.activeToInactive);
  }

  incrementInactiveToActive() {
    this.inactiveToActive++;
    console.log("Number of Inactive to Active operations increased to: ", this.inactiveToActive);
  }

}
