(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  // login('admin@astro.com', 1212)
  login({
    email: 'admin@astro.com',
    password: 1212,
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products: any[] = []

  const addProduct = (data: {
    title: string,
    createData: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
  }

  addProduct({
    title: 'Pro1',
    createData: new Date(2023, 11, 8),
    stock: 12,
    size: 'XL'
  })

  console.log(products)

})()