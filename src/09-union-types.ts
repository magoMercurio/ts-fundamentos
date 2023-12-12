(() => {
  let userId: string | number;
  userId = 1212
  userId = 'asdasd'

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase}`)
    } else {
      console.log(`numbeer ${myText.toFixed(1)}`)
    }
  }
  greeting('Hola')
  greeting(1212)
})()