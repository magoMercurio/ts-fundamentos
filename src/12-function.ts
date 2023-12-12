(() => {

  type Size = 'S' | 'M' | 'L' | 'XL';

  function createproductToJson(
    title: String,
    createDat: Date,
    stock: number,
    size: Size
  ) {
    return {
      title,
      createDat,
      stock,
      size
    }
  }

  const product1 = createproductToJson('P1', new Date(), 12, 'XL');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.stock);

  const createproductToJsonV2 = (
    title: String,
    createDat: Date,
    stock: number,
    size?: Size
  ) => {
    return {
      title,
      createDat,
      stock,
      size
    }
  }
  const product2 = createproductToJsonV2('P1', new Date(), 12, 'M');
  console.log(product2);
  console.log(product2.title);
  console.log(product2.stock);
  console.log(product2.size);

})()