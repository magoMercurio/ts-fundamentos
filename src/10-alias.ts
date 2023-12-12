(() => {
  // al crear tipos se usa camelCase  como en el ejemplo
  type UserID = string | number | boolean;

  //al usar el type para tipar la variable, esto permite reusar el tipo en diferentes variables
  let userId: UserID

  

  //literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtsSize: Sizes
  shirtsSize = 'S'
  shirtsSize = 'M'
  shirtsSize = 'L'
  shirtsSize = 'XL'
  //shirtsSize = 'XXL' //error

  function greeting(myText: UserID, size: Sizes ) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase}`)
    }
  }

  greeting(222, 'S')
  greeting('222', 'S')
  greeting(true, 'S')


})()