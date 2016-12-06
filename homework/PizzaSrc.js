/**
 * Created by michael on 07.11.16.
 */
'use strict';


export class Pizzeria {
    constructor(){
        this.orders = {};
    }

    add_order(user_name,pizza) {
        this.orders[user_name] = pizza;
        return this.orders[user_name];
    }

};


export class Pizza {
    constructor(filling, olives, dough, price){
        this.filling = filling;
        this.olives = olives;
        this.dough = dough;
        this.price = price;
        this.cake = false;
    }
};


export class Customer {
    constructor(user_name,money){
        this.user_name = user_name;
        this.money = money;
        this.pizza = null;
    }

    wantsPizza(pizza){
        this.pizza = pizza;
        return this.pizza;
    }

    placeOrder(pizzeria){
        return pizzeria.add_order(this.user_name,this.pizza);
        // if (incomin > this.price*count){
        //     let delivery = incomin - this.price * count
        //     if (count >= 3){
        //         this.cake = true;
        //     }
        //     return delivery;
        // } else {
        //     throw "Not enough money";
        // }
    }

};


export function NewCustomer(){
    var state = {}

    this.withName = function(name){
        state.name = name;
        return this;
    }

    this.withMoney = function(money){
        state.money = money;
        return this;
    }

    this.build = function(){
        return new Customer(state.name,state.money);
    }
}

export function NewPizza () {
    
    var state = {
        olives:false,
    };

    this.withFilling = function (filling) {
        state.filling = filling;
        return this;
    }

    this.withOlivies = function () {
        state.olives = true;
        return this;
    }

    this.withDough = function (dough) {
        state.dough = dough;
        return this;
    }
    this.withPrice = function(price){
        state.price = price;
        return this;
    }

    this.build = function () {
        //console.log(state);
        return new Pizza(state.filling, state.olives, state.dough, state.price);
    }
};


