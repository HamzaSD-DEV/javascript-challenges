function midArray(arr = []) {
    if (arr.length % 2 !== 0) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        return [arr[arr.length / 2], arr[arr.length / 2 - 1]]
    }


}

let person = ["alex", "tomas", "zad"];
let person2 = ["alex", "tomas", "zad", "mohsen"];
console.log(midArray(person));
console.log(midArray(person2));

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function evenInd(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr[i] *= 2;
    }
    return arr
}

console.log(evenInd(nums))

function evenNumbers(begin, end) {
    let evenArray = [], oddArray = [];
    if (begin % 2 === 0) {
        let i = begin
        for (i; i < end; i += 2) {
            evenArray.push(i);
            oddArray.push(i + 1);
        }
        if (i === end) {
            evenArray.push(i);
        }
    } else {
        let i = begin
        for (i; i < end; i += 2) {
            evenArray.push(i + 1);
            oddArray.push(i);
        }
        if (i === end) {
            oddArray.push(i);
        }
    }
    console.log("evenArray=", evenArray, "oddArray=", oddArray);
}

evenNumbers(10, 100);

function multiplicationTable() {
    for (let i = 1; i < 10; i++) {
        console.log('la table de multiplication de ', i);
        for (let j = 1; j < 10; j++) {
            console.log(i, '*', j, '= ', i * j);
        }
    }
}

multiplicationTable();

function invertArray(arry = []) {
    let j = arry.length - 1;
    let aux;
    for (let i = 0; i <= Math.floor(arry.length / 2); i++) {
        aux = arry[j];
        arry[j] = arry[i];
        arry[i] = aux;
        j--;
    }
    return arry;
}

let table1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(invertArray(table1));

function sortInc(arry = []) {
    let ind = 0
    let aux;
    let j;
    for (let i = 1; i < arry.length; i++) {
        if (arry[i] < arry[ind]) {
            aux = arry[ind];
            arry[ind] = arry[i];
            arry[i] = aux;
            j = ind - 1;

            while (arry[ind] < arry[j] && j >= 0) {
                aux = arry[ind];
                arry[ind] = arry[j];
                arry[j] = aux;
                ind = j;
                j--;


            }
        }
        ind = i;
    }
    return arry;
}

let table2 = [4, 7, 9, 5, 8, 3, 6, 1, 2, 0];
console.log(sortInc(table2));

function
myFunction(a) {
    a = a.slice(2, a.length());
    return a;
}

myFunction("fgbhgbhg");

function some(...arg) {
    return arg.reduce((prev, current) => {
        return prev + current;
    })
}

tab1 = [4, 7, 9, 5, 8, 3, 6, 1, 2, 0];
console.log(some(tab1));

function occur(tab = [], n) {
    let inTab = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === n) {
            inTab.push(i);
        }
    }
    return inTab;
}

a = [1, 4, 2, 5, 4, 5, 5, 2, 4, 6, 5, 9, 5,];
console.log(occur(a, 5));

function capitalize(a = "") {
    let i = 0;
    let b = "";
    for (i; i < a.length - 1; i += 2) {
        b += a[i].toUpperCase();
        b += a[i + 1];
    }
    if (i === a.length - 1) {
        b += a[i].toUpperCase();
    }
    console.log(i);
    console.log(a.length)
    return b;
}

c = "fhghfghb";

console.log(capitalize(c));

function binary(num) {
    let reste = "";
    let i = 0;
    while (num > 0) {
        i++;
        reste = reste.padStart(i, (num % 2).toString());
        num = Math.floor(num / 2);
    }
    return reste;
}

binary(10)

class calculator {
    add(a, b) {
        return a + b;
    }

    subst(a, b) {
        return a - b;
    }

    multiplay(a, b) {
        return a * b;
    }

    divis(a, b) {
        return a / b;
    }
}

let calculator1 = new calculator();
calculator1.add(4, 5);
calculator1.subst(4, 6);
calculator1.multiplay(9, 45)
calculator1.divis(54, 54)

class Tv {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }

    increaseVol() {
        if (this.volume < 100) {
            this.volume++;
            return `the new volume is ${this.volume}`;
        } else {
            return `the new volume is Max 100`;
        }
    }

    deccreaseVol() {
        if (this.volume > 0) {
            this.volume--;
            return `the new volume is ${this.volume}`;
        } else {
            return `the new volume is Muted 0`;
        }
    }

    setChannel(chN) {
        if (chN <= 100 && chN > 0) {
            this.channel = chN;
            return "the new channel is " + this.channel;
        } else {
            return `the current channel ic ${this.channel}`;
        }
    }

    resetTv() {
        this.channel = 1;
        this.volume = 50;
        return `${this.brand} reset is done the channel is ${this.channel} and the volume is ${this.volume}`
    }


}

HamzaTV = new Tv();
HamzaTV.increaseVol();
HamzaTV.deccreaseVol();
HamzaTV.setChannel(99);
HamzaTV.resetTv();

class SportPlayer {
    #_name;

    constructor(name, age, height, weight) {
        this._name = name;
        this._age = age;
        this._height = height;
        this._weight = weight;
    }

    getAge() {
        return this.#_name + " is " + this._age + " years old"
    }

    getHeight() {
        return this.#_name + " is " + this._height + "Cm";
    }

    getWeight() {
        return this.#_name + " is " + this._weight + "Kg";
    }

    getName() {
        return this.#_name + " is " + this._name + "Kg";
    }
}

let chadi = new SportPlayer("Chadi", 26, 181, 75);
chadi.getName();
chadi.getAge();
chadi.getHeight();
chadi.getWeight()

/*

class CoffeShop {
    constructor(name) {
        this._name = name;
        this._menue = [
];
        this._orders = [];
    }

    addOrder(item) {
        for (let i = 0; i < this._menue.length; i++) {
            if (this._menue[i].item === item) {
                this._orders.push(item);
                return "order added successfully :)";
            }

        }
        return `${item} doesn't exist in the Menu !!!`
    }

    fulfilOrders() {

        if (this._orders.length >= 1) {
            let msg = `the ${this._orders[0]}  is ready`;
            this._orders.shift();
            return msg;
        }
         else {
            return "all orders have been fulfilled";
        }
    }
    listorders(){
        return this._orders;
    }
    dueAmount(){
        // this._menue.filter((items)=>this._orders.includes(items.item))
        let res = []
        for(let i = 0 ; i < this._menue.length ; i++){
            for(let m = 0 ; m < this._orders.length ; m++){
                if(this._menue[i].item === this._orders[m]){
                    res.push(this._menue[i])
                }
            }
        }
        console.log(res)
        let amount = 0
        for(let j = 0 ; j < res.length ; j++){
            amount+= res[j].price
        }
        return amount
    }
    cheapestItem(){
        let cheapest=this._menue[0];

        for (let i=1;i<this._menue.length;i++){
            if(this._menue[i].price<cheapest.price){
                cheapest=this._menue[i];
            }
        }
        return cheapest.item;
    }
    drinkOnly(){
        let drinks = this._menue.filter((item)=>item.type==="drink")
        console.log(drinks)
        let res=[];
        for(let i=0;i<drinks.length;i++){
            res.push(drinks[i].item);
        }
        return res;
    }
    foodOnly(){
        let foods = this._menue.filter((item)=>item.type==="food")
        console.log(foods)
        let res=[];

        for(let i=0;i<foods.length;i++){
            res.push(foods[i].item);
        }
        return res;
    }
}
*/

function cyclops(decimal = 0) {
    let rest = "";
    let i = 0;
    let a = decimal;
    let bite = "";
    let result = false;
    if (decimal % 2 === 1) {

        while (decimal > 0) {
            i++;
            bite = (decimal % 2).toString();
            rest = bite + rest;
            decimal = Math.floor(decimal / 2);
            console.log(bite);
            console.log(rest);
        }

        let count = 0;
        let j = 0;
        for (j; j < rest.length; j++) {
            if (rest[j] === "1") {
                count++;
            }
        }
        console.log(`${a} en binaire = ${rest}`);
        console.log(`nombre des 1 ${count}`);
        let onesSum = (count === (rest.length - 1));
        console.log(`le nobre des 1 est bon ? ${onesSum}`);
        result = onesSum && rest[Math.floor(rest.length / 2)] === '0';
    }
    console.log(`${a} est cyclops ${result}`)
}

cyclops(5);

class Coffeshops {
    constructor(name) {
        this.name = name;
        this.menu = [
            {
                item: "pineapple juice",
                type: "drink",
                price: 7,
            },
            {
                item: "orange juice",
                type: "drink",
                price: 5,
            },
            {
                item: "pizza",
                type: "food",
                price: 20,
            }
        ];
        this.order = [];
    }

    getName() {
        return this.name
    }

    addOrder(itemName) {
        for (let i = 0; i < this.menu.length; i++) {
            if (itemName === this.menu[i].item) {
                this.order.push(itemName);
                return "added Successfully"
            }
        }
        return itemName + " is currently unavailable in the menu"
    }

    addOrderForIn(itemName) {
        for (let i in this.menu) {
            if (itemName === this.menu[i].item) {
                this.order.push(itemName);
                return "added Successfully"
            }
        }
        return itemName + " is currently unavailable in the menu"
    }

    addOrderForEach(itemName) {

        this.menu.forEach((menu) => {
            if (itemName === menu.item) {
                this.order.push(itemName);
                return "added Successfully";
            }
        })
        return itemName + " is currently unavailable in the menu";
    }

    fulfilOrders() {

        if (this.order.length >= 1) {
            let msg = `the ${this.order[0]}  is ready`;
            this.order.shift();
            return msg;
        } else {
            return "all orders have been fulfilled";
        }
    }

    listorders() {
        return this.order;
    }

    dueAmount() {
        let total = 0;
        for (let itemName in this.order) {
            for (let menu in this.menu) {
                if (itemName === menu.item) {
                    total += menu.price;
                }
            }
        }
        return total;
    }

    cheapestItem() {
        let cheepestItem = this.menu[1].item;
        let cheepestPrice = this.menu[1].price;
        for (let items in this.menu) {
            if (items.price < cheepestPrice) {
                cheepestItem = items.item;
            }
        }
        return cheepestItem
    }

    drinkOnly() {
        let drinks = this.menu.filter(item => item.type === "drink");
        console.log("drinks",drinks);
        let drinkList = [];
        for (let drink in drinks) {
            console.log("loop",drinks[drink]);
            drinkList.push(drinks[drink].item);
            console.log(drink.item);

        }
        return drinkList
    };
    drinkOnly2(){
        let drinks = this.menu.filter((item)=>item.type=="drink")
        console.log(drinks)
        let res=[];
        for(let i=0;i<drinks.length;i++){
            res.push(drinks[i].item);
        }
        return res;
    }

    foodOnly() {
        let foods = this.menu.filter((item) => item.type === "food")
        console.log(foods)
        let res = [];

        for (let i = 0; i < foods.length; i++) {
            res.push(foods[i].item);
        }
        return res;
    }


}

let zitouna = new Coffeshops("zitouna");
/*zitouna.getName();
zitouna.addOrder("orange juice");
zitouna.addOrder("pineapple juice");
zitouna.addOrder("pizza");
zitouna.addOrderForEach("pineapple juice");
zitouna.addOrderForIn("pizza");
zitouna.fulfilOrders();
zitouna.listorders();
zitouna.dueAmount();
zitouna.cheapestItem();*/
zitouna.drinkOnly();
/*
zitouna.foodOnly();
zitouna.drinkOnly2();*/
