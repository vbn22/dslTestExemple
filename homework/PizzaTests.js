/**
 * Created by michael on 07.11.16.
 */
import assert from 'assert'
import { NewPizza,Pizza } from '../homework/PizzaSrc.js'

suite('when i want to some pizza', function () {
    let pizza;
    let price = 25;
    setup(function(){
         pizza = new NewPizza()
        .withFilling("chiken")
        .withOlivies()
        .withDough('thin')
        .withPrice(price)
        .build();
    })

    test('Filling pizza is chiken', function () {
        assert.equal('chiken', pizza.filling);
    });

    test('Pizza with Olivies', function () {
        assert.equal(true, pizza.olives);
    });

    test('Dough pizza is thin', function () {
        assert.equal('thin', pizza.dough);
    });

    test('i can buy pizza with 30 money', function () {
        let delivery = pizza.buy(30,1);
        assert.equal(30-price, delivery);
    })

    test('i can NOT buy pizza with 20 money', function () {
        assert.throws(function(){pizza.buy(20,1)}, /Not enough money/);
    })

    test('get cake if i buy 3 pizzas', function () {
        let delivery = pizza.buy(100,3);
        assert.equal(true,pizza.cake);
    })
});