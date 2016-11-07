/**
 * Created by michael on 07.11.16.
 */
import { NewPizza,Pizza } from '../homework/PizzaSrc.js'

suite('when i want to some pizza', function () {
    var pizza = new NewPizza()
        .withFilling("chiken")
        .withOlivies()
        .withDough('thin')
        .build();
    console.log(pizza);
});