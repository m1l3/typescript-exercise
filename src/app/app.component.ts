import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  anything: any = null;

  constructor() {

    //02
    console.log("02 - chapter");

    type BankAccount = { money: number, deposit: (value: number) => void };
    type Myself = { name: string, bankAccount: BankAccount, hobbies: string[] };

    let bankAccount: BankAccount = {
      money: 2000,
      deposit(value: number): void {
        this.money += value;
      }
    };

    let myself: Myself = {
      name: "Max",
      bankAccount: bankAccount,
      hobbies: ["Sports", "Cooking"]
    };

    myself.bankAccount.deposit(3000);
    console.log(myself);


    //04
    console.log("04 - chapter");

    //e1
    var double = function (value: number) {
      return value * 2;
    }

    console.log("double: " + double(2));

    //e1 - arrow function
    const doubleArrow = (value: number) => { return value * 2 }

    console.log("doubleArrow: " + doubleArrow(2));
    //e2
    var greet = function (name: string) {
      if (name === undefined) {
        name = "Mikulele";
        console.log("Hello, " + name);
      }
    }
    //greet();
    greet("Milovan");

    //e2 - solution
    const greetDefaultParam = (name = "Mikulele") => { return console.log("Hi " + name); };

    greetDefaultParam();
    greetDefaultParam("Mario");



    //e3
    var numbers = [-23, 33, 38, 5];
    console.log(Math.min.apply(Math, numbers));


    //e3 - spread operator
    const numbersSpread = [3, -34, -55, 345];
    console.log(Math.min(...numbersSpread));


    //e4
    var newArray = [55, 20];
    Array.prototype.push.apply(newArray, numbers);
    console.log(newArray);


    //e4 - spread operator
    const newArraySpread: number[] = [22, 34];
    newArraySpread.push(...numbersSpread);
    console.log(newArraySpread);


    //e5
    var testResults = [3.89, 2.99, 1.38];
    var result1 = testResults[0];
    var result2 = testResults[1];
    var result3 = testResults[2];

    //e5 - solution - destructuring
    const testResultDestructuring = [3.45, 2.34, 1.244, 1.22];
    const [result11, result22, result33] = testResultDestructuring;

    console.log([result11]);
    console.log(result33);
    console.log(result22);

    //e6
    var scientist = { firstName: "Will", experience: 12 };
    var firstName = scientist.firstName;
    var experience = scientist.experience;
    console.log(firstName, experience);

    //e6 - destructuring
    const scientistDestr = { firstNameDestr: "Pero", experienceDestr: 100 };
    const { firstNameDestr, experienceDestr } = scientistDestr;
    console.log(firstNameDestr, experienceDestr);


    //5 - chapter
    console.log("Chapter 5");

    //e1
    var porcheCar = new Car("Porche");
    porcheCar.honk();
    porcheCar.accelerate(299);


    let mercedesCar = new CarClass("MERCEDES");
    mercedesCar.honk();

    //e2
    let animal = new Dog("Snoopy", 22);
    animal.info();
    let canBark: string = animal.bark();
    console.log(canBark);


    //e3


    //8 - chapter
    console.log("CHAPTER 8")


    //e1 = generate generic map class


    const numberMap = new MyMap<number>();
    numberMap.setItem("apples",10);
    numberMap.setItem("bananas",2);
    console.log(numberMap.getItem("apples"));
    console.log(numberMap.getItem("bananas"));

    numberMap.printMap();
    numberMap.clear();

    numberMap.printMap();


    const stringMap = new MyMap<string>();
    stringMap.setItem("apples","10");
    stringMap.setItem("bananas","2");
    console.log(stringMap.getItem("apples"));
    console.log(stringMap.getItem("bananas"));

    stringMap.printMap();
    stringMap.clear();

    stringMap.printMap();

  }

}

class MyMap<T> {
  private map: { [key: string]: T } = {};

  setItem(key: string, item: T) {
    this.map[key] = item;
  }
  getItem(key: string) {
    return this.map[key];
  }
  clear() {
    this.map = {};
  }


  // public  printMap(){

  //   forEach(element => {
  //     console.log(element, this.map[element]);
  //   });

  //   for (let key in this.map) {
  //     console.log(key, this.map[key]);
  //   }
  // }

  printMap() {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }




function Car(name: string) {
  this.name = name;
  this.acceleration = 0;

  this.honk = function () {
    console.log(this.name + " TUUUUUUUUUT!");
  }


  this.accelerate = function (speed: number) {
    this.acceleration = this.acceleration + speed;
    console.log("Porche: " + this.acceleration);

  }
}

export class CarClass {
  private _name: string;
  private acceleration: number = 0;


  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
  public honk(): void {
    console.log("TUUUT " + this.name);
  }

  public accelerate(speed: number): void {
    this.acceleration += speed;
    console.log("mercedes " + this.acceleration);
  }

}


export abstract class Animal {

  protected name: string;
  protected age: number;

  public abstract info;
  public abstract bark;
}


export class Dog extends Animal {
  private canBark: boolean = true;
  private barking: string = "BARK!";
  private notBarking: string = "Can't BARK!";

  constructor(name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }

  public getBarking() {
    return this.barking;
  }

  public getNotBarking() {
    return this.notBarking;
  }


  public info = () => { console.log(this.name + " " + this.age); };
  public bark = (): string => { return this.canBark ? (this.getBarking()) : (this.getNotBarking()) };
}