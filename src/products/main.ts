import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'Pro1',
  createData: new Date(2023, 11, 8),
  stock: 5,
  size: 'XL'
})

console.log(products)
products.push({
  title: 'Pro2',
  createData: new Date(2023, 11, 8),
  stock: 12,
})

console.log(products)
console.log(calcStock())