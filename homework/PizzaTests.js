/**
 * Created by michael on 07.11.16.
 */
import assert from 'assert'
import { NewPizza,Pizza } from '../homework/PizzaSrc.js'

suite('when i want to some pizza', function () {
    let pizza;
    setup(function(){
         pizza = new NewPizza()
        .withFilling("chiken")
        .withOlivies()
        .withDough('thin')
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
});