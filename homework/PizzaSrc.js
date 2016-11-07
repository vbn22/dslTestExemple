/**
 * Created by michael on 07.11.16.
 */
'use strict';

export class Pizza {
    constructor(filling, olives, dough, price){
        this.filling = filling;
        this.olives = olives;
        this.dough = dough;
        this.price = price;
    }

    buy(incomin){
        if (incomin > this.price){
            let delivery = incomin - this.price
            return delivery
        } else {
            throw "Not enough money"
        }
    }

};


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
        console.log(state);
        return new Pizza(state.filling, state.olives, state.dough, state.price);
    }
};


