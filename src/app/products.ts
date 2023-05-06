export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  year: number;
}

export const products = [{
  id : 1,
  name : 'JavaScript for begginers',
  price: 12,
  description: 'For people, why want to start programming way',
  year: 2020
},
  {
    id: 2,
    name:'Elementary English ',
    price: 70,
    description: 'For A2 level English',
    year: 2012
  },
  {
    id: 3,
    name:'User Friendly',
    price: 100,
    description: 'For UI/UX designers',
    year: 2021
  }
];
