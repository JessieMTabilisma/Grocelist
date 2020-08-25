import { v1 as uuid } from 'uuid'

const SampleProduct = [
  {
    id: uuid(),
    product_name: 'Egg',
    product_image: '../assets/sample/egg.webp'
  },
  {
    id: uuid(),
    product_name: 'Baguio Oil',
    product_image: '../assets/sample/oil.jpg'
  },
  {
    id: uuid(),
    product_name: 'Datu Puti',
    product_image: '../assets/sample/suka.jpg'
  },
  {
    id: uuid(),
    product_name: 'Twix',
    product_image: '../assets/sample/twix.jpg'
  },
  {
    id: uuid(),
    product_name: 'Nestle milk',
    product_image: '../assets/sample/nestle.jpeg'
  },
  {
    id: uuid(),
    product_name: 'Anchor butter',
    product_image: '../assets/sample/butter.png'
  },
  {
    id: uuid(),
    product_name: 'Dutchmill',
    product_image: '../assets/sample/dutchmill.jpg'
  }
]

export default SampleProduct