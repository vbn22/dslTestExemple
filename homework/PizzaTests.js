/**
 * Created by michael on 07.11.16.
 */
import assert from 'assert'
import { NewPizza,Pizza,NewCustomer,Pizzeria } from '../homework/PizzaSrc.js'

suite('when i want to some pizza', function () {
    let pizza;
    let pizzeria;
    let customer;
    let price = 25;
    setup(function(){
        customer = new NewCustomer()
            .withName('Michael')
            .withMoney(50)
            .build();

        pizza = new NewPizza()
            .withFilling("chiken")
            .withOlivies()
            .withDough('thin')
            .withPrice(price)
            .build();

        customer.wantsPizza(pizza);
        pizzeria = new Pizzeria();
    })


    // Тест метода отправки заявки заказа в пиццерию
    test('Customer can create order with pizza', function () {
        let order_pizza = customer.placeOrder(pizzeria);
        assert.equal(pizza, order_pizza)
    });

    // Тесты заказа в пицерии
    test('Filling pizza is chiken', function () {
        let order_pizza = customer.placeOrder(pizzeria);
        assert.equal('chiken', order_pizza.filling);
    });

    test('Pizza with Olivies', function () {
        let order_pizza = customer.placeOrder(pizzeria);
        assert.equal(true, order_pizza.olives);
    });

    test('Dough pizza is thin', function () {
        let order_pizza = customer.placeOrder(pizzeria);
        assert.equal('thin', order_pizza.dough);
    });
});