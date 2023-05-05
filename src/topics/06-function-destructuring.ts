export interface Product {
    description: string;
    price: number;
}

const phone: Product ={
    description: "Nokia",
    price: 19.00
}

const tablet: Product ={
    description: "iPad Air",
    price: 199.00
}

interface TaxCalculationOptions{
    tax: number;
    products: Product[]
}

export function taxCalculation(options: TaxCalculationOptions): number[] {
    let total = 0;

    options.products.forEach(({price}) =>{
        total += price;
    });

    return[total, total * options.tax]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, TaxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})

console.log('Total:', total);
console.log('Total:', TaxTotal);


