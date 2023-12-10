(() => {
  let prices = [1,2,2,1,1,212, 'hola', true];
  /* prices.push('asas')
  prices.push(true)
  prices.pussh({ }) */
  prices.push(121212)

  let products = ['hola', true]
  products.push(false)

  // froma de tipar un array con el tipo de contenido, al terminar se pone []
  let mixed: (number | string | boolean | Object)[] = ['hola', true]
  mixed.push(12)
  mixed.push('asas')
  mixed.push(false)
  mixed.push({})
  mixed.push([])

  let numbers = [1,2,3,4,5,6,7,8,9,10]
  numbers.map(item => item * 2)
})()