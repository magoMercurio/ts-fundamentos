(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'

  type Product = {
    title: string,
    createData: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = []

  const addProduct = (data: Product ) => {
    products.push(data)
  }

  addProduct({
    title: 'Pro1',
    createData: new Date(2023, 11, 8),
    stock: 12,
    size: 'XL'
  })

  console.log(products)
  products.push({
    title: 'Pro2',
    createData: new Date(2023, 11, 8),
    stock: 12,
  })

})()