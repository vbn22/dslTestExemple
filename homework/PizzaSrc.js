/**
 * Created by michael on 07.11.16.
 */
'use strict';

export function Pizza(filling, olives, dough) {
    
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

    this.build = function () {
        console.log(state);
        return new Pizza(state.filling, state.olives, state.dough);
    }
};
