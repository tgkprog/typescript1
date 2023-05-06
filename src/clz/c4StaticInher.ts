module Base2 {
  class Ride {
    private static _activeRides: number = 0;

    start() {
      Ride._activeRides++;
    }
    stop() {
      Ride._activeRides--;
    }

    static print() {
      console.log("Active rides " + Ride._activeRides + " at " + new Date());
    }

    static get activeRides() {
      return Ride._activeRides;
    }
  }

  let r1 = new Ride();
  let r2 = new Ride();

  r1.start();
  Ride.print();
  r2.start();
  Ride.print();
  r2.stop();
  Ride.print();
  r1.stop();
  Ride.print();

  class GeneralMappigs {
    [mapping: string]: string;
  }

  // class Mapping<K> {
  //   constructor(public obj : K){

  //   }
  // }
  // class GeneralMappigs2{

  //   [mapping2:Mapping<string>] : Mapping<string>;
  // }

  let seats = new GeneralMappigs();
  let i = 0;
  seats["a" + i++] = "Sham";
  seats["a" + i++] = "Sham";
}
