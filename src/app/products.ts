export interface Product {
  id: number;
  name: string;
  author: string;
  images?: string;
  price: number;
  description: string;
  year: number;
  format: string;
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
  },
  {
    id: 2,
    name: "Elementary English ",
    author: "Oxford University Press",
    images: "https://list-english.ru/video/img/2012-1.png",
    price: 70,
    description: "For A2 level English",
    year: 2012,
    format: "paper-based",
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
  },
  {
    id: 4,
    name: "JavaScript for begginers",
    author: "Leonard Base",
    images:
      "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4302-7218-2",
    description: "For people, why want to start programming way",
    price: 12,
    year: 2020,
    format: "paper-based",
  },
  {
    id: 5,
    name: "Elementary English ",
    author: "Oxford University Press",
    images: "https://list-english.ru/video/img/2012-1.png",
    price: 70,
    description: "For A2 level English",
    year: 2012,
    format: "paper-based",
  },
  {
    id: 6,
    name: "User Friendly",
    author: "Cliff Kuang",
    images:
      "https://m.media-amazon.com/images/I/81BU0nbnNJL._AC_UF350,350_QL50_.jpg",
    price: 100,
    description: "For UI/UX designers",
    year: 2021,
    format: "paper-based",
  },
];
