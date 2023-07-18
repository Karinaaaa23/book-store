export interface Product {
  id: number;
  name: string;
  author: string;
  images?: string;
  price: number;
  description: string;
  year: number;
  format: string;
  amount: number;
}

export const products = [
  {
    id: 1,
    name: "JavaScript for begginers",
    author: "Leonard Base",
    images:
      "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4302-7218-2",
    description: "For people, why want to start programming way",
    price: 12,
    year: 2020,
    format: "paper-based",
    amount: 1,
  },
  {
    id: 2,
    name: "Elementary English ",
    author: "Oxford University Press",
    images:
      "https://lbc.net.ua/image/cache/catalog/pidruchniki/english-file-4/pidruchnyk-english-file-fourth-edition-elementary-students-book-with-online-practice-9780194031592-430x600.jpg",
    price: 70,
    description: "For A2 level English",
    year: 2012,
    format: "paper-based",
    amount: 1,
  },
  {
    id: 3,
    name: "User Friendly",
    author: "Cliff Kuang",
    images:
      "https://m.media-amazon.com/images/I/81BU0nbnNJL._AC_UF350,350_QL50_.jpg",
    price: 100,
    description: "For UI/UX designers",
    year: 2021,
    format: "paper-based",
    amount: 1,
  },
  {
    id: 4,
    name: "JavaScript for begginers",
    author: "Leonard Base",
    images:
      "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4302-7218-2",
    description: "For people, why want to start programming way",
    price: 17,
    year: 2020,
    format: "paper-based",
    amount: 1,
  },
  {
    id: 5,
    name: "Elementary English ",
    author: "Oxford University Press",
    images:
      "https://lbc.net.ua/image/cache/catalog/pidruchniki/english-file-4/pidruchnyk-english-file-fourth-edition-elementary-students-book-with-online-practice-9780194031592-430x600.jpg",
    price: 120,
    description: "For A2 level English",
    year: 2012,
    format: "paper-based",
    amount: 1,
  },
  {
    id: 6,
    name: "Managing the Unmanageable",
    author: " Mickey Mantle",
    images:
      "https://m.media-amazon.com/images/I/413McpHd+2L._SX381_BO1,204,203,200_.jpg",
    price: 150,
    description: "For UI/UX designers",
    year: 2021,
    format: "paper-based",
    amount: 1,
  },
];
