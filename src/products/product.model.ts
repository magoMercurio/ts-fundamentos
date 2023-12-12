export type Sizes = 'S' | 'M' | 'L' | 'XL'

export type Product = {
  title: string,
  createData: Date,
  stock: number,
  size?: Sizes
}