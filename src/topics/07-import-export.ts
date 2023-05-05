import {Product,taxCalculation} from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'nokia',
        price:20
    },
    {
        description: 'XIO',
        price:20
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax:0.15
});

console.log('Total', total);
console.log('Tax', tax);